// script.js
const API_BASE = 'https://studenthub-ai-lj46.onrender.com/api';

// ========== UTILITY FUNCTIONS (shared) ==========
function getCurrentUser() {
    const userStr = localStorage.getItem('studenthub_user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr);
    } catch (e) {
        return null;
    }
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function updateAuthUI() {
    const user = getCurrentUser();
    const authBtnText = document.getElementById('authBtnText');
    if (authBtnText) {
        authBtnText.textContent = user ? `👤 ${user.username || 'User'}` : 'Sign In';
    }
}

function signOut() {
    localStorage.removeItem('studenthub_user');
    updateAuthUI();
    window.location.reload();
}

function requireAuth(event) {
    if (!isLoggedIn()) {
        if (event) event.preventDefault();
        window.location.href = 'signin.html';
        return false;
    }
    return true;
}

// ========== MAIN PAGE LOGIC ==========
function initMainPage() {
    const authBtn = document.getElementById('signInBtn');
    if (authBtn) {
        authBtn.addEventListener('click', () => {
            if (isLoggedIn()) {
                if (confirm('Are you sure you want to sign out?')) {
                    signOut();
                }
            } else {
                window.location.href = 'signin.html';
            }
        });
    }

    // Protect elements with data-protected="true"
    document.querySelectorAll('[data-protected="true"]').forEach(el => {
        el.addEventListener('click', function(e) {
            if (!requireAuth(e)) return;
            // Proceed with action – you can add custom logic here
            // For example, alert('Access granted!');
        });
    });

    // Update UI on load
    updateAuthUI();
}

// ========== SIGNIN PAGE LOGIC ==========
function initSigninPage() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const toggleLink = document.getElementById('toggleLink');
    const toggleText = document.getElementById('toggleText');
    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    if (!signInForm) return; // Not on signin page

    let isSignUp = false;

    function showError(msg) {
        errorMessage.textContent = msg;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    function showSuccess(msg) {
        successMessage.textContent = msg;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    function hideMessages() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    }

    // Toggle between sign in and sign up
    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        isSignUp = !isSignUp;

        if (isSignUp) {
            signInForm.style.display = 'none';
            signUpForm.style.display = 'flex';
            toggleLink.textContent = 'Sign In';
            toggleText.textContent = 'Already have an account?';
            formTitle.textContent = 'Create Account';
            formSubtitle.textContent = 'Join StudentHub-AI today';
        } else {
            signInForm.style.display = 'flex';
            signUpForm.style.display = 'none';
            toggleLink.textContent = 'Sign Up';
            toggleText.textContent = "Don't have an account?";
            formTitle.textContent = 'Welcome Back!';
            formSubtitle.textContent = 'Sign in to continue your learning journey';
        }
        hideMessages();
    });

    // Sign In
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideMessages();

        const email = document.getElementById('signInEmail').value.trim();
        const password = document.getElementById('signInPassword').value.trim();

        if (!email || !password) {
            showError('Please fill in all fields');
            return;
        }

        const btn = document.getElementById('signInBtn');
        btn.disabled = true;
        btn.textContent = 'Signing in...';

        try {
            const response = await fetch(`${API_BASE}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Sign in failed');
            }

            localStorage.setItem('studenthub_user', JSON.stringify(data.user));
            showSuccess('Signed in successfully! Redirecting...');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } catch (err) {
            showError(err.message);
        } finally {
            btn.disabled = false;
            btn.textContent = 'Sign In';
        }
    });

    // Sign Up
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideMessages();

        const username = document.getElementById('signUpUsername').value.trim();
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value.trim();

        if (!username || !email || !password) {
            showError('Please fill in all fields');
            return;
        }

        const btn = document.getElementById('signUpBtn');
        btn.disabled = true;
        btn.textContent = 'Creating account...';

        try {
            const response = await fetch(`${API_BASE}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Sign up failed');
            }

            showSuccess('Account created successfully! Please sign in.');

            setTimeout(() => {
                isSignUp = false;
                signInForm.style.display = 'flex';
                signUpForm.style.display = 'none';
                toggleLink.textContent = 'Sign Up';
                toggleText.textContent = "Don't have an account?";
                formTitle.textContent = 'Welcome Back!';
                formSubtitle.textContent = 'Sign in to continue your learning journey';
                document.getElementById('signInEmail').value = email;
                document.getElementById('signUpUsername').value = '';
                document.getElementById('signUpEmail').value = '';
                document.getElementById('signUpPassword').value = '';
                hideMessages();
            }, 1500);
        } catch (err) {
            showError(err.message);
        } finally {
            btn.disabled = false;
            btn.textContent = 'Create Account';
        }
    });

    // If already logged in, redirect to main page
    if (isLoggedIn()) {
        window.location.href = 'index.html';
    }
}

// ========== INITIALIZE BASED ON PAGE ==========
document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the signin page (by presence of auth container)
    const isSigninPage = document.querySelector('.auth-container') !== null;

    if (isSigninPage) {
        initSigninPage();
    } else {
        initMainPage();
    }
});
