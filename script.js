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
    },
    "Actuarial Science": {
        degree: "B.Sc. Actuarial Science",
        levels: [
            {
                level: "100 Level (Foundations in Math, Stats & Finance)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACT 101: Introduction to Actuarial Science I",
                            "MTH 101: Elementary Mathematics I (Algebra, Trigonometry & Calculus)",
                            "STA 101: Probability and Statistics I",
                            "ACC 101: Introduction to Financial Accounting I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACT 102: Introduction to Actuarial Science II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "STA 102: Probability and Statistics II",
                            "ACC 102: Introduction to Financial Accounting II",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Financial Mathematics & Risk Core)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACT 201: Mathematics of Finance / Interest Theory I",
                            "ACT 203: Principles of Insurance & Risk Management",
                            "STA 201: Probability Distributions & Mathematical Statistics I",
                            "MTH 201: Mathematical Methods I (Advanced Calculus & Differential Equations)",
                            "ACC 201: Financial Accounting I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACT 202: Mathematics of Finance / Interest Theory II",
                            "ACT 204: Life Contingencies / Actuarial Mathematics I",
                            "STA 202: Probability Distributions & Mathematical Statistics II",
                            "MTH 202: Linear Algebra I",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "CSC 202: Programming in Actuarial / Data Languages (R, Python, or MATLAB)"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Actuarial Modeling & Contingencies)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACT 301: Actuarial Mathematics II (Life Contingencies & Multiple Life Models)",
                            "ACT 303: Financial Economics I (Asset Pricing & Derivatives)",
                            "ACT 305: Demography & Mortality Analysis",
                            "STA 301: Stochastic Processes I",
                            "STA 303: Regression and Time Series Analysis",
                            "FIN 301: Corporate Finance / Financial Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACT 302: Loss Models & Survival Analysis",
                            "ACT 304: Financial Economics II (Portfolio Theory & Financial Risk)",
                            "ACT 306: Pension & Social Insurance Models",
                            "ACT 310: Industrial Training / SIWES (Actuarial/Insurance Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Risk, Models & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ACT 401: Advanced Actuarial Mathematics & Credibility Theory",
                            "ACT 403: Non-Life Insurance Mathematics & Reserving",
                            "ACT 405: Actuarial Risk Management (ERM)",
                            "ACT 407: Financial Risk Measurement & Value at Risk (VaR)",
                            "ACT 409: Quantitative Risk Modeling & Data Analytics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ACT 402: Actuarial Practice, Ethics & Professionalism",
                            "ACT 404: Enterprise Risk Management (ERM) & Solvency Models",
                            "ACT 406: Health Insurance Mathematics & Healthcare Financing",
                            "ACT 408: Financial Modeling & Computational Actuarial Methods",
                            "ACT 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Banking and Finance": {
        degree: "B.Sc. Banking and Finance",
        levels: [
            {
                level: "100 Level (Foundations in Commerce & Economics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIN 101: Introduction to Finance I",
                            "BFN 103: Elements of Banking",
                            "ACC 101: Introduction to Financial Accounting I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "AMS / BUA 101: Principles of Management / Introduction to Business I",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications",
                            "AMS 102 / MTH 105: Mathematics for Management & Social Sciences I"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIN 102: Introduction to Finance II",
                            "BFN 104: History and Development of Banking in Nigeria",
                            "ACC 102: Introduction to Financial Accounting II",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "MKT 101: Elements of Marketing",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Banking & Financial Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BFN 201: Money and Banking",
                            "FIN 203: Financial Systems and Institutions",
                            "ACC 201: Financial Accounting I",
                            "AMS 201 / BFN 205: Business Statistics I",
                            "ECO 201: Microeconomic Theory",
                            "ENT 211: Entrepreneurship and Innovation",
                            "BFN 207: Business Law / Commercial Law"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BFN 202: Banking Methods and Processes",
                            "FIN 204: Principles of Investment",
                            "ACC 202: Financial Accounting II",
                            "AMS 202 / BFN 206: Business Statistics II / Quantitative Techniques",
                            "ECO 202: Macroeconomic Theory",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "BFN 208: Computer Applications in Banking & Finance"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Financial Management & Operations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIN 301: Financial Management I (Corporate Finance)",
                            "BFN 303: Bank Lending and Credit Administration",
                            "BFN 305: Capital Market and Investment Analysis",
                            "BFN 307: Monetary Economics / Policy",
                            "BFN 309: International Trade and Finance",
                            "BFN 311: Business Research Methodology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIN 302: Financial Management II",
                            "BFN 304: Bank Practice and Management",
                            "BFN 306: Public Finance and Fiscal Policy",
                            "BFN 308: Banking Laws and Regulations in Nigeria",
                            "BFN 310: Industrial Training / SIWES (Bank / Financial Firm Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Finance, Risk & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIN 401: Advanced Corporate Finance",
                            "BFN 403: Financial Risk Management and Derivatives",
                            "BFN 405: International Finance and Foreign Exchange Management",
                            "BFN 407: Portfolio Management and Asset Pricing",
                            "BFN 409: Microfinance and Rural Banking",
                            "BFN 411: Corporate Governance and Ethics in Banking"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BFN 402: Financial Institutions Management & Strategic Banking",
                            "BFN 404: E-Banking, Fintech, and Digital Financial Innovation",
                            "BFN 406: Development Banking and Project Finance",
                            "BFN 408: Multidisciplinary Case Studies in Banking and Finance",
                            "BFN 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Business Administration / Management": {
        degree: "B.Sc. Business Administration / Management",
        levels: [
            {
                level: "100 Level (Foundations in Commerce & Social Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BUA 101: Principles of Management I",
                            "BUA 103: Introduction to Business I",
                            "ACC 101: Introduction to Financial Accounting I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "AMS 101: Mathematics for Management Sciences I",
                            "AMS 103: Introduction to Computing / Computer Applications",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BUA 102: Principles of Management II",
                            "BUA 104: Introduction to Business II",
                            "ACC 102: Introduction to Financial Accounting II",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "MKT 101: Elements of Marketing",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Management Concepts)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BUA 201: Business Statistics I",
                            "BUA 203: Organizational Behaviour I",
                            "BUA 205: Commercial Law / Business Law I",
                            "ACC 201: Financial Accounting I",
                            "ECO 201: Microeconomic Theory",
                            "ENT 211: Entrepreneurship and Innovation",
                            "FIN 201: Fundamentals of Finance"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BUA 202: Business Statistics II / Quantitative Techniques",
                            "BUA 204: Organizational Behaviour II",
                            "BUA 206: Commercial Law / Business Law II",
                            "BUA 208: Production and Operations Management",
                            "ECO 202: Macroeconomic Theory",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "BUA 210: Computer Applications in Business"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Strategic & Functional Management)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BUA 301: Human Resource Management I",
                            "BUA 303: Business Research Methodology",
                            "BUA 305: Financial Management (Corporate Finance)",
                            "BUA 307: Management Information Systems (MIS)",
                            "BUA 309: Managerial Economics",
                            "BUA 311: Elements of Government & Political Economy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BUA 302: Human Resource Management II",
                            "BUA 304: Operations Research / Management Science",
                            "BUA 306: Marketing Management",
                            "BUA 308: Consumer Behaviour",
                            "BUA 310: Industrial Training / SIWES (Business Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy & Executive Leadership)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BUA 401: Business Policy and Strategy I",
                            "BUA 403: International Business / Global Management",
                            "BUA 405: Corporate Governance and Business Ethics",
                            "BUA 407: Comparative Management Systems",
                            "BUA 409: Analysis for Business Decisions",
                            "BUA 411: Small Business Management & Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BUA 402: Business Policy and Strategy II",
                            "BUA 404: Project Management and Feasibility Analysis",
                            "BUA 406: Change Management and Organizational Development",
                            "BUA 408: Corporate Communication & Public Relations",
                            "BUA 410: Cases in Business Strategy / Management Seminar",
                            "BUA 490: Research Project / Dissertation"
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
