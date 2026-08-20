// script.js
const API_BASE = 'https://studenthub-ai-lj46.onrender.com/api';

// ========== COURSE TOPICS ==========
// Course data (name/degree/topics) now lives in Supabase; see backend/server.js
// GET /api/courses and GET /api/courses/topics?name=...

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

function escapeHtmlAttr(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Shared header wiring (sign-in/out button, protected-link gating) used on every page
function initHeader() {
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

    document.querySelectorAll('[data-protected="true"]').forEach(el => {
        el.addEventListener('click', function(e) {
            if (!requireAuth(e)) return;
        });
    });

    updateAuthUI();
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

    courseData.topics.forEach((level, levelIndex) => {
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
                const colorIndex = (code.length + titleText.length) % iconColors.length;
                const bgColor = iconColors[colorIndex];
                html += `<div class="modal-topic-card" data-code="${escapeHtmlAttr(code)}" data-title="${escapeHtmlAttr(titleText)}">`;
                html += `<div class="modal-topic-icon" style="background: ${bgColor};"><i class="fas fa-book-open"></i></div>`;
                html += `<div class="modal-topic-info">`;
                html += `<h4>${code}</h4>`;
                if (titleText) html += `<p>${titleText}</p>`;
                html += `</div>`;
                html += `</div>`;
            });
            html += `</div>`;
            html += `</div>`;
        });
        html += `</div>`;
    });

    content.innerHTML = html;

    content.querySelectorAll('.modal-topic-card').forEach(card => {
        card.addEventListener('click', () => {
            const params = new URLSearchParams({
                program: courseName,
                code: card.dataset.code || '',
                title: card.dataset.title || ''
            });
            window.location.href = `topic.html?${params.toString()}`;
        });
    });

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
function initSidebarTabs() {
    const masterNoteTab = document.getElementById('masterNoteTab');
    const pastQuestionsTab = document.getElementById('pastQuestionsTab');
    const masterNoteView = document.getElementById('masterNoteView');
    const pastQuestionsView = document.getElementById('pastQuestionsView');
    const sidebarTopicsHeading = document.getElementById('sidebarTopicsHeading');
    const sidebarTopicsList = document.getElementById('sidebarTopicsList');

    if (!masterNoteTab || !pastQuestionsTab) return;

    function selectTab(tab) {
        const isMasterNote = tab === 'master-note';
        masterNoteTab.classList.toggle('active', isMasterNote);
        pastQuestionsTab.classList.toggle('active', !isMasterNote);
        if (masterNoteView) masterNoteView.style.display = isMasterNote ? '' : 'none';
        if (pastQuestionsView) pastQuestionsView.style.display = isMasterNote ? 'none' : '';
        if (sidebarTopicsHeading) sidebarTopicsHeading.style.display = isMasterNote ? '' : 'none';
        if (sidebarTopicsList) sidebarTopicsList.style.display = isMasterNote ? '' : 'none';
    }

    masterNoteTab.addEventListener('click', () => selectTab('master-note'));
    pastQuestionsTab.addEventListener('click', () => selectTab('past-questions'));
}

// If we're on the Master-Note view of topic.html: with no topic code in the
// URL, show the "pick a topic" placeholder; otherwise fetch that topic's
// note from the backend (GET /api/notes?code=...) and show it, or a
// "coming soon" message if it hasn't been written yet.
async function initMasterNoteRouting() {
    const empty = document.getElementById('mnEmpty');
    const noteContainer = document.getElementById('mnNoteContainer');
    const unavailable = document.getElementById('mnUnavailable');
    if (!empty || !noteContainer || !unavailable) return;

    const sidebarTopicsList = document.getElementById('sidebarTopicsList');
    if (sidebarTopicsList) sidebarTopicsList.innerHTML = '';

    function showOnly(which) {
        empty.style.display = which === 'empty' ? '' : 'none';
        noteContainer.style.display = which === 'note' ? '' : 'none';
        unavailable.style.display = which === 'unavailable' ? '' : 'none';
    }

    const params = new URLSearchParams(window.location.search);
    const code = (params.get('code') || '').trim();
    const title = params.get('title') || '';

    if (!code) {
        showOnly('empty');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/notes?code=${encodeURIComponent(code)}`);
        if (response.status === 404) throw new Error('Note not found');
        if (!response.ok) throw new Error('Failed to load master note');
        const data = await response.json();
        noteContainer.innerHTML = data.content;
        showOnly('note');
        initMasterNoteSections(noteContainer);
    } catch (err) {
        const unavailableText = document.getElementById('mnUnavailableText');
        if (unavailableText) {
            const label = title ? `${code}: ${title}` : code;
            unavailableText.textContent = `We haven't written the master note for "${label}" yet. Check back soon — new notes are being added regularly.`;
        }
        showOnly('unavailable');
    }
}

// Book-style navigation through one master note: shows a single section at a
// time, lists every section in the sidebar under "Topics", and wires the
// Previous/Next buttons at the bottom of the section.
function initMasterNoteSections(noteEl) {
    const sections = Array.from(noteEl.querySelectorAll('.mn-section'));
    if (sections.length === 0) return;

    const sidebarTopicsList = document.getElementById('sidebarTopicsList');
    const pagerPrev = document.getElementById('mnPagerPrev');
    const pagerNext = document.getElementById('mnPagerNext');
    const pagerPrevTitle = document.getElementById('mnPagerPrevTitle');
    const pagerNextTitle = document.getElementById('mnPagerNextTitle');
    const pagerPosition = document.getElementById('mnPagerPosition');

    const titles = sections.map(section => {
        const heading = section.querySelector('h2');
        return heading ? heading.textContent.trim() : '';
    });

    let sidebarLinks = [];
    if (sidebarTopicsList) {
        sidebarTopicsList.innerHTML = '';
        sidebarLinks = titles.map((sectionTitle, i) => {
            const link = document.createElement('button');
            link.type = 'button';
            link.className = 'sidebar-topic-link';
            link.textContent = sectionTitle;
            link.addEventListener('click', () => showSection(i));
            sidebarTopicsList.appendChild(link);
            return link;
        });
    }

    let currentIndex = 0;

    function showSection(index, options) {
        const scroll = !options || options.scroll !== false;
        currentIndex = Math.max(0, Math.min(index, sections.length - 1));

        sections.forEach((section, i) => {
            section.style.display = i === currentIndex ? '' : 'none';
        });

        sidebarLinks.forEach((link, i) => {
            link.classList.toggle('active', i === currentIndex);
        });

        if (pagerPrev) pagerPrev.disabled = currentIndex === 0;
        if (pagerNext) pagerNext.disabled = currentIndex === sections.length - 1;
        if (pagerPrevTitle) pagerPrevTitle.textContent = currentIndex > 0 ? titles[currentIndex - 1] : '';
        if (pagerNextTitle) pagerNextTitle.textContent = currentIndex < sections.length - 1 ? titles[currentIndex + 1] : '';
        if (pagerPosition) pagerPosition.textContent = `Section ${currentIndex + 1} of ${sections.length}`;

        if (scroll) {
            noteEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    if (pagerPrev) pagerPrev.addEventListener('click', () => showSection(currentIndex - 1));
    if (pagerNext) pagerNext.addEventListener('click', () => showSection(currentIndex + 1));

    showSection(0, { scroll: false });
}

function initMainPage() {
    initHeader();
    initSidebarTabs();
    initMasterNoteRouting();

    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', async function(e) {
            if (!requireAuth(e)) return;

            const titleEl = this.querySelector('.course-info h4');
            if (!titleEl) return;
            const courseName = titleEl.textContent.trim();

            try {
                const response = await fetch(`${API_BASE}/courses/topics?name=${encodeURIComponent(courseName)}`);
                if (response.status === 404) {
                    alert('Course topics not yet available for this program.');
                    return;
                }
                if (!response.ok) {
                    throw new Error('Failed to load course topics');
                }
                const data = await response.json();
                openTopicsModal(data.name, data);
            } catch (err) {
                alert('Could not load course topics. Please try again.');
            }
        });
    });

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
}

// ========== TOPIC PAGE LOGIC ==========
function initTopicPage() {
    initHeader();

    const params = new URLSearchParams(window.location.search);
    const program = params.get('program') || '';
    const code = params.get('code') || '';
    const title = params.get('title') || '';

    const titleEl = document.getElementById('topicTitle');
    const subtitleEl = document.getElementById('topicSubtitle');

    if (titleEl) {
        titleEl.textContent = title ? `${code}: ${title}` : (code || 'Topic');
    }
    if (subtitleEl) {
        subtitleEl.textContent = program;
    }
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

    if (isLoggedIn()) {
        window.location.href = 'index.html';
    }
}

// ========== INITIALIZE BASED ON PAGE ==========
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.auth-container')) {
        initSigninPage();
    } else if (document.getElementById('topicTitle')) {
        initTopicPage();
    } else {
        initMainPage();
    }
});
