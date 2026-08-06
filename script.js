// script.js
const API_BASE = 'https://studenthub-ai-lj46.onrender.com/api';

// ========== COURSE TOPICS DATA ==========
const COURSES_DATA = {
    "Accountancy / Accounting": {
        degree: "B.Sc. Accounting",
        levels: [
            {
                level: "100 Level (Foundation Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACC 101: Introduction to Financial Accounting I",
                            "AMS / BUA 101: Principles of Management / Introduction to Business I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "FIN 101: Introduction to Finance",
                            "AMS 103: Introduction to Computing / Computer Applications",
                            "GST 111: Communication in English Language",
                            "ACC 103 / AMS 102: Mathematics for Management & Accounting I"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACC 102: Introduction to Financial Accounting II",
                            "ACC 106: Accounting Theory & Foundations",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "MKT 101: Elements of Marketing",
                            "GST 112: Nigerian Peoples and Culture",
                            "AMS 104: Principles of Project Management"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Accounting Principles)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACC 201: Financial Accounting I",
                            "ACC 203: Corporate Governance & Accounting Ethics",
                            "ACC 205 / ACC 211: Introduction to Cost & Management Accounting",
                            "ACC 233 / AMS 201: Business Statistics I",
                            "ECN / ECO 201: Microeconomic Theory",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACC 202: Financial Accounting II",
                            "ACC 204: Cost Accounting",
                            "ACC 206: Accounting Laboratory / Computerized Accounting Systems",
                            "ACC 214: Management Accounting I",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "ACC 213 / ACC 226: Mathematics / Quantitative Techniques for Accounting"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Professional Core & Applications)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACC 301: Financial Reporting I",
                            "ACC 303: Management Accounting II",
                            "ACC 305: Taxation I (Personal & Corporate Taxation Principles)",
                            "ACC 307: Auditing & Assurance I",
                            "ACC 311: Entrepreneurship in Accounting / Business Development",
                            "ACC 313: Business Research Methodology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACC 302: Financial Reporting II",
                            "ACC 306: Taxation II (Advanced Taxation & Tax Management)",
                            "ACC 308: Public Sector Accounting & Reporting (IPSAS)",
                            "ACC 314: Company Law & Corporate Practice",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation",
                            "ACC 310: Accounting SIWES / Industrial Training / Internship"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACC 401: Advanced Financial Reporting (IFRS Standards)",
                            "ACC 403: Auditing & Assurance II (Audit Practice, Special Investigations, & IT Audit)",
                            "ACC 405: Corporate Bankruptcy, Liquidation, & Reorganisation",
                            "ACC 407: Oil & Gas / Petroleum Accounting",
                            "ACC 409: International Accounting & Financial Systems",
                            "ACC 413: Business Decision Analysis & Quantitative Models"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACC 402: Corporate Reporting & Governance",
                            "ACC 404: Financial Management & Strategic Corporate Finance",
                            "ACC 406: Strategic Management Accounting & Performance Management",
                            "ACC 408: Multidisciplinary Case Study / Accounting Theory",
                            "ACC 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    }
    // Add more courses here later
};

// ========== UTILITY FUNCTIONS ==========
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

// ========== TOPICS MODAL – REDESIGNED ==========
function openTopicsModal(courseName, courseData) {
    const modal = document.getElementById('topicsModal');
    const title = document.getElementById('modalTitle');
    const content = document.getElementById('modalContent');

    if (!modal || !title || !content) return;

    title.textContent = `${courseName} – ${courseData.degree}`;

    let html = '';
    const iconColors = ['#6e45e2', '#4361ee', '#00d4ff', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6', '#1abc9c'];
    
    courseData.levels.forEach((level, levelIndex) => {
        html += `<div class="modal-level">`;
        html += `<div class="modal-level-header"><i class="fas fa-layer-group"></i> ${level.level}</div>`;
        level.semesters.forEach((sem, semIndex) => {
            html += `<div class="modal-semester">`;
            html += `<div class="modal-semester-header"><i class="fas fa-calendar-alt"></i> ${sem.semester}</div>`;
            html += `<div class="modal-topics-grid">`;
            sem.courses.forEach(course => {
                const parts = course.split(':');
                const code = parts[0].trim();
                const titleText = parts.length > 1 ? parts[1].trim() : '';
                // pick a consistent color based on course code
                const colorIndex = (code.length + titleText.length) % iconColors.length;
                const bgColor = iconColors[colorIndex];
                html += `<div class="modal-topic-card">`;
                html += `<div class="modal-topic-icon" style="background: ${bgColor};"><i class="fas fa-book-open"></i></div>`;
                html += `<div class="modal-topic-info">`;
                html += `<h4>${code}</h4>`;
                if (titleText) html += `<p>${titleText}</p>`;
                html += `</div>`;
                html += `</div>`;
            });
            html += `</div>`; // close topics grid
            html += `</div>`; // close semester
        });
        html += `</div>`; // close level
    });

    content.innerHTML = html;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeTopicsModal() {
    const modal = document.getElementById('topicsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
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
        });
    });

    // Course cards – open topics modal
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!requireAuth(e)) return;

            const titleEl = this.querySelector('.course-info h4');
            if (!titleEl) return;
            const courseName = titleEl.textContent.trim();

            const data = COURSES_DATA[courseName];
            if (!data) {
                alert('Course topics not yet available for this program.');
                return;
            }

            openTopicsModal(courseName, data);
        });
    });

    // Modal close handlers
    const modal = document.getElementById('topicsModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTopicsModal();
            }
        });

        const closeBtn = document.getElementById('closeTopicsModalBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeTopicsModal);
        }
    }

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

    if (!signInForm) return;

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
    const isSigninPage = document.querySelector('.auth-container') !== null;

    if (isSigninPage) {
        initSigninPage();
    } else {
        initMainPage();
    }
});
