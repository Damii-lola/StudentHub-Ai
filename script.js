// script.js
const API_BASE = 'https://studenthub-ai-lj46.onrender.com/api';

// ========== COURSE TOPICS DATA ==========
const COURSES_DATA = {
    // ===== ACCOUNTING & FINANCE PROGRAMS =====
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
    },
    "Industrial Relations and Personnel Management": {
        degree: "B.Sc. Industrial Relations and Personnel Management",
        levels: [
            {
                level: "100 Level (Foundations in Social Sciences & Business)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "IRP 101: Introduction to Industrial Relations I",
                            "IRP 103: Elements of Personnel Management I",
                            "SOC 101: Introduction to Sociology I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "BUA 101: Principles of Management I",
                            "AMS 101: Mathematics for Management Sciences I",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "IRP 102: Introduction to Industrial Relations II",
                            "IRP 104: Elements of Personnel Management II",
                            "SOC 102: Introduction to Sociology II / Sociology of Work",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "PSY 101: Introduction to Psychology",
                            "GST 112: Nigerian Peoples and Culture",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Labour & HR Principles)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "IRP 201: Nigerian Labour History and Development",
                            "IRP 203: Principles of Human Resource Management",
                            "IRP 205: Labour Law I (Law of Employment & Contract of Service)",
                            "IRP 207: Industrial Sociology",
                            "AMS 201: Business Statistics I",
                            "ECO 201: Microeconomic Theory",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "IRP 202: Collective Bargaining and Dispute Resolution",
                            "IRP 204: Human Resource Development & Training",
                            "IRP 206: Labour Law II (Trade Union Law & Compensation)",
                            "IRP 208: Organizational Psychology",
                            "AMS 202: Business Statistics II / Quantitative Methods",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "IRP 210: Computer Applications in Personnel Management"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Professional Practice & Labour Economics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "IRP 301: Trade Unionism and Employers' Associations",
                            "IRP 303: Compensation and Reward Management",
                            "IRP 305: Labour Market Analysis & Labour Economics",
                            "IRP 307: Performance Management Systems",
                            "IRP 309: Research Methods in Industrial Relations",
                            "BUA 307: Management Information Systems (MIS)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "IRP 302: Industrial Safety, Health, and Ergonomics",
                            "IRP 304: Strategic Human Resource Management (SHRM)",
                            "IRP 306: Comparative Industrial Relations Systems",
                            "IRP 308: Industrial Conflict Management & Negotiation",
                            "IRP 310: Industrial Training / SIWES (HR / Industrial Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy, Ethics & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "IRP 401: Advanced Collective Bargaining & Labour Policy in Nigeria",
                            "IRP 403: International Labour Standards & ILO Regulations",
                            "IRP 405: Organizational Change & Change Management",
                            "IRP 407: Human Resource Information Systems (HRIS) & HR Analytics",
                            "IRP 409: Corporate Governance, Ethics & Professionalism in HR (CIPM Standards)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "IRP 402: Contemporary Issues in Industrial Relations & HRM",
                            "IRP 404: Seminar in Personnel Management & Labour Relations",
                            "IRP 406: Diversity, Inclusion, and Global Human Resource Management",
                            "IRP 408: Manpower Planning and Talent Acquisition Strategy",
                            "IRP 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Marketing": {
        degree: "B.Sc. Marketing",
        levels: [
            {
                level: "100 Level (Foundations in Marketing & Commerce)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MKT 101: Principles of Marketing I",
                            "BUA 101: Principles of Management I",
                            "BUA 103: Introduction to Business I",
                            "ACC 101: Introduction to Financial Accounting I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "AMS 101: Mathematics for Management Sciences I",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MKT 102: Principles of Marketing II",
                            "BUA 102: Principles of Management II",
                            "ACC 102: Introduction to Financial Accounting II",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "AMS 103: Introduction to Computing / Computer Applications",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Marketing Concepts & Consumer Dynamics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MKT 201: Consumer Behaviour",
                            "MKT 203: Marketing Channels & Distribution Management",
                            "MKT 205: Commercial Law / Business Law I",
                            "AMS 201: Business Statistics I",
                            "ACC 201: Financial Accounting I",
                            "ECO 201: Microeconomic Theory",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MKT 202: Product Policy and Brand Management",
                            "MKT 204: Sales Management and Personal Selling",
                            "MKT 206: Pricing Strategies and Management",
                            "AMS 202: Business Statistics II / Quantitative Methods",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "MKT 208: Computer Applications in Marketing"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Applied Marketing, Research & Strategy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MKT 301: Marketing Research Methodology",
                            "MKT 303: Integrated Marketing Communications (IMC) & Advertising",
                            "MKT 305: Service Marketing",
                            "MKT 307: Agricultural & Industrial Marketing (B2B Marketing)",
                            "MKT 309: Managerial Economics",
                            "BUA 307: Management Information Systems (MIS)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MKT 302: Digital Marketing & Social Media Strategy",
                            "MKT 304: Public Relations and Publicity",
                            "MKT 306: Retailing and Wholesaling Management",
                            "MKT 308: International / Global Marketing",
                            "MKT 310: Industrial Training / SIWES (Marketing Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy, Ethics & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MKT 401: Strategic Marketing Management & Policy",
                            "MKT 403: Marketing Metrics and Analytics",
                            "MKT 405: Customer Relationship Management (CRM)",
                            "MKT 407: Logistics and Supply Chain Management",
                            "MKT 409: Business Ethics and Corporate Governance in Marketing"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MKT 402: Contemporary Issues in Marketing / Marketing Seminar",
                            "MKT 404: Innovation and New Product Development",
                            "MKT 406: Political and Non-Profit Marketing",
                            "MKT 408: Multi-Disciplinary Case Studies in Marketing",
                            "MKT 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Public Administration": {
        degree: "B.Sc. Public Administration",
        levels: [
            {
                level: "100 Level (Foundations in Public Admin & Governance)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PAD 101: Introduction to Public Administration I",
                            "POL 101: Introduction to Political Science I",
                            "SOC 101: Introduction to Sociology I",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "BUA / AMS 101: Principles of Management I",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PAD 102: Introduction to Public Administration II",
                            "POL 102: Introduction to Political Science II / Elements of Politics",
                            "SOC 102: Nigerian Society and Culture",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "GST 112: Nigerian Peoples and Culture",
                            "AMS 102: Mathematics for Social & Management Sciences"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Administrative Theory & Governance)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PAD 201: Elements of Public Administration",
                            "PAD 203: Administrative Theory and Behaviour I",
                            "PAD 205: Nigerian Government and Administration I",
                            "POL 201: Nigerian Constitutional Development",
                            "AMS 201: Business & Social Statistics I",
                            "ENT 211: Entrepreneurship and Innovation",
                            "PAD 207: Traditional Administrative Systems in Nigeria"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PAD 202: Organization and Methods (O & M)",
                            "PAD 204: Administrative Theory and Behaviour II",
                            "PAD 206: Nigerian Government and Administration II",
                            "PAD 208: Local Government Administration in Nigeria",
                            "AMS 202: Business & Social Statistics II",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "PAD 210: Public Sector Economics"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Public Policy, Financial & Personnel Admin)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PAD 301: Public Personnel Administration",
                            "PAD 303: Public Financial Administration & Public Accounting",
                            "PAD 305: Development Administration",
                            "PAD 307: Public Policy Analysis & Formulation",
                            "PAD 309: Research Methodology in Public Administration",
                            "PAD 311: Administrative Law"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PAD 302: Intergovernmental Relations in Nigeria",
                            "PAD 304: Comparative Public Administration",
                            "PAD 306: Public Enterprises and Privatization in Nigeria",
                            "PAD 308: Bureaucracy and Development",
                            "PAD 310: Industrial Training / SIWES (Public Sector Internship)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Public Strategy, Ethics & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PAD 401: Advanced Public Policy Analysis",
                            "PAD 403: Ethics and Accountability in the Public Service",
                            "PAD 405: International Administration and Diplomacy",
                            "PAD 407: Civil Service in Nigeria and Reforms",
                            "PAD 409: Urban and Regional Planning Administration"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PAD 402: Strategic Management in the Public Sector",
                            "PAD 404: E-Governance and Information Technology in Public Admin",
                            "PAD 406: Seminar in Public Administration",
                            "PAD 408: Disaster and Conflict Management in Public Sector",
                            "PAD 490: Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== AGRICULTURE PROGRAMS =====
    "Agricultural Economics and Extension": {
        degree: "B.Agric. Agricultural Economics and Extension",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AEC / AGE 101: Introduction to Agricultural Economics",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AXT / AEX 102: Introduction to Agricultural Extension & Rural Sociology",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Agricultural Foundations & Economic Principles)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AEC 201: Principles of Agricultural Economics I (Microeconomics)",
                            "AXT 201: Fundamentals of Agricultural Extension",
                            "AGR 201: Principles of Crop Production",
                            "AGR 203: Principles of Animal Production",
                            "AGR 205: Introduction to Soil Science",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AEC 202: Principles of Agricultural Economics II (Macroeconomics)",
                            "AXT 202: Rural Sociology and Development",
                            "AGR 202: Principles of Forestry & Wildlife Management",
                            "AGR 204: Principles of Fisheries & Aquaculture",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Intermediate Economics, Extension & Quantitative Methods)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AEC 301: Production Economics & Farm Management",
                            "AEC 303: Agricultural Marketing & Prices",
                            "AXT 301: Extension Teaching Methods & Communication Technology",
                            "AXT 303: Diffusion and Adoption of Agricultural Innovations",
                            "AEC 305: Quantitative Techniques in Agricultural Economics",
                            "AGR 301: Agricultural Meteorology & Climatology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AEC 302: Agricultural Finance and Credit",
                            "AEC 304: Resource and Environmental Economics",
                            "AXT 302: Extension Administration, Programme Planning & Evaluation",
                            "AXT 304: Community Leadership and Youth Organisations in Agriculture",
                            "AGR 302: Research Methodology in Agriculture",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Crop Production & Farm Management",
                            "PYA 402: Practical Livestock Production & Health",
                            "PYA 403: Agricultural Extension Field Work & Rural Community Survey",
                            "PYA 404: Farm Records, Accounting & Inventory Management",
                            "PYA 405: Agricultural Processing, Storage & Post-Harvest Operations",
                            "PYA 406: Farm Machinery & Workshop Practice"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Economics, Policy, Extension & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AEC 501: Advanced Production Economics & Econometrics",
                            "AEC 503: Agricultural Policy, Development & Planning",
                            "AEC 505: Project Appraisal, Monitoring & Evaluation",
                            "AXT 501: Advanced Extension Administration & Management",
                            "AXT 503: Rural Social Change and Transformation",
                            "AXT 505: Gender Issues in Agriculture & Rural Development"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AEC 502: International Agricultural Trade & Commodity Markets",
                            "AEC 504: Agribusiness Management & Cooperatives",
                            "AXT 502: Climate Change Adaptation & Sustainable Agricultural Extension",
                            "AXT 504: Administration of Non-Governmental Organisations (NGOs) in Rural Development",
                            "AEC / AXT 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Agricultural Business & Financial Management": {
        degree: "B.Sc. Agricultural Business & Financial Management",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundational Economics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ABF 101: Introduction to Agribusiness & Farm Management",
                            "ECO 101: Principles of Economics I (Microeconomics)",
                            "ACC 101: Principles of Accounting I",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ABF 102: Agriculture & Rural Development in Nigeria",
                            "ECO 102: Principles of Economics II (Macroeconomics)",
                            "ACC 102: Principles of Accounting II",
                            "BIO 102: General Biology II",
                            "MTH 102: Elementary Mathematics II (Calculus & Analytical Geometry)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Agribusiness, Accounting & Quantitative Techniques)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ABF 201: Principles of Agricultural Finance & Credit",
                            "ABF 203: Agricultural Cooperatives & Group Business Enterprise",
                            "AGR 201: Principles of Crop Production",
                            "ACC 201: Intermediate Financial Accounting I",
                            "BUS 201: Principles of Management",
                            "STA 201: Statistics for Agricultural & Business Decisions I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ABF 202: Farm Management & Accounting",
                            "ABF 204: Agricultural Marketing & Commodity Trading",
                            "AGR 202: Principles of Animal Production",
                            "AGR 204: Principles of Forestry & Fisheries",
                            "ACC 202: Cost Accounting for Agribusiness",
                            "STA 202: Statistics for Agricultural & Business Decisions II",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Finance, Agricultural Risk, Econometrics & Legal Frameworks)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ABF 301: Capital Structure & Investment Analysis in Agribusiness",
                            "ABF 303: Agricultural Credit Institutions, Banking & Microfinance",
                            "ABF 305: Microeconomic Analysis for Agriculture",
                            "ABF 307: Agricultural Risk Management, Insurance & Hedging",
                            "FIN 301: Corporation Finance & Financial Systems",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ABF 302: Macroeconomic Analysis & Agricultural Policy",
                            "ABF 304: Agricultural Commodity Price Analysis & Futures Markets",
                            "ABF 306: Agribusiness Project Planning, Monitoring & Evaluation",
                            "ABF 308: Commercial & Agricultural Law",
                            "ABF 310: Econometrics for Agricultural Business",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agribusiness - PYA / Industrial Training)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Farm Accounting, Budgeting & Financial Auditing",
                            "PYA 402: Commercial Farm Enterprise Management & Business Plan Execution",
                            "PYA 403: Attachment to Agricultural Credit Institutions, Microfinance & Banks",
                            "PYA 404: Commodity Market Survey, Supply Chain & Value Chain Analysis",
                            "PYA 405: Agro-Processing Enterprise Operations & Cost Control Practice",
                            "PYA 406: Data Analytics & Financial Modeling in Agribusiness Software"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Corporate Finance, Investment Portfolio & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ABF 501: Advanced Agribusiness Financial Management & Corporate Strategy",
                            "ABF 503: Agricultural Portfolio Analysis & Capital Budgeting",
                            "ABF 505: International Agricultural Trade, Tariffs & Exchange Rate Risk",
                            "ABF 507: Supply Chain Management & Logistics in Agribusiness",
                            "ABF 509: Computer Applications & Financial Modeling in Agriculture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ABF 502: Agricultural Policy Analysis, Resource Economics & Land Tenure",
                            "ABF 504: Agribusiness Entrepreneurship, Start-up Valuation & Venture Capital",
                            "ABF 506: Financial Risk Analytics & Disaster Risk Financing in Agriculture",
                            "ABF 508: Strategic Management & Quality Assurance in Agribusiness",
                            "ABF 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Agricultural Media & Communication": {
        degree: "B.Sc. Agricultural Media & Communication",
        levels: [
            {
                level: "100 Level (Foundations in Media, Communication & Agricultural Science)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AMC 101: Introduction to Agricultural Media & Communication",
                            "MAC 101: Introduction to Mass Communication",
                            "AGR 101: Introduction to Agriculture I",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "MTH 101: Elementary Mathematics I",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AMC 102: History of Agricultural Communication & Extension in Nigeria",
                            "MAC 102: Writing for Mass Media",
                            "AGR 102: Introduction to Agriculture II",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Media Production Foundations & Communication Theories)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AMC 201: Theories of Mass Communication & Development",
                            "AMC 203: Agricultural Reporting & Feature Writing",
                            "AMC 205: Principles of Photography & Photojournalism in Agriculture",
                            "AGR 201: Principles of Crop Production",
                            "AGR 203: Principles of Animal Production",
                            "STA 201: Statistics for Social & Agricultural Sciences I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AMC 202: Broadcasting for Agriculture (Radio & TV Production)",
                            "AMC 204: Community Radio & Participatory Communication for Development",
                            "AMC 206: Digital Graphics, Layout & Print Publishing in Agriculture",
                            "AGR 202: Introduction to Soil Science",
                            "AGR 204: Principles of Forestry & Fisheries",
                            "STA 202: Statistics for Social & Agricultural Sciences II",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Digital Media, Campaign Design, Extension & Advocacy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AMC 301: Digital & Social Media Communication in Agribusiness",
                            "AMC 303: Agricultural Extension Communication & Innovation Diffusion",
                            "AMC 305: Radio & Television Programme Production for Rural Audiences",
                            "AMC 307: Media Ethics, Communication Law & Agricultural Regulations",
                            "AMC 309: Research Methods in Agricultural Communication",
                            "AEC 301: Farm Management & Agricultural Marketing"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AMC 302: Design and Production of Instructional Media & AV Aids",
                            "AMC 304: Agricultural Advocacy, Public Relations & Crisis Communication",
                            "AMC 306: Climate Change Communication & Risk Reporting",
                            "AMC 308: Video Editing, Animation & Multimedia Content Creation",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agricultural Media - PYAM / Studio & Field Attachment)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYAM 401: Practical Radio/TV Station Production & Field Broadcasting",
                            "PYAM 402: Production of Agricultural Print Materials (Magazines, Bulletins, Posters)",
                            "PYAM 403: Practical Video Production & Documentary Creation on Farm Projects",
                            "PYAM 404: Digital Content Creation, Social Media Management & Podcasting for Agribusinesses",
                            "PYAM 405: Attachment to Agricultural Extension Units, Media Houses, or Agro-Allied Agencies",
                            "PYAM 406: Community Communication Field Campaigns & Mobile Cinema Operations"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Media Strategy, Campaign Management & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AMC 501: Communication Campaign Planning, Execution & Evaluation",
                            "AMC 503: Strategic Corporate Communication & Marketing in Agribusiness",
                            "AMC 505: ICTs, Mobile Applications & E-Agriculture Communication",
                            "AMC 507: Gender, Youth & Development Communication in Agriculture",
                            "AMC 509: International Agricultural Media & Global Communication Trends"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AMC 502: Media Ownership, Management & Agribusiness Journalism",
                            "AMC 504: Knowledge Management & Agricultural Science Communication",
                            "AMC 506: Behaviour Change Communication (BCC) & Health/Nutrition Communication",
                            "AMC 508: Seminar in Agricultural Media & Communication",
                            "AMC 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Agronomy": {
        degree: "B.Agric. Agronomy",
        levels: [
            {
                level: "100 Level (Basic Sciences & Agricultural Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Agricultural Botany & Crop Physiology Basics",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Agronomical Foundations & Applied Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGN 201: Principles of Crop Production",
                            "SLS 201: Fundamentals of Soil Science",
                            "AGR 203: Agricultural Meteorology & Climatology",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGN 202: Anatomy & Taxonomy of Economic Crops",
                            "SLS 202: Soil Chemistry & Mineralogy",
                            "AGR 204: Principles of Animal Production",
                            "AGR 206: Principles of Forestry & Wildlife",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Agronomy, Weed Science & Soil Fertility)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGN 301: Arable Crop Production & Management (Cereals, Legumes & Tubers)",
                            "AGN 303: Weed Science and Control",
                            "AGN 305: Crop Physiology & Plant Water Relations",
                            "SLS 301: Soil Fertility, Chemistry & Plant Nutrition",
                            "SLS 303: Soil Physics & Conservation",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGN 302: Permanent & Plantation Crop Production (Cocoa, Oil Palm, Rubber, Coffee)",
                            "AGN 304: Plant Breeding & Seed Technology",
                            "AGN 306: Plant Pathology & Agricultural Entomology (Crop Protection)",
                            "SLS 302: Soil Survey, Land Evaluation & Classification",
                            "SLS 304: Soil Microbiology & Biochemistry",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Field Crop Production & Tillage Operations",
                            "PYA 402: Practical Soil Sampling, Testing & Fertilizer Application",
                            "PYA 403: Weed Identification, Herbicide Calibration & Pest Control",
                            "PYA 404: Horticultural Crop Production & Nursery Management",
                            "PYA 405: Post-Harvest Operations, Crop Processing & Storage Technology",
                            "PYA 406: Farm Machinery Maintenance, Irrigation & Drainage Practice"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Agronomy, Biotechnology & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGN 501: Advanced Field Crop Production & Farming Systems",
                            "AGN 503: Forage, Pasture & Turfgrass Management",
                            "AGN 505: Post-Harvest Physiology, Storage & Crop Processing",
                            "AGN 507: Plant Biotechnology & Genetic Engineering in Agriculture",
                            "SLS 501: Advanced Soil Chemistry, Fertility Management & Fertilizer Technology",
                            "SLS 503: Soil & Environmental Pollution Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGN 502: Organic Farming, Sustainable Agriculture & Climate Smart Crop Production",
                            "AGN 504: Horticultural Science & Greenhouse Management",
                            "AGN 506: Irrigation Agronomy & Water Management",
                            "SLS 502: Soil Degradation, Conservation & Desertification Control",
                            "AGN / SLS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Animal Production & Health": {
        degree: "B.Agric. Animal Production & Health",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Introduction to Animal Biology & Zoology",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Anatomy, Physiology & Animal Science Basics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "APH 201: Anatomy and Physiology of Farm Animals I",
                            "APH 203: Principles of Animal Production",
                            "AGR 201: Principles of Crop Production",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "APH 202: Anatomy and Physiology of Farm Animals II",
                            "APH 204: Animal Biochemistry and Metabolism",
                            "SLS 201: Introduction to Soil Science",
                            "AGR 202: Principles of Forestry & Fisheries",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Nutrition, Genetics, Health & Husbandry)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "APH 301: Animal Nutrition and Feeds Chemistry",
                            "APH 303: Ruminant Animal Production (Cattle, Sheep, and Goats)",
                            "APH 305: Animal Genetics, Breeding, and Improvement",
                            "APH 307: Animal Health, Parasitology, and Hygiene",
                            "AGR 301: Experimental Design & Agricultural Research Methods",
                            "AEC 301: Farm Management and Production Economics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "APH 302: Non-Ruminant Animal Production (Poultry, Swine, and Micro-Livestock)",
                            "APH 304: Feedstuff Evaluation and Feed Mill Technology",
                            "APH 306: Animal Disease Prevention, Pharmacology, and Immunity",
                            "APH 308: Forage, Pasture, and Range Management",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Poultry Production & Hatchery Management",
                            "PYA 402: Practical Swine and Micro-Livestock Management (Rabbits, Snails, Bees)",
                            "PYA 403: Practical Ruminant Livestock Management & Milking Operations",
                            "PYA 404: Feed Mill Operations, Formulation & Compounding Practice",
                            "PYA 405: Animal Health Routines, Vaccination & Hygiene Practices",
                            "PYA 406: Processing of Animal Products, Abattoir Operations & Meat Hygiene"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Animal Health, Biotechnology & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "APH 501: Advanced Animal Breeding & Reproductive Biotechnology (AI & Embryo Transfer)",
                            "APH 503: Advanced Animal Nutrition & Feed Technology",
                            "APH 505: Herd/Flock Health Management & Veterinary Epidemiology",
                            "APH 507: Dairy Science, Milk Processing & Technology",
                            "APH 509: Applied Animal Behaviour, Ethics, and Welfare"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "APH 502: Meat Science, Abattoir Management & Product Processing",
                            "APH 504: Livestock Industry, Agribusiness & Economics",
                            "APH 506: Environmental Physiology & Livestock Housing Architecture",
                            "APH 508: Micro-Livestock and Alternative Animal Production Systems",
                            "APH 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Animal Science": {
        degree: "B.Agric. Animal Science",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Introduction to Animal Biology & Zoology",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Anatomy, Physiology & Biological Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANS 201: Anatomy and Physiology of Farm Animals I",
                            "ANS 203: Principles of Animal Production",
                            "AGR 201: Principles of Crop Production",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANS 202: Anatomy and Physiology of Farm Animals II",
                            "ANS 204: Animal Biochemistry and Metabolism",
                            "SLS 201: Introduction to Soil Science",
                            "AGR 202: Principles of Forestry & Fisheries",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Nutrition, Breeding, Husbandry & Feed Tech)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANS 301: Animal Nutrition and Feeds Chemistry",
                            "ANS 303: Ruminant Animal Production (Cattle, Sheep, and Goats)",
                            "ANS 305: Animal Genetics, Breeding, and Quantitative Genetics",
                            "ANS 307: Animal Health, Sanitation, and Hygiene",
                            "AGR 301: Experimental Design & Agricultural Research Methods",
                            "AEC 301: Farm Management and Production Economics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANS 302: Non-Ruminant Animal Production (Poultry, Swine, and Rabbits)",
                            "ANS 304: Feedstuff Evaluation, Analysis, and Feed Mill Operations",
                            "ANS 306: Reproductive Physiology & Artificial Insemination",
                            "ANS 308: Forage, Pasture, and Range Management",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Poultry Production & Hatchery Management",
                            "PYA 402: Practical Swine, Rabbit & Micro-Livestock Husbandry",
                            "PYA 403: Practical Beef, Dairy & Small Ruminant Management",
                            "PYA 404: Feed Mill Operations, Ration Compounding & Quality Control",
                            "PYA 405: Animal Health Routines, Sanitation & Vaccination",
                            "PYA 406: Abattoir Management, Meat Processing & Product Development"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Animal Science, Biotechnology & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANS 501: Advanced Applied Animal Breeding & Quantitative Genetics",
                            "ANS 503: Advanced Ruminant & Non-Ruminant Nutrition",
                            "ANS 505: Reproductive Biotechnology (Artificial Insemination & Embryo Transfer)",
                            "ANS 507: Dairy Science, Technology & Milk Processing",
                            "ANS 509: Environmental Physiology & Livestock Housing Architecture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANS 502: Meat Science, Processing Technology & Muscle Biology",
                            "ANS 504: Feed Mill Management & Commercial Feed Industry",
                            "ANS 506: Micro-Livestock Science (Snails, Honeybees, Grasscutters)",
                            "ANS 508: Agribusiness Management & Animal Industry Ethics (NIAS Standards)",
                            "ANS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Crop Protection": {
        degree: "B.Agric. Crop Protection",
        levels: [
            {
                level: "100 Level (Basic Sciences & Agricultural Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Agricultural Botany & Crop Physiology Basics",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Biological Foundations & Crop Production)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CPP 201: Fundamentals of Plant Pathology & Entomology",
                            "AGR 201: Principles of Crop Production",
                            "SLS 201: Fundamentals of Soil Science",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CPP 202: Anatomy and Physiology of Crop Pests",
                            "AGR 202: Principles of Animal Production",
                            "AGR 204: Principles of Forestry & Fisheries",
                            "AGR 206: Agricultural Meteorology & Climatology",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Crop Protection, Pathology, Entomology & Weeds)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CPP 301: Agricultural Entomology (Insect Pests & Vector Biology)",
                            "CPP 303: General Plant Pathology (Fungal, Bacterial & Viral Diseases)",
                            "CPP 305: Plant Nematology (Plant Parasitic Nematodes)",
                            "AGN 303: Weed Science and Control",
                            "SLS 301: Soil Fertility & Plant Nutrition",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CPP 302: Pesticides, Formulation & Application Technology",
                            "CPP 304: Principles of Integrated Pest Management (IPM)",
                            "CPP 306: Plant Quarantine & Phytosanitary Regulations",
                            "CPP 308: Rodent, Bird & Vertebrate Pests Management",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Field Crop Disease Diagnosis & Management",
                            "PYA 402: Insect Pest Identification, Trapping & Scouting Techniques",
                            "PYA 403: Spraying Equipment Calibration, Maintenance & Chemical Handling",
                            "PYA 404: Weed Collection, Identification & Herbicide Field Trial",
                            "PYA 405: Post-Harvest Grain & Produce Inspection & Fumigation",
                            "PYA 406: Biological Control Agent Rearing & Field Application"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Crop Protection, Biotechnology & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CPP 501: Advanced Plant Pathology (Molecular Plant Pathology & Disease Epidemiology)",
                            "CPP 503: Advanced Economic Entomology & Pest Resistance Management",
                            "CPP 505: Post-Harvest Pathology & Stored Product Entomology",
                            "CPP 507: Plant Disease Resistance & Breeding for Protection",
                            "CPP 509: Toxicology of Crop Protection Chemicals & Environmental Safety"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CPP 502: Biological Control of Pests and Diseases",
                            "CPP 504: Biotechnology in Crop Protection (GM Crops & RNA Interference)",
                            "CPP 506: Plantation & Tree Crop Protection Management",
                            "CPP 508: Urban, Greenhouse & Horticultural Pest Management",
                            "CPP 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Crop Science & Horticulture": {
        degree: "B.Agric. Crop Science & Horticulture",
        levels: [
            {
                level: "100 Level (Basic Sciences & Agricultural Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Agricultural Botany & Crop Physiology Basics",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Plant Biology & Production Principles)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSH 201: Principles of Crop Production",
                            "CSH 203: Fundamentals of Horticulture",
                            "SLS 201: Fundamentals of Soil Science",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSH 202: Plant Anatomy, Taxonomy & Economic Botany",
                            "SLS 202: Soil Chemistry & Plant Nutrition",
                            "AGR 202: Principles of Animal Production",
                            "AGR 204: Principles of Forestry & Fisheries",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Crop Production, Pomology, Olericulture & Breeding)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSH 301: Olericulture (Vegetable Production & Management)",
                            "CSH 303: Arable Field Crops (Cereals, Grain Legumes & Root/Tuber Crops)",
                            "CSH 305: Crop Physiology & Plant Water Relations",
                            "CSH 307: Weed Science and Weed Management",
                            "SLS 301: Soil Fertility, Fertilizer Technology & Plant Nutrition",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSH 302: Pomology (Fruit Crop Production & Orchard Management)",
                            "CSH 304: Plantation & Plantation-Tree Crops (Cocoa, Oil Palm, Rubber, Coffee, Cashew)",
                            "CSH 306: Plant Breeding, Genetics & Seed Technology",
                            "CPP 306: Crop Protection (Plant Pathology & Agricultural Entomology)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Field Preparation, Crop Establishment & Tillage Practice",
                            "PYA 402: Horticultural Nursery Operations & Plant Propagation (Grafting, Budding, Layering)",
                            "PYA 403: Vegetable Farming, Organic Farming & Hydroponic Systems",
                            "PYA 404: Orchard Establishment, Canopy Management & Fruit Harvesting",
                            "PYA 405: Field Pest, Disease & Weed Control Application",
                            "PYA 406: Post-Harvest Operations, Produce Grading, Packaging & Cold Storage Practice"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Crop Science, Landscaping, Biotechnology & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSH 501: Floriculture, Ornamental Horticulture & Landscape Architecture",
                            "CSH 503: Advanced Plant Breeding, Tissue Culture & Plant Biotechnology",
                            "CSH 505: Post-Harvest Physiology, Produce Preservation & Storage Technology",
                            "CSH 507: Advanced Field Crop Production & Cropping Systems",
                            "CSH 509: Controlled Environment Agriculture (Greenhouse & Nursery Management)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSH 502: Organic Farming, Sustainable Agriculture & Urban Horticulture",
                            "CSH 504: Plantation Crop Processing, Industrial Products & Marketing",
                            "CSH 506: Seed Production Technology & Seed Certification",
                            "CSH 508: Irrigation Agronomy & Water Management for Horticultural Crops",
                            "CSH 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Ecotourism & Wildlife Management": {
        degree: "B.Sc. Ecotourism & Wildlife Management",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "EWM 101: Introduction to Ecotourism and Wildlife Management",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "EWM 102: Principles of Tourism and Hospitality Operations",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Biological Foundations, Ecology & Tourism Basics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "EWM 201: Fundamentals of Wildlife Ecology & Management",
                            "EWM 203: Principles of Ecotourism Development",
                            "FOR 201: Principles of Forestry & Plant Taxonomy",
                            "SLS 201: Fundamentals of Soil Science",
                            "CHM 201: Organic Chemistry for Biological Sciences",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "EWM 202: Wildlife Anatomy, Physiology & Taxonomy",
                            "EWM 204: Culture, Heritage & Resource Interpretation in Tourism",
                            "AGR 202: Principles of Crop Production",
                            "AGR 204: Principles of Animal Production",
                            "STA 201: Statistics for Biological & Social Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Wildlife Management, Park Administration & Ecotourism)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "EWM 301: Wildlife Population Dynamics & Census Techniques",
                            "EWM 303: Protected Area Management (National Parks, Game Reserves & Sanctuaries)",
                            "EWM 305: Ecotourism Facility Design, Planning & Hospitality Operations",
                            "EWM 307: Wildlife Domestication, Captive Breeding & Farming (Snailery, Game Ranches)",
                            "AGR 301: Experimental Design & Research Methods",
                            "EWM 309: Environmental Impact Assessment (EIA) in Ecotourism"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "EWM 302: Wildlife Health, Diseases, Parasitology & Veterinary Care",
                            "EWM 304: Travel, Tour Operations & Destination Marketing",
                            "EWM 306: Natural History, Ornithology & Herpetology",
                            "EWM 308: Agroforestry, Biodiversity & Climate Change Adaptation",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Ecotourism & Wildlife - PYEW / Practical Field Year)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYEW 401: Practical Wildlife Tracking, Census & Field Techniques",
                            "PYEW 402: National Park Operations, Ranger Routines & Anti-Poaching Enforcement",
                            "PYEW 403: Ecotourism Resort Management, Guest Relations & Tour Guiding Practice",
                            "PYEW 404: Zoo & Captive Wildlife Management, Handling & Animal Welfare",
                            "PYEW 405: GIS, Remote Sensing & Habitat Mapping in Protected Areas",
                            "PYEW 406: Non-Timber Forest Products (NTFPs), Apiculture & Community Ecotourism Projects"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Wildlife Strategy, Policy & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "EWM 501: Advanced Wildlife Management, Conservation Biology & Genetics",
                            "EWM 503: Ecotourism Policy, Legislation, International Conventions & Ethics",
                            "EWM 505: Wildlife Nutrition, Forage & Habitat Evaluation",
                            "EWM 507: GIS and Remote Sensing in Wildlife and Tourism Management",
                            "EWM 509: Applied Animal Behaviour, Ethology & Human-Wildlife Conflict Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "EWM 502: Ecotourism Economics, Valuation & Agribusiness",
                            "EWM 504: Urban Forestry, Environmental Landscaping & Recreation Planning",
                            "EWM 506: Wildlife Policy, Anti-Poaching Regulations & Law Enforcement",
                            "EWM 508: Disaster, Safety & Survival Techniques in Wilderness Tourism",
                            "EWM 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Fisheries and Aquaculture": {
        degree: "B.Agric. Fisheries and Aquaculture",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIS / FAQ 102: Introduction to Fisheries & Aquaculture Sciences",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Aquatic Biology & Production Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIS 201: Ichthyology (Fish Biology, Systematics & Anatomy)",
                            "FIS 203: Principles of Aquaculture",
                            "AGR 201: Principles of Crop Production",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIS 202: Limnology & Aquatic Ecology (Freshwater Systems)",
                            "FIS 204: Fish Physiology & Behavior",
                            "SLS 201: Introduction to Soil Science",
                            "AGR 202: Principles of Animal Production",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Aquaculture, Nutrition, Breeding & Engineering)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIS 301: Fish Nutrition, Feed Formulation & Feed Mill Technology",
                            "FIS 303: Fish Hatchery Management & Induced Breeding (Hypophysation)",
                            "FIS 305: Aquaculture Engineering, Pond Construction & Water Management",
                            "FIS 307: Fish Diseases, Pathology & Parasitology",
                            "AGR 301: Experimental Design & Agricultural Research Methods",
                            "AEC 301: Farm Management and Production Economics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIS 302: Oceanography & Marine Biology",
                            "FIS 304: Fish Gear & Craft Technology (Capture Fisheries)",
                            "FIS 306: Water Quality Management & Aquatic Environmental Pollution",
                            "FIS 308: Shellfish Culture & Non-Fish Aquaculture (Shrimps, Crabs, Snails)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Fish Hatchery Management & Induced Spawning Routine",
                            "PYA 402: Practical Fish Pond Construction, Maintenance & Water Testing",
                            "PYA 403: Fish Feed Compounding, Pelleting & Quality Control",
                            "PYA 404: Practical Fish Disease Diagnosis, Prevention & Treatment",
                            "PYA 405: Fish Harvesting, Gear Operation & Boat Handling",
                            "PYA 406: Post-Harvest Fish Processing (Smoking, Drying, Freezing, Canning) & Marketing"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Aquaculture, Policy & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FIS 501: Advanced Fish Breeding, Genetics & Biotechnology in Aquaculture",
                            "FIS 503: Advanced Fish Nutrition, Energetics & Feed Technology",
                            "FIS 505: Recirculating Aquaculture Systems (RAS) & Intensive Fish Farming",
                            "FIS 507: Fish Population Dynamics & Stock Assessment",
                            "FIS 509: Aquatic Environmental Impact Assessment (EIA) & Ecotoxicology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FIS 502: Post-Harvest Technology, Quality Control & Fish Value Addition",
                            "FIS 504: Fisheries Policy, Legislation, Cooperatives & Extension",
                            "FIS 506: Agribusiness Management in Fisheries & Marketing Economics",
                            "FIS 508: Ornamental Fisheries, Aquascaping & Aquarium Management",
                            "FIS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Food Science and Technology": {
        degree: "B.Sc. Food Science and Technology",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FST 101: Introduction to Food Science and Technology",
                            "CHM 101: General Chemistry I",
                            "BIO 101: General Biology I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FST 102: Food System Overview & Post-Harvest Agriculture",
                            "CHM 102: General Chemistry II",
                            "BIO 102: General Biology II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Biological, Chemical & Engineering Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FST 201: Fundamentals of Food Chemistry",
                            "FST 203: Fundamentals of Food Microbiology",
                            "CHM 201: Organic Chemistry I",
                            "CHM 203: Physical & Analytical Chemistry for Food Scientists",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FST 202: Introduction to Food Process Engineering",
                            "FST 204: Food Analysis & Instrumentation",
                            "FST 206: Human Nutrition & Dietetics Basics",
                            "CHM 202: Organic Chemistry II",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "FST 208: Computer Applications in Food Science"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Commodity Technologies, Processing & Quality Control)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FST 301: Chemistry of Food Commodities (Proteins, Lipids, Carbohydrates, Water)",
                            "FST 303: Food Process Engineering I (Unit Operations, Heat & Mass Transfer)",
                            "FST 305: Food Industrial Microbiology & Fermentation Technology",
                            "FST 307: Cereals, Legumes & Tuber Processing Technology",
                            "FST 309: Food Analysis, Quality Control & Sensory Evaluation",
                            "FST 311: Research Methodology in Food Science"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FST 302: Fruits, Vegetables & Horticultural Crops Processing Technology",
                            "FST 304: Meat, Poultry & Fish Processing Technology",
                            "FST 306: Dairy Science and Milk Processing Technology",
                            "FST 308: Food Process Engineering II (Fluid Flow, Rheology & Thermal Processing)",
                            "FST 310: Food Safety, Hygiene, HACCP & NAFDAC Standards",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Industrial Training / SIWES & Factory Experience)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "FST 401: Industrial Training Attachment I (Food Processing Operations)",
                            "FST 402: Industrial Training Attachment II (Quality Control & Assurance)",
                            "FST 403: SIWES Seminar Presentation & Technical Report Writing"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Processing, Packaging, Innovation & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FST 501: Advanced Food Biotechnology & Enzyme Technology",
                            "FST 503: Food Packaging Technology & Shelf-Life Determination",
                            "FST 505: Fats and Oils Processing Technology",
                            "FST 507: Beverages & Confectionery Processing Technology (Brewing & Cocoa)",
                            "FST 509: Food Machinery Design, Plant Layout & Utility Systems"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FST 502: New Product Development, Sensory Science & Marketing",
                            "FST 504: Food Law, Standards, Regulations & Codex Alimentarius",
                            "FST 506: Food Toxicology, Additives & Contaminants Management",
                            "FST 508: Agribusiness Management, Food Economics & Factory Administration",
                            "FST 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Forestry and Wildlife Management": {
        degree: "B.Agric. Forestry and Wildlife Management",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FOR / WLM 102: Introduction to Forestry & Wildlife Management",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Forest Ecology & Plant Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FOR 201: Principles of Forestry & Forest Taxonomy",
                            "WLM 201: Fundamentals of Wildlife Ecology & Management",
                            "SLS 201: Fundamentals of Soil Science",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic & Physical Chemistry for Agriculture",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FOR 202: Forest Ecology & Environmental Conservation",
                            "WLM 202: Principles of Wildlife Domestication & Husbandry",
                            "AGR 202: Principles of Crop Production",
                            "AGR 204: Principles of Animal Production",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Silviculture, Mensuration, Wildlife & Conservation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FOR 301: Principles of Silviculture & Nursery Practice",
                            "FOR 303: Forest Mensuration & Inventory (Tree Measurement)",
                            "FOR 305: Wood Anatomy & Wood Properties",
                            "WLM 301: Wildlife Population Dynamics & Census Techniques",
                            "WLM 303: Protected Area Management (National Parks & Game Reserves)",
                            "AGR 301: Experimental Design & Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FOR 302: Agroforestry Systems & Social Forestry",
                            "FOR 304: Forest Engineering, Harvesting & Ergonomics",
                            "WLM 302: Wildlife Diseases, Parasitology & Veterinary Health",
                            "WLM 304: Ecotourism, Biodiversity & Parks Administration",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Forestry - PYF / Field Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYF 401: Forest Nursery Operations, Seed Collection & Seedling Propagation",
                            "PYF 402: Forest Plantation Establishment, Thinning & Pruning Practice",
                            "PYF 403: Forest Surveying, Remote Sensing & Geographic Information Systems (GIS)",
                            "PYF 404: Sawmilling Practice, Wood Preservation, Drying & Harvesting Tech",
                            "PYF 405: Wildlife Tracking, Census Techniques & Park Operations",
                            "PYF 406: Non-Timber Forest Products (NTFPs) Processing & Beekeeping (Apiculture)"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Management, Policy & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FOR 501: Forest Management, Policy & Legislation",
                            "FOR 503: Wood Processing Technology, Composite Wood & Biomass Energy",
                            "FOR 505: GIS and Remote Sensing in Forestry & Natural Resources",
                            "WLM 501: Advanced Wildlife Nutrition, Health & Captive Breeding",
                            "WLM 503: Biodiversity Conservation, Environmental Impact Assessment (EIA) & Climate Change"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FOR 502: Forest Economics, Valuation & Resource Marketing",
                            "FOR 504: Forest Protection (Pathology, Entomology & Forest Fire Management)",
                            "WLM 502: Wildlife Policy, Law Enforcement & Anti-Poaching Regulations",
                            "WLM 504: Urban Forestry, Environmental Landscaping & Watershed Management",
                            "FOR / WLM 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Home Economics / Home Science & Management": {
        degree: "B.Sc. Home Economics / Home Science & Management",
        levels: [
            {
                level: "100 Level (Basic Sciences, Humanities & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSM 101: Introduction to Home Economics / Home Science",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I / Applied Physics",
                            "SOC 101: Introduction to Sociology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSM 102: Fundamentals of Foods and Nutrition",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PSY 101: Introduction to Psychology",
                            "GST 112: Nigerian Peoples and Culture",
                            "AMS 102: Basic Mathematics for Life Sciences"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Family Science, Nutrition & Textiles)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSM 201: Human Growth and Child Development",
                            "HSM 203: Principles of Food Preparation & Culinary Arts",
                            "HSM 205: Textiles, Fibers and Fabric Construction",
                            "HSM 207: Principles of Family Resource Management",
                            "CHM 201: Organic Chemistry for Life Sciences",
                            "STA 201: Statistics for Social & Applied Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSM 202: Clothing Design, Construction and Pattern Drafting",
                            "HSM 204: Human Nutrition and Meal Planning",
                            "HSM 206: House Planning, Interior Decoration and Furnishing",
                            "HSM 208: Consumer Economics and Family Finance",
                            "GST 212: Philosophy, Logic, and Human Existence",
                            "HSM 210: Marriage and Family Relationships"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Resource Management, Institutional Operations & Extension)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSM 301: Community Nutrition and Public Health",
                            "HSM 303: Institutional Food Service Management & Catering",
                            "HSM 305: Advanced Clothing Construction and Fashion Design",
                            "HSM 307: Household Equipment, Energy and Ergonomics",
                            "HSM 309: Extension Communication and Rural Development",
                            "HSM 311: Research Methodology in Home Science"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSM 302: Experimental Foods and Quality Control",
                            "HSM 304: Textile Care, Dyeing, Printing and Finishes",
                            "HSM 306: Care of the Aged, Vulnerable Groups and Special Needs",
                            "HSM 308: Family Housing, Environmental Management and Sanitation",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (SIWES / Practical Attachment & Industrial Training)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "HSM 401: Industrial Training Attachment I (Institutional Catering & Food Industry)",
                            "HSM 402: Industrial Training Attachment II (Textile, Garment & Interior Design Industry)",
                            "HSM 403: SIWES Seminar Presentation & Technical Report Writing"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Family Science, Enterprise Management & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSM 501: Advanced Human Nutrition, Dietetics and Food Therapy",
                            "HSM 503: Advanced Family Resource Management and Financial Security",
                            "HSM 505: Fashion Industry, Entrepreneurship and Garment Production Management",
                            "HSM 507: Child Guidance, Early Childhood Education and Family Welfare",
                            "HSM 509: Consumer Protection, Rights and Product Testing"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSM 502: Sustainable Community Livelihoods and Gender Studies",
                            "HSM 504: Cottage Industry Management, Agribusiness and Entrepreneurship",
                            "HSM 506: Interior Design, Spatial Planning and Property Management",
                            "HSM 508: Seminar in Home Science and Management",
                            "HSM 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Human Nutrition & Dietetics": {
        degree: "B.Sc. Human Nutrition & Dietetics",
        levels: [
            {
                level: "100 Level (Basic Medical & Natural Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HND 101: Introduction to Human Nutrition and Dietetics",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HND 102: History & Trends in Nutrition and Dietetic Practice",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Human Anatomy, Physiology & Nutrition Chemistry)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HND 201: Fundamentals of Human Nutrition",
                            "ANA 201: Human Anatomy I (Gross Anatomy & Histology)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "CHM 201: Organic Chemistry for Life Sciences",
                            "STA 201: Statistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HND 202: Food Chemistry and Analysis",
                            "ANA 202: Human Anatomy II (Organs & Metabolism Systems)",
                            "PIO 202: Human Physiology II (Endocrine & Digestive Systems)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "MCB 201: General Microbiology",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Clinical Nutrition, Diet Therapy & Community Health)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HND 301: Nutritional Biochemistry & Metabolism (Macronutrients & Micronutrients)",
                            "HND 303: Human Nutrition Through the Life Cycle (Maternal, Infant, Child & Elderly)",
                            "HND 305: Nutritional Assessment Techniques (Anthropometry, Biochemical & Clinical)",
                            "HND 307: Principles of Dietetics & Clinical Nutrition I",
                            "HND 309: Food Microbiology, Safety & Toxicology",
                            "HND 311: Research Methodology in Nutrition & Dietetics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HND 302: Medical Nutrition Therapy I (Gastrointestinal, Liver & Kidney Disorders)",
                            "HND 304: Public Health & Community Nutrition",
                            "HND 306: Institutional Food Service Management & Catering",
                            "HND 308: Recipe Development, Culinary Arts & Meal Planning",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Hospital Clinical Internship & SIWES)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "HND 401: Hospital Clinical Internship I (Internal Medicine, Cardiology & Endocrinology)",
                            "HND 402: Hospital Clinical Internship II (Pediatrics, Surgery, Oncology & Renal Units)",
                            "HND 403: Community Nutrition Field Experience & Public Health Outreach",
                            "HND 404: Industrial Food Service & Quality Control Internship",
                            "HND 405: Seminar Presentation & Technical Internship Report"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Dietetics, Policy, Genomics & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HND 501: Advanced Medical Nutrition Therapy II (Critical Care, ICU, Oncology & Burns)",
                            "HND 503: Nutrition Policy, Programmes & Emergency Nutrition",
                            "HND 505: Nutrigenomics, Metabolic Disorders & Inborn Errors of Metabolism",
                            "HND 507: Sports Nutrition, Fitness & Exercise Physiology",
                            "HND 509: Pharmacology, Food-Drug Interactions & Phytomedicine"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HND 502: Applied Nutrition Education, Behavioural Change & Counseling",
                            "HND 504: Agribusiness, Food Systems & Nutritional Enterprise",
                            "HND 506: Global Nutrition, Health Systems & Epidemiology",
                            "HND 508: Dietetics Professional Practice, Ethics & Hospital Administration",
                            "HND 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Pasture & Range Management": {
        degree: "B.Sc. Pasture & Range Management",
        levels: [
            {
                level: "100 Level (Basic Sciences & Agricultural Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Agricultural Botany & Systematic Zoology",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Plant & Animal Production Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PRM 201: Fundamentals of Pasture and Range Science",
                            "AGR 201: Principles of Crop Production",
                            "SLS 201: Fundamentals of Soil Science",
                            "BIO 201: General Genetics",
                            "CHM 201: Organic Chemistry for Biological Sciences",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PRM 202: Grassland Ecology & Botany of Forage Plants",
                            "AGR 202: Anatomy and Physiology of Farm Animals",
                            "AGR 204: Principles of Forestry & Wildlife",
                            "AGR 206: Agricultural Meteorology & Climatology",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Forage Agronomy, Range Ecology & Animal Nutrition)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PRM 301: Forage Agronomy & Pasture Establishment (Grasses and Legumes)",
                            "PRM 303: Rangeland Ecology, Vegetation Survey & Inventory",
                            "PRM 305: Forage Quality, Evaluation & Feed Chemistry",
                            "SLS 301: Soil Fertility, Chemistry & Plant Nutrition",
                            "ANS 301: Ruminant Animal Nutrition (Cattle, Sheep & Goats)",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PRM 302: Forage Preservation & Conservation (Hay, Silage & Fodder Banks)",
                            "PRM 304: Grazing Systems, Stocking Rate & Pasture Management",
                            "PRM 306: Plant-Animal Interactions & Forage Utilization",
                            "AGN 303: Weed Science & Weed Control in Pastures",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Range Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Pasture Plot Establishment, Planting & Land Preparation",
                            "PYA 402: Commercial Hay, Silage & Fodder Block Production",
                            "PYA 403: Rangeland Vegetation Sampling, Carrying Capacity & Stocking Calibration",
                            "PYA 404: Pasture Seed Collection, Processing, Testing & Storage Technology",
                            "PYA 405: Weed, Brush & Invasive Species Control in Grazing Reserves",
                            "PYA 406: Fencing, Paddock Construction, Water Point Development & Herd Handling"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Range Management, Climate Adaptation & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PRM 501: Advanced Range Management, Grazing Reserve Development & Pastoralism",
                            "PRM 503: Forage Breeding, Genetics & Seed Technology",
                            "PRM 505: Remote Sensing & GIS Applications in Rangeland Inventory",
                            "PRM 507: Turfgrass, Golf Course & Amenity Grassland Management",
                            "PRM 509: Environmental Physiology of Grazing Animals & Heat Stress Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PRM 502: Desertification, Rangeland Rehabilitation & Climate Change Adaptation",
                            "PRM 504: Agribusiness, Forage Marketing & Commercial Fodder Production",
                            "PRM 506: Conflict Resolution, Land Tenure & Transhumance Management in West Africa",
                            "PRM 508: Wildlife-Livestock Interactions & Savanna Ecosystem Management",
                            "PRM 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Soil Science": {
        degree: "B.Agric. Soil Science",
        levels: [
            {
                level: "100 Level (Basic Sciences & Agricultural Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AGR 101: Introduction to Agriculture",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AGR 102: Introduction to Geology & Earth Sciences",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Soil Science Foundations & Applied Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "SLS 201: Fundamentals of Soil Science",
                            "AGR 201: Principles of Crop Production",
                            "CHM 201: Organic Chemistry for Agriculture",
                            "CHM 203: Physical & Analytical Chemistry for Soil Science",
                            "BIO 201: General Genetics",
                            "ECO 101: Principles of Economics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "SLS 202: Soil Genesis, Mineralogy & Classification Basics",
                            "AGR 202: Principles of Animal Production",
                            "AGR 204: Principles of Forestry & Fisheries",
                            "AGR 206: Agricultural Meteorology & Climatology",
                            "STA 201: Statistics for Agricultural & Biological Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Soil Chemistry, Physics, Biology & Survey)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "SLS 301: Soil Chemistry & Plant Nutrition",
                            "SLS 303: Soil Physics & Soil-Water Relations",
                            "SLS 305: Soil Microbiology & Biochemistry",
                            "SLS 307: Soil Survey, Remote Sensing & Geographic Information Systems (GIS)",
                            "AGN 301: Arable Crop Production",
                            "AGR 301: Experimental Design & Agricultural Research Methods"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "SLS 302: Soil Fertility, Fertilizer Technology & Management",
                            "SLS 304: Soil Erosion, Conservation & Degradation Management",
                            "SLS 306: Soil-Plant-Water Relationships & Irrigation Principles",
                            "SLS 308: Land Evaluation, Capability Classification & Land Use Planning",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture - PYA / Farm Practical)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYA 401: Practical Soil Profile Description, Pit Digging & Horizon Sampling",
                            "PYA 402: Laboratory Soil Chemical, Physical & Microbiological Analysis",
                            "PYA 403: Fertilizer Recommendation, Blending & Field Application Practice",
                            "PYA 404: Soil Erosion Control Structures, Tillage Practices & Conservation Work",
                            "PYA 405: Field Soil Mapping, GIS Data Collection & Land Evaluation Exercises",
                            "PYA 406: Irrigation System Installation, Soil Moisture Monitoring & Drainage Practice"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Soil Science, Environmental Remediation & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "SLS 501: Advanced Soil Chemistry & Mineralogy",
                            "SLS 503: Advanced Soil Fertility Management & Plant Nutrition",
                            "SLS 505: Advanced Soil Physics & Hydrology",
                            "SLS 507: Soil and Environmental Pollution, Contamination & Remediation",
                            "SLS 509: GIS and Remote Sensing in Soil Science & Land Resource Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "SLS 502: Advanced Soil Microbiology & Biotechnology",
                            "SLS 504: Soil Degradation, Desertification Control & Climate Change",
                            "SLS 506: Urban Soil Science, Land Use Policy & Environmental Impact Assessment (EIA)",
                            "SLS 508: Fertilizer Technology, Manufacturing & Quality Control",
                            "SLS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Water Resources Management & Agrometeorology": {
        degree: "B.Sc. Water Resources Management & Agrometeorology",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "WAM 101: Introduction to Water Resources and Agrometeorology",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "WAM 102: Fundamentals of Earth System Science & Climatology",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Meteorology, Hydrology & Soil Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "WAM 201: Fundamentals of Atmospheric Science & Meteorology",
                            "WAM 203: Principles of Hydrology & Water Resources",
                            "SLS 201: Fundamentals of Soil Science",
                            "AGR 201: Principles of Crop Production",
                            "CHM 201: Physical Chemistry for Environmental Sciences",
                            "MTH 201: Mathematical Methods for Physical Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "WAM 202: Agrometeorological Instrumentation & Observation Techniques",
                            "WAM 204: Fluid Mechanics & Environmental Hydraulics",
                            "SLS 202: Soil Chemistry & Physics",
                            "AGR 202: Principles of Animal Production",
                            "STA 201: Statistics for Agricultural & Environmental Sciences",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Agrometeorology, Irrigation, Climatology & GIS)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "WAM 301: Microclimatology & Crop-Weather Relations",
                            "WAM 303: Surface Water Hydrology & River Basin Management",
                            "WAM 305: Soil-Plant-Atmosphere Continuum (SPAC) & Evapotranspiration",
                            "WAM 307: Remote Sensing & Geographic Information Systems (GIS) in Water Resources",
                            "AGR 301: Experimental Design & Research Methods",
                            "SLS 301: Soil-Water Management & Conservation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "WAM 302: Agricultural Meteorology & Crop Yield Forecasting",
                            "WAM 304: Irrigation & Drainage Engineering Principles",
                            "WAM 306: Groundwater Hydrology & Hydrogeology",
                            "WAM 308: Hydro-Meteorological Data Analysis & Statistical Climatology",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Practical Year Agriculture / Field Practical - PYAE)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "PYAE 401: Meteorological Station Installation, Calibration & Daily Data Logging",
                            "PYAE 402: River Gauging, Streamflow Measurement & Water Sampling Techniques",
                            "PYAE 403: Practical Irrigation System Layout, Operation & Sprinkler/Drip Testing",
                            "PYAE 404: GIS Data Collection, Watershed Mapping & Drone Surveying",
                            "PYAE 405: Water Quality Testing & Environmental Impact Field Inspections",
                            "PYAE 406: Flood Forecasting, Drought Monitoring & Weather Index Insurance Field Operations"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Hydrology, Climate Change, Policy & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "WAM 501: Climate Change, Variability & Agricultural Adaptation Strategies",
                            "WAM 503: Advanced Irrigation Agronomy & Water Management Systems",
                            "WAM 505: Hydro-Meteorological Hazard Management (Floods, Droughts & Erosion)",
                            "WAM 507: Watershed Hydrology, Modeling & Reservoir Management",
                            "WAM 509: Environmental Impact Assessment (EIA) in Water & Climate Projects"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "WAM 502: Integrated Water Resources Management (IWRM) & Policy",
                            "WAM 504: Water Quality, Pollution Control & Wastewater Treatment",
                            "WAM 506: Weather Forecasting & Early Warning Systems for Agriculture",
                            "WAM 508: Hydro-Economics, Water Pricing & Agribusiness Management",
                            "WAM 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== ALLIED HEALTH SCIENCES =====
    "Community Health Science": {
        degree: "B.HLIS Community Health Science",
        levels: [
            {
                level: "100 Level (Basic Medical & Natural Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CHS 101: Introduction to Community Health & Primary Health Care",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CHS 102: History & Evolution of Community Health in Nigeria",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "SOC 101: Introduction to Sociology & Anthropology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Human Anatomy, Physiology & Environmental Health Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CHS 201: Principles of Epidemiology & Disease Surveillance",
                            "ANA 201: Human Anatomy I (Gross Anatomy & Histology)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "EHS 201: Introduction to Environmental Health & Sanitation",
                            "STA 201: Statistics for Health Sciences & Biostatistics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CHS 202: Community Health Assessment & Diagnosis",
                            "ANA 202: Human Anatomy II (Metabolic & Systemic Organs)",
                            "PIO 202: Human Physiology II (Endocrine & Reproductive Systems)",
                            "MCB 201: General Microbiology & Parasitology",
                            "SOC 202: Medical Sociology & Health Behaviour",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Communicable Diseases, Maternal & Child Health, Health Education)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CHS 301: Control of Communicable & Non-Communicable Diseases",
                            "CHS 303: Maternal, Child Health (MCH) & Family Planning",
                            "CHS 305: Health Education, Promotion & Communication Strategies",
                            "CHS 307: Health Information Systems & Data Management (DHIS2)",
                            "CHS 309: School & Adolescent Health Services",
                            "CHS 311: Research Methodology in Community Health"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CHS 302: Primary Health Care (PHC) Management & Health Systems",
                            "CHS 304: Community Nutrition & Food Security",
                            "CHS 306: Occupational Health, Safety & Industrial Hygiene",
                            "CHS 308: Essential Drugs, Pharmacology & PHC Prescribing",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Community Field Postings & Health Center Internship)",
                semesters: [
                    {
                        semester: "Full Year / Both Semesters",
                        courses: [
                            "CHS 401: Rural Community Health Diagnosis & Field Posting",
                            "CHS 402: Primary Health Care (PHC) Center Clinical & Administrative Internship",
                            "CHS 403: Urban Community Health & Epidemic Outbreak Investigation Posting",
                            "CHS 404: Maternal & Child Health (MCH) Clinic Practical Attachment",
                            "CHS 405: Comprehensive Seminar Presentation & Technical Field Report"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Public Health, Health Policy & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CHS 501: Advanced Epidemiology, Disease Outbreak & Disaster Management",
                            "CHS 503: Health Economics, Healthcare Financing & Community Health Insurance",
                            "CHS 505: Public Health Laws, Ethics & Health Policy Formulation",
                            "CHS 507: Global Health, International Health Regulations & Tropical Medicine",
                            "CHS 509: Health Programme Planning, Monitoring & Evaluation (M&E)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CHS 502: Community Mental Health & Substance Abuse Prevention",
                            "CHS 504: Health Leadership, Strategic Management & Health Human Resources",
                            "CHS 506: Demography, Population Dynamics & Reproductive Health",
                            "CHS 508: Urbanization, Migration & Vulnerable Group Health Services",
                            "CHS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Medical Laboratory Science": {
        degree: "B.MLS Medical Laboratory Science",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MLS 101: Introduction to Medical Laboratory Science",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MLS 102: History & Ethics of Medical Laboratory Science",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Introductory MLS)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Anatomy & Histology Basics)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "CHM 201: Organic Chemistry for Medical Sciences",
                            "MLS 201: Laboratory Instrumentation, Biosafety & Quality Management",
                            "STA 201: Statistics for Health Sciences & Biostatistics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Neuroanatomy & Organ Systems)",
                            "PIO 202: Human Physiology II (Endocrine & Special Senses)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "MCB 201: General Microbiology",
                            "MLS 202: Introduction to Clinical Laboratory Disciplines",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Core Pathological Sciences I)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MLS 301: Medical Microbiology I (Bacteriology)",
                            "MLS 303: Clinical Biochemistry I (Carbohydrate & Lipid Metabolism)",
                            "MLS 305: Hematology & Blood Transfusion Science I (Basic Hematology)",
                            "MLS 307: Histopathology & Cytopathology I (Cellular Pathology & Microtomy)",
                            "MLS 309: Medical Parasitology & Entomology",
                            "MLS 311: Research Methodology in Laboratory Medicine"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MLS 302: Medical Virology & Mycology",
                            "MLS 304: Clinical Biochemistry II (Endocrinology & Renal Function)",
                            "MLS 306: Immunohaematology & Blood Banking Practice",
                            "MLS 308: Histochemical Techniques & Museum Preparation",
                            "MLS 310: Immunology & Immunopathology",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Core Pathological Sciences II & Clinical Hospital Posting)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MLS 401: Medical Microbiology II (Systemic Bacteriology & Antibiotic Stewardship)",
                            "MLS 403: Clinical Biochemistry III (Liver Function, Toxicology & Enzymology)",
                            "MLS 405: Hematology II (Hemostasis, Anemias & Hematological Malignancies)",
                            "MLS 407: Histopathology II (Diagnostic Cytology & Exfoliative Cytology)",
                            "MLS 409: Molecular Biology, Genetics & Diagnostic Biotechnology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MLS 402: Clinical Laboratory Postings I (Microbiology & Parasitology Labs)",
                            "MLS 404: Clinical Laboratory Postings II (Chemical Pathology Labs)",
                            "MLS 406: Clinical Laboratory Postings III (Hematology & Blood Transfusion Labs)",
                            "MLS 408: Clinical Laboratory Postings IV (Histopathology & Autopsy Labs)",
                            "MLS 410: Quality Assurance, Laboratory Management & Ethics"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Specialization / Advanced Laboratory Medicine & Final Year)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MLS 501: Advanced Medical Microbiology / Clinical Biochemistry / Hematology / Histopathology I",
                            "MLS 503: Diagnostic Molecular Pathology & Genomics",
                            "MLS 505: Laboratory Automation, Informatics & Point-of-Care Testing (POCT)",
                            "MLS 507: Forensic Science & Medico-Legal Laboratory Practice",
                            "MLS 509: Environmental & Occupational Health Laboratory Diagnostics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MLS 502: Advanced Specialty Practice II (Microbiology / Biochemistry / Hematology / Histopathology)",
                            "MLS 504: Laboratory Health & Safety, Biosafety Level (BSL) Standards & Waste Management",
                            "MLS 506: MLSCN Professional Council Orientation & Practice Legislation",
                            "MLS 508: Seminar in Medical Laboratory Science",
                            "MLS 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Nursing Science": {
        degree: "B.N.Sc. Nursing Science",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "NSC 101: Introduction to Nursing Science & Foundation of Nursing",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "NSC 102: History, Philosophy & Ethics of Nursing Practice",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "PSY 101: Introduction to Psychology",
                            "SOC 101: Introduction to Sociology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Foundations of Nursing Practice)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Anatomy, Histology & Embryology)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "NSC 201: Foundations of Nursing Practice I & Health Assessment",
                            "NSC 203: Principles of Microbiology & Parasitology for Nursing",
                            "STA 201: Statistics for Health Sciences & Biostatistics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Neuroanatomy & Organ Systems)",
                            "PIO 202: Human Physiology II (Endocrine & Reproductive Systems)",
                            "BCH 202: General Biochemistry II (Metabolism)",
                            "NSC 202: Foundations of Nursing Practice II (Clinical Nursing Skills Lab)",
                            "NSC 204: Human Growth and Development across Life Span",
                            "NSC 206: First Aid, Disaster Nursing & Emergency Care",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Pathology, Pharmacology, Medical-Surgical Nursing I)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "NSC 301: Medical-Surgical Nursing I (Cardiovascular, Respiratory & GI Systems)",
                            "PHA 301: Pharmacology & Therapeutics I for Nurses",
                            "PAT 301: General Pathology & Clinical Pathology",
                            "NSC 303: Nutrition & Dietetics in Health and Disease",
                            "NSC 305: Health Assessment, Diagnostics & Clinical Decision Making",
                            "NSC 307: Epidemiology & Biostatistics in Healthcare"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "NSC 302: Medical-Surgical Nursing II (Renal, Endocrine & Musculoskeletal Systems)",
                            "PHA 302: Pharmacology & Therapeutics II",
                            "NSC 304: Mental Health & Psychiatric Nursing I",
                            "NSC 306: Maternal & Child Health Nursing I",
                            "NSC 308: Nursing Research Methods & Applied Informatics",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Specialized Nursing Disciplines & Intensive Hospital Clinical Practicum)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "NSC 401: Maternal & Child Health Nursing II (Advanced Midwifery & Obstetrics)",
                            "NSC 403: Mental Health & Psychiatric Nursing II (Clinical Practicum)",
                            "NSC 405: Community Health Nursing I (Primary Health Care & Rural Nursing)",
                            "NSC 407: Paediatric Nursing & Child Care",
                            "NSC 409: Operative Technique & Critical Care Nursing (ICU/Theatre)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "NSC 402: Clinical Hospital Rotation I (Medical-Surgical & Operating Theatre Wards)",
                            "NSC 404: Clinical Hospital Rotation II (Labour Ward, Antenatal & Postnatal Wards)",
                            "NSC 406: Clinical Hospital Rotation III (Psychiatric Units & Community Outreaches)",
                            "NSC 408: Seminars in Nursing Science & Clinical Case Presentations"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Practice, Leadership, Public Health & Final Examinations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "NSC 501: Advanced Community Health Nursing II & Occupational Health",
                            "NSC 503: Nursing Leadership, Administration & Management in Healthcare",
                            "NSC 505: Applied Nursing Theory, Conceptual Frameworks & Practice Models",
                            "NSC 507: Gerontological Nursing & Care of the Elderly",
                            "NSC 509: Palliative Care & Oncology Nursing"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "NSC 502: Reproductive Health, Family Planning & Gender Issues",
                            "NSC 504: Health Policy, Healthcare Economics & Law in Nursing Practice",
                            "NSC 506: Professional Council Orientation (NMCN Regulations & Global Nursing Trends)",
                            "NSC 508: Final Year Clinical Comprehensive Seminar",
                            "NSC 590: Final Year Research Project / Dissertation"
                        ]
                    }
                ]
            }
        ]
    },
    "Optometry": {
        degree: "B.Optom Optometry",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "OPT 101: Introduction to Optometry & History of Vision Science",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Mechanics & Waves)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "OPT 102: Ethics and Scope of Optometric Practice",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II (Optics & Electromagnetism)",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Geometrical Optics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Anatomy & Histology)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "OPT 201: Geometrical & Physical Optics I (Reflection, Refraction & Lenses)",
                            "OPT 203: Ocular Anatomy & Histology I (Anteriol Segment & Annexa)",
                            "STA 201: Statistics for Health Sciences & Biostatistics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Head, Neck & Neuroanatomy)",
                            "PIO 202: Human Physiology II (Neurophysiology & Endocrine)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "OPT 202: Geometrical & Physical Optics II (Aberrations & Wave Optics)",
                            "OPT 204: Ocular Physiology & Biochemistry (Tear Film, Cornea & Intraocular Pressure)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Pathology, Ocular Anatomy II, Visual Optics & Dispensing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "OPT 301: Visual Optics & Refraction I (Emetropia, Myopia, Hyperopia & Astigmatism)",
                            "OPT 303: Ocular Anatomy & Physiology II (Posterior Segment & Visual Pathways)",
                            "OPT 305: Ophthalmic Lenses & Dispensing Optics I (Spectacle Lenses & Frames)",
                            "PAT 301: General Pathology & Clinical Immunology",
                            "PHA 301: General Pharmacology & Toxicology",
                            "MCB 301: Medical Microbiology & Parasitology for Optometry"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "OPT 302: Visual Optics & Refraction II (Presbyopia & Accommodation Anomalies)",
                            "OPT 304: Ophthalmic Lenses & Dispensing Optics II (Bifocals, Multifocals & Surfacing)",
                            "OPT 306: Clinical Optometry Instrumentation (Retinoscopy, Ophthalmoscopy & Slit Lamp)",
                            "PHA 302: Ocular Pharmacology & Therapeutics I (Mydriatics, Miotics & Anti-Glaucoma Drugs)",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Ocular Pathology, Binocular Vision & Pre-Clinical Postings)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "OPT 401: Ocular Pathology & Disease I (Anterior Segment Disorders)",
                            "OPT 403: Binocular Vision & Orthoptics I (Strabismus & Amblyopia Mechanics)",
                            "OPT 405: Contact Lens Practice I (Fitting Principles, Spherical & Toric Lenses)",
                            "OPT 407: Pediatric & Geriatric Optometry",
                            "OPT 409: Environmental, Industrial & Sports Vision",
                            "OPT 411: Research Methodology in Vision Science"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "OPT 402: Ocular Pathology & Disease II (Posterior Segment, Glaucoma & Retinal Disorders)",
                            "OPT 404: Binocular Vision & Orthoptics II (Vision Therapy & Prism Prescriptions)",
                            "OPT 406: Contact Lens Practice II (Complications & Specialty Lenses)",
                            "OPT 408: Neuro-Optometry & Systemic Diseases with Ocular Manifestations",
                            "OPT 410: Pre-Clinical Optometry Practical Examinations (OSCE)"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Clinical Practicum & Hospital Internship Rotations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "OPT 501: Primary Care Clinical Optometry Posting I (Refraction & Visual Diagnosis)",
                            "OPT 503: Specialty Clinic Posting I (Contact Lens & Low Vision Clinics)",
                            "OPT 505: Specialty Clinic Posting II (Binocular Vision & Orthoptics Clinics)",
                            "OPT 507: Ocular Disease & Therapeutics Clinic I (Glaucoma & Anterior Segment)",
                            "OPT 509: Low Vision & Visual Rehabilitation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "OPT 502: Primary Care Clinical Optometry Posting II (Advanced Diagnostic Procedures)",
                            "OPT 504: Ocular Disease & Therapeutics Clinic II (Retina, Neuro-Ophthalmic & Emergency)",
                            "OPT 506: Surgical & Laser Procedures Orientation (Co-management in Eye Care)",
                            "OPT 508: Epidemiology & Public Health Optometry",
                            "OPT 510: ODORBN Professional Council Orientation & Practice Legislation"
                        ]
                    }
                ]
            },
            {
                level: "600 Level (Doctoral Internships, Practice Management & Final Dissertation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "OPT 601: Advanced Clinical Externship & Rural Eye Care Postings",
                            "OPT 603: Practice Management, Entrepreneurship & Eye Care Economics",
                            "OPT 605: Ophthalmic Photography, Diagnostic Imaging & Fundus Autofluorescence",
                            "OPT 607: Advanced Ocular Pharmacology & Laser Therapeutics Co-Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "OPT 602: Hospital Outpatient Clinical Rotations (Comprehensive Eyecare Delivery)",
                            "OPT 604: Medical Law, Bioethics & Interprofessional Healthcare Collaboration",
                            "OPT 608: Final Professional Clinical Board Examinations",
                            "OPT 690: Final Year Doctoral Research Dissertation / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Physical Therapy / Medical Rehabilitation": {
        degree: "B.P.T. / B.MR Physical Therapy / Medical Rehabilitation",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PTR 101: Introduction to Physical Therapy & Medical Rehabilitation",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Mechanics & Heat)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PTR 102: History, Philosophy & Ethics of Disability & Rehabilitation",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II (Sound, Electricity & Magnetism)",
                            "PSY 101: Introduction to Psychology",
                            "SOC 101: Introduction to Sociology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Foundations of Kinesiology)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Musculoskeletal Anatomy & Histology)",
                            "PIO 201: Human Physiology I (Neuro-Muscular Physiology)",
                            "BCH 201: General Biochemistry I",
                            "PTR 201: Foundations of Movement, Kinesiology & Biomechanics I",
                            "PTR 203: Electrotherapy Physics & Biophysical Agents I",
                            "STA 201: Statistics for Health Sciences & Biostatistics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Neuroanatomy, Head/Neck & Visceral Anatomy)",
                            "PIO 202: Human Physiology II (Cardiopulmonary & Exercise Physiology)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "PTR 202: Exercise Therapy I (Range of Motion, Muscle Testing & Massage)",
                            "PTR 204: Electrotherapy Physics & Biophysical Agents II (Therapeutic Currents & Heat)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Pathology, Pharmacology, Clinical Kinesiology & Pathology)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PAT 301: General Pathology & Clinical Pathology",
                            "PHA 301: Pharmacology & Therapeutics for Rehabilitation",
                            "PTR 301: Musculoskeletal Physiotherapy I (Orthopaedics & Traumatology)",
                            "PTR 303: Neurological Physiotherapy I (Neuro-Assessment & Applied Anatomy)",
                            "PTR 305: Kinesiology & Human Pathomechanics",
                            "PTR 307: Measurement & Evaluation in Physical Therapy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PTR 302: Cardiopulmonary Physiotherapy I (Assessment & Therapeutic Exercise)",
                            "PTR 304: Exercise Therapy II (Progressive Resistance, Mobilization & Hydrotherapy)",
                            "PTR 306: Electrotherapy II (Ultrasound, Laser & Phototherapy Applications)",
                            "PTR 308: Community Rehabilitation & Disability Studies",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Specialized Clinical Disciplines & Intensive Hospital Postings)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PTR 401: Musculoskeletal Physiotherapy II (Spine, Joint Conditions & Manual Therapy)",
                            "PTR 403: Neurological Physiotherapy II (Stroke, Spinal Cord Injury & Peripheral Neuropathies)",
                            "PTR 405: Paediatric Physiotherapy (Cerebral Palsy, Developmental Delays & Congenital Anomalies)",
                            "PTR 407: Sports Physiotherapy & Athletic Injuries Management",
                            "PTR 409: Research Methodology in Health & Rehabilitation Sciences"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PTR 402: Clinical Hospital Rotation I (Orthopaedic & Surgical Wards)",
                            "PTR 404: Clinical Hospital Rotation II (Neurology & Neurosurgical Units)",
                            "PTR 406: Clinical Hospital Rotation III (Paediatrics & Intensive Care Units)",
                            "PTR 408: Clinical Case Presentations & OSCE Seminars"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Advanced Rehabilitation, Administration, Prosthetics & Final Research)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PTR 501: Advanced Cardiopulmonary & Intensive Care Unit (ICU) Rehabilitation",
                            "PTR 503: Geriatric Physiotherapy & Degenerative Disorders",
                            "PTR 505: Ergonomics, Occupational Health & Industrial Rehabilitation",
                            "PTR 507: Prosthetics, Orthotics & Assistive Technology",
                            "PTR 509: Women's Health, Obstetrics & Gynaecological Physiotherapy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PTR 502: Administration, Health Economics & Practice Management in Rehabilitation",
                            "PTR 504: Medical Law, Bioethics & MRTBR Professional Legislation",
                            "PTR 506: Comprehensive Clinical Rehabilitation Postings (Outpatient & Inpatient)",
                            "PTR 508: Final Clinical Oral & Practical Examinations",
                            "PTR 590: Final Year Research Dissertation / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Radiography & Radiation Science": {
        degree: "B.Rad Radiography & Radiation Science",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RAD 101: Introduction to Radiography & Radiation Science",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Mechanics, Thermal & Atomic Physics)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing / Computer Applications"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RAD 102: History, Ethics & Scope of Medical Imaging Practice",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II (Electromagnetism, Optics & Modern Physics)",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Radiation Physics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Musculoskeletal & Systemic Anatomy)",
                            "PIO 201: Human Physiology I (Systemic Physiology)",
                            "BCH 201: General Biochemistry I",
                            "RAD 201: Radiographic Physics & Radiation Instrumentation I",
                            "RAD 203: General Principles of Radiographic Technique I (Chest, Abdomen & Extremities)",
                            "STA 201: Biostatistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Neuroanatomy, Head, Neck & Visceral Anatomy)",
                            "PIO 202: Human Physiology II (Neurophysiology & Endocrine Systems)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "RAD 202: Radiation Protection, Biology & Dosimetry (ALARA Principles & Shielding)",
                            "RAD 204: Image Processing, Digital Radiography (CR/DR) & PACS Systems",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Imaging Techniques, Pathology & Special Procedures)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RAD 301: Radiographic Technique II (Spine, Skull, Pelvis & Contrast Media Studies)",
                            "RAD 303: Specialized Radiological Equipment I (X-Ray Generators, Tubes & Fluoroscopy)",
                            "RAD 305: Radiographic Anatomy & Cross-Sectional Anatomy I (CT/MRI Correlations)",
                            "PAT 301: General Pathology & Clinical Pathology for Radiographers",
                            "PHA 301: Pharmacology for Medical Imaging (Contrast Media, Adverse Reactions & Emergency Drugs)",
                            "MCB 301: Medical Microbiology & Infection Control in Radiology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RAD 302: Fluoroscopy & Special Radiographic Procedures (IVU, HSG, Barium Series, Angiography)",
                            "RAD 304: Radiographic Equipment II (Computed Tomography & Mammography Systems)",
                            "RAD 306: Clinical Radiography Posting I (General Hospital Rotations - Plain Film & Mobile Units)",
                            "RAD 308: Radiation Protection Legislation & Environmental Safety",
                            "GST 312: Peace Studies and Conflict Resolution",
                            "ENT 312: Venture Creation"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (CT, MRI, Ultrasound, Radiotherapy & Pre-Clinical Rotations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RAD 401: Computed Tomography (CT) Principles, Protocols & Pathology",
                            "RAD 403: Medical Ultrasound & Sonography Techniques I (Obstetric, Pelvic & Abdominal)",
                            "RAD 405: Magnetic Resonance Imaging (MRI) Physics, Sequences & Safety Protocols",
                            "RAD 407: Radiotherapy Physics, Equipment (Linear Accelerators) & Treatment Planning",
                            "RAD 409: Research Methodology in Medical Imaging & Radiation Science"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RAD 402: Advanced Magnetic Resonance Imaging (MRI) & Functional Neuroimaging",
                            "RAD 404: Medical Ultrasound II (Vascular, Small Parts & Musculoskeletal Sonography)",
                            "RAD 406: Clinical Radiography Posting II (CT, MRI & Ultrasound Rotations)",
                            "RAD 408: Radiation Oncology & Chemotherapy Co-Management",
                            "RAD 410: Pre-Clinical Comprehensive OSCE & Image Interpretation Assessment"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Specialty Imaging, Hospital Externship, Administration & Final Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RAD 501: Nuclear Medicine Imaging (SPECT, PET-CT) & Molecular Imaging",
                            "RAD 503: Interventional Radiology, Vascular Imaging & Cardiac Catheterization",
                            "RAD 505: Pediatric, Geriatric & Trauma Emergency Radiography",
                            "RAD 507: Mammography, Breast Imaging & Bone Densitometry (DEXA)",
                            "RAD 509: Quality Assurance, Quality Control & Medical Imaging Informatics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RAD 502: Healthcare Administration, Hospital Management & Radiology Economics",
                            "RAD 504: Medical Law, Bioethics & RRBN Professional Practice Legislation",
                            "RAD 506: Advanced Clinical Hospital Rotations (All Modalities)",
                            "RAD 508: Final Professional Practical & Viva Voce Examinations",
                            "RAD 590: Final Year Research Dissertation / Project"
                        ]
                    }
                ]
            }
        ]
    },
    "Health Information Management": {
        degree: "B.Sc. Health Information Management",
        levels: [
            {
                level: "100 Level (Foundation Sciences, IT & Health Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HIM 101: Introduction to Health Information Management & Medical Records",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Database Fundamentals"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HIM 102: Healthcare Delivery Systems & Hospital Organization Structure",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences, Medical Terminology & Coding Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy & Physiology I (Musculoskeletal & Systemic)",
                            "HIM 201: Medical Terminology & Clinical Vocabulary I",
                            "HIM 203: Health Data Collection, Management & Quality Assurance",
                            "HIM 205: Foundations of Health Informatics & Software Applications",
                            "STA 201: Biostatistics & Health Statistics I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy & Physiology II (Neuro, Visceral & Endocrine Systems)",
                            "PAT 202: Introduction to Human Pathology & Disease Processes",
                            "HIM 202: Medical Terminology & Clinical Vocabulary II",
                            "HIM 204: Principles of Clinical Classification Systems & Coding (ICD-10)",
                            "HIM 206: Electronic Health Record (EHR) Systems & Database Management",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Clinical Coding, Health Informatics & Practicum)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HIM 301: Advanced Clinical Coding & Nomenclature (ICD-10, ICD-11 & CPT Procedures)",
                            "HIM 303: Health Data Analytics, Visualization & Epidemiology",
                            "HIM 305: Legal & Ethical Aspects of Health Information (NDPR, Privacy & Security)",
                            "HIM 307: Healthcare Information Systems Design & Telemedicine Systems",
                            "STA 301: Advanced Biostatistics & Health Demography",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HIM 302: Clinical Rotations & Industrial Attachment I (Tertiary Hospital Health Records Dept)",
                            "HIM 304: Health Insurance, Medical Billing & Revenue Cycle Management",
                            "HIM 306: Healthcare Quality Management & Patient Safety Metrics",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Health IT Governance, Administration, Practicum & Final Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HIM 401: Healthcare Strategic Planning, Management & Leadership",
                            "HIM 403: Health Data Governance, Information Interoperability & Security Standards",
                            "HIM 405: Health Economics, Financing & Decision Support Systems",
                            "HIM 407: Applied Health Informatics & Electronic Document Management Systems (EDMS)",
                            "HIM 409: Research Methodology in Health Information & Informatics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HIM 402: Advanced Hospital Practicum & Practical Examinations (EHR & Coding Management)",
                            "HIM 404: HRORBN Professional Practice Law, Bioethics & Health Policy Analysis",
                            "HIM 406: Health Information Management Seminar & Case Presentations",
                            "HIM 490: Final Year Research Dissertation / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Health Planning & Policy": {
        degree: "B.Sc. Health Planning & Policy",
        levels: [
            {
                level: "100 Level (Basic Sciences, Social Sciences & Foundation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HPP 101: Introduction to Health Planning & Policy",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "SOC 101: Introduction to Sociology",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HPP 102: Introduction to Global Health & Healthcare Systems",
                            "BIO 102: General Biology II",
                            "POS 102: Introduction to Political Science & Government",
                            "PSY 101: Introduction to Psychology",
                            "ECO 102: Principles of Economics II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Health Economics, Demography & Policy Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HPP 201: Foundations of Health Policy Analysis & Formulation",
                            "HPP 203: Principles of Healthcare Management & Administration",
                            "HPP 205: Demography, Population Dynamics & Health Metrics",
                            "ECO 201: Principles of Microeconomics",
                            "STA 201: Biostatistics for Health Sciences I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HPP 202: Health Economics & Financing Mechanisms (NHIA, Out-of-Pocket & User Fees)",
                            "HPP 204: Community Health Systems, Primary Healthcare (PHC) & Universal Health Coverage (UHC)",
                            "HPP 206: Environmental & Occupational Health Policy",
                            "ECO 202: Principles of Macroeconomics",
                            "STA 202: Biostatistics for Health Sciences II",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Planning, Epidemiology, Legal Frameworks & Field Attachment)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HPP 301: Strategic Health Planning, Project Design & Management",
                            "HPP 303: Epidemiology for Health Planners & Policy Makers",
                            "HPP 305: Medical Law, Health Ethics & Policy Legislation in Nigeria",
                            "HPP 307: Health Technology Assessment (HTA) & Resource Allocation",
                            "STA 301: Advanced Health Statistics & Data Analysis",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HPP 302: Field Attachment / Internship I (Ministries of Health, Primary Healthcare Development Agencies, or NGOs)",
                            "HPP 304: Public Health Communication, Advocacy & Community Mobilization",
                            "HPP 306: Healthcare Quality Assurance, Monitoring & Evaluation (M&E)",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Strategic Management, Global Health Policy & Final Research)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HPP 401: Advanced Health Policy Analysis & Reform Strategies",
                            "HPP 403: Global Health Governance, Diplomacy & International Health Agencies (WHO, UNICEF, Global Fund)",
                            "HPP 405: Disaster Management, Emergency Preparedness & Health Security Policy",
                            "HPP 407: Health Financing Reform, Insurance Systems & Cost-Benefit Analysis",
                            "HPP 409: Research Methodology in Health Planning & Policy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HPP 402: Strategic Leadership & Change Management in Healthcare Systems",
                            "HPP 404: Comparative Health Systems & International Health Policy",
                            "HPP 406: Health Planning & Policy Seminar / Case Studies Presentation",
                            "HPP 490: Final Year Research Project / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Medical Physics": {
        degree: "B.Sc. Medical Physics",
        levels: [
            {
                level: "100 Level (Basic Sciences & Foundation Physics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MPH 101: Introduction to Medical Physics & Biophysics",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "CHM 101: General Chemistry I",
                            "BIO 101: General Biology I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Programming Fundamentals"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MPH 102: Historical Perspectives & Scope of Radiation in Medicine",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "PHY 108: Practical Physics I",
                            "CHM 102: General Chemistry II",
                            "BIO 102: General Biology II",
                            "MTH 102: Elementary Mathematics II (Calculus & Vectors)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Physics, Human Anatomy & Radiation Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MPH 201: Classical & Modern Physics for Medical Physicists",
                            "ANA 201: Human Anatomy & Physiology I (Cellular, Musculoskeletal & Nervous Systems)",
                            "PHY 201: Electromagnetism & Circuit Theory",
                            "PHY 203: Thermal Physics & Waves",
                            "MTH 201: Mathematical Methods I (Differential Equations & Advanced Calculus)",
                            "STA 201: Statistics for Physical & Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MPH 202: Fundamentals of Radiation Physics & Interaction of Radiation with Matter",
                            "ANA 202: Human Anatomy & Physiology II (Visceral, Cardiovascular & Respiratory Systems)",
                            "PHY 202: Quantum Physics & Atomic Structure",
                            "PHY 204: Basic Electronics & Instrumentation",
                            "PHY 208: Practical Physics II (Radiation Detection Experiments)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Dosimetry, Imaging Physics, Radiotherapy & Clinical Posting)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MPH 301: Physics of Diagnostic Radiology (X-Ray, Mammography & Fluoroscopy)",
                            "MPH 303: Radiation Biology, Radiation Protection & Dosimetry",
                            "MPH 305: Radiation Detection Instrumentation & Measurement Techniques",
                            "MPH 307: Mathematical Methods in Medical Physics & Signal Processing",
                            "PHY 301: Nuclear Physics I (Radioactivity & Decay Kinetics)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MPH 302: Industrial Training (SIWES) / Clinical Physics Posting (Hospital Radiography, CT & Radiotherapy Departments)",
                            "MPH 304: Physics of Computed Tomography (CT) & Magnetic Resonance Imaging (MRI)",
                            "MPH 306: Radiation Dosimetry Calibration & Standards (IAEA Protocols)",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Radiotherapy Physics, Nuclear Medicine, Quality Assurance & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MPH 401: Physics of Radiation Therapy & Treatment Planning Systems (LINAC, Cobalt-60 & Brachytherapy)",
                            "MPH 402: Physics of Nuclear Medicine & Molecular Imaging (SPECT, PET & Radiopharmaceuticals)",
                            "MPH 403: Medical Ultrasound & Non-Ionizing Radiation Physics",
                            "MPH 405: Quality Assurance, Quality Control & Safety Standards in Radiotherapy & Radiology",
                            "MPH 407: Research Methodology & Computational Physics in Medicine"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MPH 404: Radiotherapy Dosimetry & Advanced Beam Modeling",
                            "MPH 406: Radiation Protection Regulations, Nuclear Safety & Environmental Health Physics",
                            "MPH 408: Medical Physics Seminar & Hospital Case Studies",
                            "MPH 490: Final Year Research Project / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Prosthetics & Orthotics": {
        degree: "B.Sc. Prosthetics & Orthotics",
        levels: [
            {
                level: "100 Level (Basic Sciences, Engineering Drawing & Workshop Practice)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "POT 101: Introduction to Prosthetics, Orthotics & Rehabilitation Sciences",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Calculus & Vectors)",
                            "ENG 101: Engineering Workshop Practice & Metalwork I",
                            "ENG 103: Engineering Drawing & Technical Sketching I",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "POT 102: Historical Perspectives & Safety Standards in P&O Workshops",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "MTH 102: Elementary Mathematics II",
                            "ENG 102: Engineering Workshop Practice II",
                            "ENG 104: Engineering Drawing II (CAD Fundamentals)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Anatomy, Physiology, Materials Technology & Biomechanics Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Anatomy of Upper & Lower Limbs)",
                            "PHG 201: Human Physiology I (Musculoskeletal & Neuromuscular Systems)",
                            "POT 201: Materials Technology in P&O (Polymers, Carbon Fiber, Metals & Resins)",
                            "POT 203: Wood, Vacuum & Metal Machining Techniques",
                            "BCH 201: General Biochemistry",
                            "STA 201: Basic Statistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Vertebral Column, Head, Neck & Trunk)",
                            "PHG 202: Human Physiology II (Cardiovascular, Respiratory & Endocrine)",
                            "POT 202: Introduction to Biomechanics & Mechanics of Materials",
                            "POT 204: Technical Drawing for Prosthetics & Orthotics Design",
                            "PAT 202: General Pathology & Conditions Requiring P&O Interventions",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Lower/Upper Limb Prosthetics & Orthotics, Biomechanics & Workshop Lab)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "POT 301: Lower Limb Orthotics I (Ankle-Foot & Knee-Ankle-Foot Orthoses - AFO/KAFO)",
                            "POT 303: Lower Limb Prosthetics I (Transtibial / Below-Knee Prostheses & Socket Design)",
                            "POT 305: Biomechanics of Human Movement & Gait Analysis",
                            "POT 307: Physical Assessment, Cast Taking & Model Modification Techniques",
                            "POT 309: Orthopaedic Interventions, Traumatology & Amputation Surgery",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "POT 302: Upper Limb Orthotics & Spinal Orthoses (Scoliosis Bracing & Cervical Collars)",
                            "POT 304: Upper Limb Prosthetics I (Transradial & Transhumeral Prostheses)",
                            "POT 306: Applied Mechanics & Strength of P&O Structural Materials",
                            "POT 308: Rehabilitation Medicine, Sports Mobility Aids & Assistive Devices",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Clinical Postings, Advanced Technology & SIWES Internship)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "POT 401: Clinical Rotations & Hospital Practicum I (Patient Assessment & Casting)",
                            "POT 403: Lower Limb Prosthetics II (Transfemoral / Above-Knee & Hip Disarticulation)",
                            "POT 405: Advanced Lower Limb & Spinal Orthotics Design",
                            "POT 407: CAD/CAM Technology in Prosthetics & Orthotics",
                            "POT 409: Research Methodology in Health & Rehabilitation Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "POT 402: Industrial Attachment (SIWES) / Clinical Internship (6 Months in Orthopaedic Hospitals & Rehabilitation Centers)",
                            "POT 404: SIWES Evaluation, Technical Reporting & Seminar Presentation"
                        ]
                    }
                ]
            },
            {
                level: "500 Level (Myoelectric Systems, Clinical Practice, Management & Final Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "POT 501: Advanced Upper Limb Prosthetics & Myoelectric / Bionic Controls",
                            "POT 503: Advanced Gait Analysis, Kinesiology & Clinical Pathomechanics",
                            "POT 505: Clinical Workshop & Business Management, Ethics & Practice Law",
                            "POT 507: Pediatric & Neurological Orthotics (Cerebral Palsy, Spina Bifida & Clubfoot)",
                            "POT 509: Final Year Research Project Seminar"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "POT 502: Advanced Clinical Fitting, Alignment & Final Patient Management",
                            "POT 504: Quality Control, ISO Standards & Risk Management in P&O Manufacturing",
                            "POT 506: Community-Based Rehabilitation (CBR) & Assistive Technology Policy",
                            "POT 590: Final Year Research Dissertation / Project Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Public Health": {
        degree: "B.Sc. Public Health",
        levels: [
            {
                level: "100 Level (Basic Sciences & Social Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUH 101: Introduction to Public Health & Community Health",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "SOC 101: Introduction to Sociology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUH 102: History & Evolution of Global Public Health",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "PSY 101: Introduction to Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences, Environmental Health & Demography)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (General & Systemic Anatomy)",
                            "PHG 201: Human Physiology I (Cellular, Musculoskeletal & Cardiovascular)",
                            "PUH 201: Principles of Environmental Health & Sanitation",
                            "PUH 203: Demography, Population Dynamics & Health Metrics",
                            "BCH 201: General Biochemistry I",
                            "STA 201: Biostatistics for Public Health I",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Visceral & Neuroanatomy)",
                            "PHG 202: Human Physiology II (Respiratory, Renal & Endocrine)",
                            "MCB 202: Medical Microbiology & Parasitology for Public Health",
                            "PUH 202: Primary Healthcare (PHC) System & Universal Health Coverage (UHC)",
                            "PUH 204: Public Health Nutrition & Food Safety",
                            "STA 202: Biostatistics for Public Health II",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Epidemiology, Health Education, Field Posting & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUH 301: General & Applied Epidemiology (Infectious & Non-Communicable Diseases)",
                            "PUH 303: Health Education, Promotion & Behavioral Change Communication",
                            "PUH 305: Occupational Health & Industrial Safety",
                            "PUH 307: Maternal, Child Health (MCH) & Reproductive Health Policy",
                            "PUH 309: Disease Vector Control & Pest Management",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUH 302: SIWES / Public Health Fieldwork Attachment (PHC Centers, State Ministries of Health, or WHO/NGO Outposts)",
                            "PUH 304: Health Economics & Healthcare Financing",
                            "PUH 306: Water, Sanitation, and Hygiene (WASH) Systems",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Health Policy, Disaster Management, Monitoring & Final Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUH 401: Public Health Policy, Administration & Systems Management",
                            "PUH 403: Disaster Preparedness, Emergency Management & Health Security",
                            "PUH 405: Health Data Science, GIS Mapping & Health Information Systems (DHIS2)",
                            "PUH 407: Program Planning, Monitoring & Evaluation (M&E) in Public Health",
                            "PUH 409: Research Methodology in Public Health"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUH 402: Global Health Governance, Diplomacy & International Health Regulations",
                            "PUH 404: Mental Health, Substance Abuse & Adolescent Health Policy",
                            "PUH 406: Public Health Ethics, Law & Human Rights",
                            "PUH 408: Public Health Seminar & Case Studies Defense",
                            "PUH 490: Final Year Research Project / Thesis"
                        ]
                    }
                ]
            }
        ]
    },
    "Speech Therapy / Audiology": {
        degree: "B.Sc. Speech Therapy / Audiology",
        levels: [
            {
                level: "100 Level (Basic Sciences & Behavioral Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AST 101: Introduction to Audiology & Speech-Language Pathology",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Acoustic & Wave Physics)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "PSY 101: General Psychology & Developmental Milestones",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AST 102: Introduction to Phonetics & Speech Science",
                            "BIO 102: General Biology II",
                            "CHM 102: General Chemistry II",
                            "PHY 102: General Physics II",
                            "SOC 101: Introduction to Sociology & Disability Studies",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Anatomy, Physiology, Biological Acoustics & Linguistics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Human Anatomy I (Gross Anatomy of Head, Neck, Ear, Nose & Throat)",
                            "PHG 201: Human Physiology I (Neurophysiology & Auditory Mechanics)",
                            "AST 201: Biological Acoustics, Sound Perception & Psychoacoustics",
                            "AST 203: Linguistics & Applied Phonetics for Speech Pathology",
                            "BCH 201: General Biochemistry",
                            "STA 201: Statistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Human Anatomy II (Neuroanatomy & Cranial Nerves)",
                            "PHG 202: Human Physiology II (Speech Physiology & Respiratory Kinematics)",
                            "AST 202: Speech & Language Development in Children",
                            "AST 204: Pathology of Hearing, Balance & Vocal Tract Disorders",
                            "PAT 202: Introduction to General Pathology & Medical Genetics",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Diagnostic Audiology, Speech Disorders & Clinical Postings)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AST 301: Diagnostic Audiology I (Pure-Tone Audiometry, Tympanometry & Speech Audiometry)",
                            "AST 303: Articulation, Phonological & Fluency Disorders (Stuttering & Cluttering)",
                            "AST 305: Pediatric Audiology & Educational Rehabilitation for Deaf/Hard of Hearing",
                            "AST 307: Neurogenic Communication Disorders I (Aphasia & Dysarthria)",
                            "AST 309: Clinical Practicum I: Audiology & Speech Assessment",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AST 302: SIWES / Clinical Hospital Posting (ENT Departments, Rehabilitation Clinics & Special Education Centers)",
                            "AST 304: Diagnostic Audiology II (Electrophysiological Testing: ABR, OAE & VENG)",
                            "AST 306: Voice & Swallowing Disorders (Dysphagia & Laryngectomy Rehabilitation)",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Hearing Aids, Neuro-rehabilitation, Practice & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AST 401: Amplification Technology, Hearing Aids & Cochlear Implants",
                            "AST 403: Neurogenic Communication Disorders II (Apraxia, Traumatic Brain Injury & Dementia)",
                            "AST 405: Vestibular & Balance Disorders Assessment & Rehabilitation",
                            "AST 407: Community-Based Rehabilitation, Augmentative & Alternative Communication (AAC)",
                            "AST 409: Research Methodology in Audiology & Speech Pathology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AST 402: Industrial, Occupational & Environmental Audiology (Noise Measurement & Hearing Conservation)",
                            "AST 404: Professional Practice Ethics, Health Law & Practice Management (MRTBN Guidelines)",
                            "AST 406: Clinical Case Conferences & Grand Rounds",
                            "AST 490: Final Year Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== ARCHITECTURE PROGRAMS =====
    "Architecture": {
        degree: "B.Sc. Architecture",
        levels: [
            {
                level: "100 Level (Basic Sciences, Visual Arts & Design Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARC 101: Architectural Graphics & Freehand Drawing I",
                            "ARC 103: Introduction to Architecture & Built Environment",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Mechanics & Heat)",
                            "MTH 101: Elementary Mathematics I (Calculus & Vectors)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARC 102: Architectural Graphics & Freehand Drawing II",
                            "ARC 104: Descriptive Geometry & Technical Drafting",
                            "BIO 102: General Biology II",
                            "PHY 102: General Physics II (Sound, Optics & Electricity)",
                            "MTH 102: Elementary Mathematics II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Architectural Design Studio, Building Construction & Structures)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARC 201: Architectural Design Studio I (Basic Spatial Design & Anthropometrics)",
                            "ARC 203: Building Materials & Construction Technology I (Timber & Masonry)",
                            "ARC 205: History of Architecture I (Ancient & Classical World)",
                            "ARC 207: Theory of Architecture I",
                            "ARC 209: Structural Mechanics & Elements in Architecture I",
                            "ARC 211: Computer-Aided Design in Architecture I (2D CAD Drafting)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARC 202: Architectural Design Studio II (Small Scale Residential & Public Structures)",
                            "ARC 204: Building Materials & Construction Technology II (Concrete & Mortar)",
                            "ARC 206: History of Architecture II (Medieval to Renaissance)",
                            "ARC 208: Climate, Environment & Environmental Physics in Architecture",
                            "ARC 210: Structural Mechanics & Elements in Architecture II",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Intermediate Design Studio, Building Services & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARC 301: Architectural Design Studio III (Multi-Story & Public Facility Design)",
                            "ARC 303: Building Construction Technology III (Reinforced Concrete & Steel Structures)",
                            "ARC 305: Building Services I (Plumbing, Drainage & Sanitation Systems)",
                            "ARC 307: History of African Architecture & Vernacular Design Systems",
                            "ARC 309: Theory of Structures III (R.C. Beam & Column Analysis)",
                            "ARC 311: Computer-Aided Design II (3D BIM Modeling, Revit & Rendering)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARC 302: SIWES / Industrial Training (6 Months Attachment in Architectural Firms & Construction Sites)",
                            "ARC 304: SIWES Technical Logbook Evaluation, Site Reports & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Design Studio, Urban Planning, Professional Practice & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARC 401: Architectural Design Studio IV (Complex Multi-Functional / High-Rise Buildings)",
                            "ARC 403: Advanced Building Construction & Detailing IV",
                            "ARC 405: Building Services II (Electrical, HVAC, Acoustics & Fire Protection)",
                            "ARC 407: Urban Planning, Site Analysis & Landscape Architecture",
                            "ARC 409: Specifications, Estimating & Building Economics",
                            "ARC 411: Research Methodology in Architectural Studies"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARC 402: Architectural Design Studio V (Comprehensive Terminal Design Project)",
                            "ARC 404: Professional Practice, Office Management & Architectural Law (ARCON/NIA Standards)",
                            "ARC 406: Building Maintenance, Renovation & Adaptive Reuse",
                            "ARC 408: Housing & Low-Cost Settlement Studies",
                            "ARC 490: Final Year Design Thesis Defense & Portfolio Review"
                        ]
                    }
                ]
            }
        ]
    },
    "Interior Design": {
        degree: "B.Sc. Interior Design",
        levels: [
            {
                level: "100 Level (Design Foundations, Visual Arts & Basic Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "INT 101: Introduction to Interior Design & Spatial Arts",
                            "INT 103: Freehand Sketching, Perspective & Visual Representation I",
                            "BIO 101: General Biology I",
                            "CHM 101: General Chemistry I (Materials & Chemical Properties)",
                            "PHY 101: General Physics I (Mechanics & Waves)",
                            "MTH 101: Elementary Mathematics I (Algebra & Geometry)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "INT 102: Technical Drafting & Descriptive Geometry",
                            "INT 104: Freehand Sketching & Color Theory II",
                            "BIO 102: General Biology II",
                            "PHY 102: General Physics II (Light, Optics & Acoustics)",
                            "MTH 102: Elementary Mathematics II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Interior Design Studio, Ergonomics & Finishes)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "INT 201: Interior Design Studio I (Residential Space Planning & Anthropometrics)",
                            "INT 203: Interior Materials, Textiles & Finishes I (Flooring, Wall Coverings & Coatings)",
                            "INT 205: Ergonomics, Human Factors & Universal Design",
                            "INT 207: History of Interiors & Furniture I (Ancient to 19th Century)",
                            "INT 209: Building Systems & Environmental Physics for Interiors (Acoustics & Microclimate)",
                            "INT 211: Computer-Aided Design I (2D CAD Drafting for Interiors)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "INT 202: Interior Design Studio II (Retail, Commercial & Office Workspaces)",
                            "INT 204: Furniture Design, Joinery & Cabinetry Workshop",
                            "INT 206: History of Interiors & Furniture II (Modern, Contemporary & African Styles)",
                            "INT 208: Architectural Graphics & Technical Detailing for Interiors",
                            "INT 210: Color Psychology & Lighting Design Foundations",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Intermediate Studio, Lighting, Services & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "INT 301: Interior Design Studio III (Hospitality, Restaurants & Exhibition Design)",
                            "INT 303: Advanced Lighting Systems & Daylighting Integration",
                            "INT 305: Building Services for Interiors (HVAC, Electrical, Plumbing & Fire Safety)",
                            "INT 307: Custom Furniture Design & Material Prototyping",
                            "INT 309: Interior Construction Technology, Partitioning & Ceilings",
                            "INT 311: 3D Visualization, Rendering & BIM (Revit, SketchUp, V-Ray)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "INT 302: SIWES / Industrial Training (6 Months Attachment in Interior Design Firms, Architectural Studios, or Furniture Production Centers)",
                            "INT 304: SIWES Technical Logbook Evaluation, Site Reports & Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Studio, Project Management, Practice & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "INT 401: Interior Design Studio IV (Complex Multi-Functional Interiors & Adaptive Reuse)",
                            "INT 403: Sustainable Interior Design, Green Materials & Energy Efficiency",
                            "INT 405: Cost Estimating, Specifications & Bill of Quantities for Interiors",
                            "INT 407: Facility Management, Renovation & Space Optimization",
                            "INT 409: Research Methodology in Interior Architecture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "INT 402: Comprehensive Terminal Interior Design Project Studio",
                            "INT 404: Professional Practice, Ethics, Contracts & Business Management",
                            "INT 406: Portfolio Design & Presentation Techniques",
                            "INT 408: Exhibition, Set Design & Event Spatial Styling",
                            "INT 490: Final Year Thesis Project & Portfolio Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Landscape Architecture": {
        degree: "B.Sc. Landscape Architecture",
        levels: [
            {
                level: "100 Level (Basic Sciences, Visual Arts & Spatial Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LSA 101: Introduction to Landscape Architecture & Environmental Design",
                            "ARC 101: Architectural Graphics & Freehand Drawing I",
                            "BIO 101: General Biology I (Plant & Animal Ecology)",
                            "CHM 101: General Chemistry I",
                            "PHY 101: General Physics I (Mechanics & Properties of Matter)",
                            "MTH 101: Elementary Mathematics I (Calculus & Vectors)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LSA 102: Topography, Site Surveying & Mapping Foundations",
                            "ARC 102: Descriptive Geometry & Technical Drafting",
                            "BIO 102: General Biology II (Botany & Systematics)",
                            "PHY 102: General Physics II (Sound, Light & Environmental Physics)",
                            "MTH 102: Elementary Mathematics II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Design Studio, Horticulture, Site Engineering & CAD)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LSA 201: Landscape Design Studio I (Basic Outdoor Spatial Planning & Site Layouts)",
                            "LSA 203: Horticultural Science & Plant Taxonomy for Designers",
                            "LSA 205: History of Landscape Architecture I (Ancient Gardens to Classical Parks)",
                            "LSA 207: Site Engineering & Earthworks I (Grading, Contour Manipulation & Drainage)",
                            "LSA 209: Landscape Materials & Hardscape Construction I (Stone, Masonry & Timber)",
                            "LSA 211: Computer-Aided Design I (2D CAD & GIS Mapping Foundations)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LSA 202: Landscape Design Studio II (Small Scale Residential & Civic Outdoor Spaces)",
                            "LSA 204: Planting Design I (Herbaceous & Ornamental Plant Systems)",
                            "LSA 206: History of Landscape Architecture II (Modern, Contemporary & African Vernacular Landscapes)",
                            "LSA 208: Environmental Geology, Soil Science & Hydrology",
                            "LSA 210: Microclimate, Solar Orientation & Landscape Ecology",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Urban Landscape Studio, Green Infrastructure & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LSA 301: Landscape Design Studio III (Parks, Urban Plazas & Commercial Grounds)",
                            "LSA 303: Planting Design II (Woody Plants, Trees, Shrubs & Urban Forestry)",
                            "LSA 305: Site Engineering & Earthworks II (Stormwater Management, Retention Ponds & Irrigation)",
                            "LSA 307: Hardscape Detailing & Landscape Construction Technology",
                            "LSA 309: Ecological Restoration, Conservation & Wetlands Management",
                            "LSA 311: 3D Landscape Visualization, BIM & Terrain Modeling (Revit, Lumion, Rhino)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LSA 302: SIWES / Industrial Training (6 Months Attachment in Landscape Design Firms, Urban Planning Agencies, or Construction/Horticultural Enterprises)",
                            "LSA 304: SIWES Technical Logbook Evaluation, Site Reports & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Regional/Urban Masterplanning, Professional Practice & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LSA 401: Landscape Design Studio IV (Regional Parks, Waterfronts & Masterplanned Communities)",
                            "LSA 403: Urban Landscape Planning & Green Infrastructure Design",
                            "LSA 405: Environmental Impact Assessment (EIA) & Sustainability Studies",
                            "LSA 407: Cost Estimating, Specifications & Landscape Economics",
                            "LSA 409: Research Methodology in Landscape Architecture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LSA 402: Terminal Landscape Design Studio V (Comprehensive Master Project)",
                            "LSA 404: Professional Practice, Office Management & Environmental Law",
                            "LSA 406: Landscape Maintenance, Facility Management & Site Stewardship",
                            "LSA 408: Geographic Information Systems (GIS) for Regional Environmental Analysis",
                            "LSA 490: Final Year Thesis Design Defense & Portfolio Review"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== ARTS & HUMANITIES PROGRAMS =====
    "African Languages & Literature": {
        degree: "B.A. African Languages & Literature",
        levels: [
            {
                level: "100 Level (Foundations in Linguistics, Cultural History & Language Skills)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ALL 101: Introduction to African Languages, Dialects & Cultures",
                            "ALL 103: Elementary Grammar & Composition of Selected African Language I",
                            "LIN 101: Introduction to Linguistics I (Phonetics & Phonology)",
                            "LIT 101: Introduction to Oral Literature & Folklore",
                            "HIS 101: African History & Cultural Foundations",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ALL 102: Elementary Grammar & Composition of Selected African Language II",
                            "ALL 104: Orthography, Writing Systems & Language Standardization in Africa",
                            "LIN 102: Introduction to Linguistics II (Morphology & Syntax)",
                            "LIT 102: Introduction to Written African Literature",
                            "ALL 106: Pan-African Cultural Studies & Traditions",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Structural Linguistics, Oral Traditions & Literary Genres)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ALL 201: Phonology of Selected African Language (Yoruba / Hausa / Igbo / Fulfulde / Kanuri)",
                            "ALL 203: Morphology of Selected African Language",
                            "ALL 205: African Oral Poetry, Chants, Epics & Songs",
                            "ALL 207: Prose & Narrative Traditions in African Languages",
                            "ALL 209: History & Evolution of African Written Literature",
                            "LIN 201: Language & Society (Sociolinguistics Foundations)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ALL 202: Syntax of Selected African Language",
                            "ALL 204: African Drama, Performance & Indigenous Theatre",
                            "ALL 206: Dialectology & Language Varieties in Nigeria",
                            "ALL 208: Material Culture, Arts, Rituals & Festivals in Africa",
                            "LIN 202: Introduction to Semantics & Pragmatics",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Linguistics, Literary Criticism, Translation & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ALL 301: Advanced Syntax & Transformational Grammar of Selected Language",
                            "ALL 303: Semantics & Pragmatics of Selected African Language",
                            "ALL 305: Literary Criticism & Theories of African Literature",
                            "ALL 307: Translation Theory & Practice (English ↔ African Languages)",
                            "ALL 309: Language, Media Broadcasting & Publishing in African Languages",
                            "ALL 311: Lexicography & Dictionary Making in African Languages",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ALL 302: Fieldwork & Research Methods in Oral Literature & Cultural Documentation",
                            "ALL 304: SIWES / Practical Attachment (6 Months Attachment in Media Houses, Cultural Centers, Publishing Houses, or Language Translation Agencies)",
                            "ALL 306: SIWES Technical Logbook Evaluation, Field Reports & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Applied Linguistics, Computational Linguistics, Media & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ALL 401: Stylistics & Textual Analysis in African Literature",
                            "ALL 403: Historical & Comparative Linguistics of African Language Families (Niger-Congo, Afroasiatic, Nilo-Saharan)",
                            "ALL 405: Advanced Translation, Interpretation & Subtitling for Screen & Digital Media",
                            "ALL 407: Language Planning, Policy & Mother-Tongue Education in Africa",
                            "ALL 409: Research Methodology in African Languages & Literature"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ALL 402: Contemporary Issues in African Literature & Indigenous Philosophy",
                            "ALL 404: Computational Linguistics, Natural Language Processing (NLP) & Localization for African Languages",
                            "ALL 406: Creative Writing & Scriptwriting in African Languages",
                            "ALL 408: Language, Gender, Identity & Power Dynamics",
                            "ALL 490: Final Year Undergraduate Project / Research Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Arabic Language & Literature": {
        degree: "B.A. Arabic Language & Literature",
        levels: [
            {
                level: "100 Level (Foundational Grammar, Composition & Literary History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARA 101: Basic Arabic Grammar I (Al-Nahu Al-Wadih I)",
                            "ARA 103: Arabic Reading, Comprehension & Composition I",
                            "ARA 105: Introduction to Classical Arabic Literature",
                            "ARA 107: Introduction to Arabic Phonetics & Orthography",
                            "HIS 101: History of the Arab-Islamic World & Culture",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARA 102: Basic Arabic Grammar II (Al-Nahu Al-Wadih II)",
                            "ARA 104: Arabic Reading, Comprehension & Conversation II",
                            "ARA 106: Introduction to Pre-Islamic & Early Islamic Poetry",
                            "ARA 108: Basic Arabic Morphology (Al-Sarf)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Intermediate Grammar, Classical Prose, Morphology & Rhetoric)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARA 201: Intermediate Arabic Grammar I (Al-Nahu)",
                            "ARA 203: Intermediate Morphology (Al-Sarf)",
                            "ARA 205: Pre-Islamic & Umayyad Literature (Jahiliyya & Umayyad Eras)",
                            "ARA 207: Introduction to Arabic Rhetoric (Al-Balaghah: Al-Bayan & Al-Ma'ani)",
                            "ARA 209: Arabic Translation I (Arabic ↔ English Foundations)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARA 202: Intermediate Arabic Grammar II",
                            "ARA 204: Abbasid Literature (Poetry & Prose)",
                            "ARA 206: Textual Analysis of Classical Arabic Prose & Quranic Excerpts",
                            "ARA 208: Arabic Lexicography & Dictionary Usage",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Linguistics, Rhetoric, Nigerian Arabic Literature & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARA 301: Advanced Arabic Syntax & Grammar (Alfiyyat Ibn Malik Studies)",
                            "ARA 303: Advanced Arabic Rhetoric (Al-Badi' & Literary Aesthetics)",
                            "ARA 305: Modern Arabic Literature in the Middle East (Al-Nahda Era to Contemporary)",
                            "ARA 307: History of Arabic Literature in West Africa & Nigeria (Bilad Al-Sudan)",
                            "ARA 309: Translation Theory & Practice II (Media, Legal & Commercial Texts)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARA 302: Arabic Prosody & Metrics ('Ilm Al-'Arud wa Al-Qawafi)",
                            "ARA 304: SIWES / Practical Attachment (6 Months Attachment in Translation Agencies, Media & Publishing Houses, Foreign Embassies, or Educational Centers)",
                            "ARA 306: SIWES Technical Logbook Evaluation, Field Reports & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Applied Linguistics, Critical Theory, Dialectology & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ARA 401: Advanced Syntax & Grammatical Theories",
                            "ARA 403: Literary Criticism: Classical & Modern Theories (Naqd Al-Adab)",
                            "ARA 405: Modern Arabic Drama, Novel & Short Stories",
                            "ARA 407: Arabic Studies in Nigeria: Writings of Sheikh Uthman Dan Fodio & Northern Scholars",
                            "ARA 409: Research Methodology in Arabic Language & Literature"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ARA 402: Arabic Dialectology & Modern Standard Arabic (MSA) vs. Colloquial Varieties",
                            "ARA 404: Simultaneous Interpretation & Advanced Subtitling Techniques",
                            "ARA 406: Comparative Literature: Arabic & African/Western Literary Traditions",
                            "ARA 490: Final Year Undergraduate Thesis Project & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Archaeology & Heritage Studies": {
        degree: "B.A. Archaeology & Heritage Studies",
        levels: [
            {
                level: "100 Level (Foundations of Human Evolution, Archaeology & Cultural History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AHS 101: Introduction to Archaeology I (Principles, Scope & History)",
                            "AHS 103: Introduction to Heritage Studies & Cultural Resources",
                            "AHS 105: World Prehistory & Human Origins",
                            "LIN 101: Introduction to Linguistics I (Language & Culture Dynamics)",
                            "HIS 101: Ancient African Civilizations & History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AHS 102: Introduction to Archaeology II (Basic Field Methods & Survey)",
                            "AHS 104: Environmental Archaeology & Human Ecology",
                            "AHS 106: Cultural Heritage of Nigeria & West Africa",
                            "AHS 108: Basic Map Reading, Cartography & Spatial Survey",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Archaeological Methods, Material Analysis & Heritage Conservation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AHS 201: Archaeological Field Methods: Excavation Techniques & Recording",
                            "AHS 203: Material Culture Analysis I (Lithics, Ceramics & Organics)",
                            "AHS 205: African Archaeology: Palaeolithic to Iron Age",
                            "AHS 207: Principles of Museum Studies & Curatorial Practice",
                            "AHS 209: Ethnoarchaeology & Oral Traditions in Archaeological Interpretation",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AHS 202: Archaeological Laboratory Analysis & Relative Dating Methods",
                            "AHS 204: Heritage Management, Policy & Legislation in Nigeria",
                            "AHS 206: Nigerian Archaeology (Nok, Igbo-Ukwu, Ife, Benin & Oyo)",
                            "AHS 208: Geoarchaeology & Site Formation Processes",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Scientific Archaeology, GIS, Tourism & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AHS 301: Scientific Applications in Archaeology (Absolute Dating, Archaeometry & Isotope Analysis)",
                            "AHS 303: Geographic Information Systems (GIS) & Remote Sensing in Archaeology",
                            "AHS 305: Cultural Tourism & Sustainable Heritage Development",
                            "AHS 307: Public Archaeology, Indigenous Knowledge & Community Engagement",
                            "AHS 309: Conservation & Preservation of Artifacts & Heritage Monuments",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AHS 302: Field School: Intensive Practical Archaeological Excavation & Site Mapping",
                            "AHS 304: SIWES / Practical Attachment (6 Months Attachment at Museums, National Commission for Museum and Monuments [NCMM], Tourism Boards, or Heritage Conservation Sites)",
                            "AHS 306: SIWES Technical Logbook Evaluation, Field Reports & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Cultural Resource Management, Theory & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AHS 401: History & Theoretical Frameworks of Archaeological Thought",
                            "AHS 403: Cultural Resource Management (CRM) & Environmental Impact Assessment (EIA)",
                            "AHS 405: Advanced African Iron Age & Industrial Archaeology",
                            "AHS 407: Underwater Archaeology, Maritime Heritage & Coastal Landscapes",
                            "AHS 409: Research Methodology in Archaeology & Heritage Studies"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AHS 402: Heritage Trafficking, Looting, Reparation & International Heritage Laws",
                            "AHS 404: Digital Archaeology, 3D Scanning & Virtual Museum Curation",
                            "AHS 406: Bioarchaeology & Human Osteology",
                            "AHS 490: Final Year Undergraduate Research Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Creative Arts": {
        degree: "B.A. Creative Arts",
        levels: [
            {
                level: "100 Level (Foundations of Creative & Performing Arts)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CRA 101: Introduction to Creative Arts I (Visual Arts, Music & Theatre Interconnections)",
                            "CRA 103: Fundamental Drawing & Two-Dimensional Design I",
                            "CRA 105: Fundamentals of Music Theory & Sight Reading I",
                            "CRA 107: Basics of Acting, Stage Movement & Voice",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CRA 102: Introduction to Creative Arts II (Media, Film & Digital Expressions)",
                            "CRA 104: Fundamental Drawing & Three-Dimensional Design II",
                            "CRA 106: Fundamentals of Music Theory & Basic Keyboard/Instrument Skills",
                            "CRA 108: Elements of Playwriting & Dramatic Literature",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Intermediate Studio Practice, Performance & Art History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CRA 201: History of African Art & Architecture",
                            "CRA 203: Intermediate Studio Practice: Painting, Sculpture & Printmaking",
                            "CRA 205: African Music & Ethnomusicology (Instrumentation & Rhythm)",
                            "CRA 207: Technical Theatre (Stagecraft, Lighting & Scenography)",
                            "CRA 209: Introduction to Digital Media Arts & Computer Graphics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CRA 202: Western & Global History of Art and Performance",
                            "CRA 204: Ceramics, Textile Design & Applied Crafts",
                            "CRA 206: Choral Conducting, Voice Training & Instrumental Performance",
                            "CRA 208: Directing for the Stage & Screen",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Specialization, Exhibition/Production Practice & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CRA 301: Creative Arts Management, Marketing & Intellectual Property Rights",
                            "CRA 303: Advanced Studio/Performance Workshop I (Selected Major Focus)",
                            "CRA 305: Arts Criticism, Aesthetics & Cultural Philosophy",
                            "CRA 307: Digital Animation, Video Editing & Multimedia Production",
                            "CRA 309: Research Methodology in Creative & Performing Arts",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CRA 302: Practical Field School: Departmental Play Production & Art Exhibition",
                            "CRA 304: SIWES / Industrial Training (6 Months attachment at Advertising Agencies, Film Studios, Museums, Media Houses, or Performing Arts Troupes)",
                            "CRA 306: SIWES Technical Logbook, Exhibition Portfolio & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Specialization, Creative Direction & Project)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CRA 401: Advanced Studio/Performance Workshop II (Focus Major)",
                            "CRA 403: Cultural Resource Management & Tourism",
                            "CRA 405: Entrepreneurship in Creative Industries & Event Management",
                            "CRA 407: Contemporary African Arts & Performance Movements",
                            "CRA 409: Studio Management, Gallery Curation & Stage Production"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CRA 402: Community Arts, Arts Therapy & Social Change",
                            "CRA 404: Final Graduation Exhibition / Final Studio Performance Showcase",
                            "CRA 490: Final Year Research Project / Creative Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Drama / Dramatic Arts / Theatre Arts": {
        degree: "B.A. Drama / Dramatic Arts / Theatre Arts",
        levels: [
            {
                level: "100 Level (Foundations of Drama, Performance & Theatre History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "THA 101: Introduction to Theatre & Dramatic Arts",
                            "THA 103: History of Drama & Theatre I (Classical Greek to Renaissance)",
                            "THA 105: Fundamentals of Acting & Voice Training",
                            "THA 107: Basics of Playwriting & Dramatic Structure",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "THA 102: Traditional African Theatre & Indigenous Performance Systems",
                            "THA 104: History of Drama & Theatre II (Modern & Contemporary World Theatre)",
                            "THA 106: Stage Movement, Dance & Kinesiology",
                            "THA 108: Elements of Technical Theatre & Scenography",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Play Directing, Technical Theatre, Media & African Drama)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "THA 201: Principles of Directing I (Script Analysis & Blocking)",
                            "THA 203: African Drama & Theatre (Pre-Colonial to Post-Independence)",
                            "THA 205: Technical Theatre I: Stage Lighting & Sound Engineering",
                            "THA 207: Costume Design, Makeup & Wardrobe Management",
                            "THA 209: Introduction to Media Arts: Radio & Audio Production",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "THA 202: Directing II: Practical Stage Production",
                            "THA 204: Technical Theatre II: Stage Design, Props & Set Construction",
                            "THA 206: Dramatic Theory & Criticism I",
                            "THA 208: Screenwriting for Film, Television & Digital Media",
                            "THA 210: Children's Theatre & Drama in Education (DIE)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Specialization, Media Production & Practical Attachment)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "THA 301: Advanced Directing & Production Workshop",
                            "THA 303: Film Production, Cinematography & Video Editing",
                            "THA 305: Theatre Management, Arts Administration & Marketing",
                            "THA 307: Community Theatre & Theatre for Development (TfD)",
                            "THA 309: Research Methodology in Theatre & Performing Arts",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "THA 302: Departmental Major Stage Production / Convocation Play Workshop",
                            "THA 304: SIWES / Practical Attachment (6 Months Attachment at Nollywood Film Studios, Television Stations, Radio Houses, Advertising Agencies, or National Theatre Troupes)",
                            "THA 306: SIWES Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Specialization, Creative Project & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "THA 401: Modern European & American Dramatic Literature",
                            "THA 403: Dramatic Theory & Criticism II (Post-Colonial, Feminist & Marxist Perspectives)",
                            "THA 405: Entrepreneurship in Creative & Entertainment Industries (Nollywood, Live Events & Digital Streaming)",
                            "THA 407: Advanced Specialization Workshop I (Directing / Scriptwriting / Acting / Tech Theatre / Media)",
                            "THA 409: Contemporary Nigerian Theatre & Performing Arts"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "THA 402: Advanced Specialization Workshop II (Practical Practical Production Defense / Portfolio)",
                            "THA 404: Cultural Resource Management, Festivals & Tourism",
                            "THA 406: Final Practical Practical Showcase / Practical Directing Project",
                            "THA 490: Final Year Research Dissertation / Creative Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "English Language": {
        degree: "B.A. English Language",
        levels: [
            {
                level: "100 Level (Foundations in Grammar, Phonetics & Literary Studies)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ENG 101: Spoken English & Practical Phonetics",
                            "ENG 103: Introduction to English Grammar & Composition I",
                            "ENG 105: Introduction to the History of the English Language",
                            "LIT 101: Introduction to Literature in English",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ENG 102: Spoken English & Phonetic Transcription II",
                            "ENG 104: Introduction to English Grammar & Composition II",
                            "ENG 106: English Language & Communication Skills",
                            "LIT 102: Introduction to Fiction & Prose Forms",
                            "ENG 108: Basic Orthography, Lexicon & Vocabulary Development",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Structural Linguistics, Phonology & Sociolinguistics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ENG 201: English Phonetics & Phonology I",
                            "ENG 203: English Morphology (Word Structure & Formation)",
                            "ENG 205: Advanced English Syntax I (Phrase & Sentence Structure)",
                            "ENG 207: Introduction to Sociolinguistics",
                            "ENG 209: Language & Society in Nigeria",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ENG 202: English Phonetics & Phonology II (Suprasegmentals & Intonation)",
                            "ENG 204: Advanced English Syntax II (Transformational & Generative Grammar)",
                            "ENG 206: Introduction to Semantics (Word & Sentence Meaning)",
                            "ENG 208: Advanced Prose Writing, Essay Writing & Editing",
                            "ENG 210: Creative Writing & Stylistic Foundations",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Applied Linguistics, Discourse Analysis, Nigerian English & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ENG 301: Discourse Analysis & Text Linguistics",
                            "ENG 303: Pragmatics (Speech Acts, Implicature & Contextual Meaning)",
                            "ENG 305: Phonology of World Englishes & Varieties of English",
                            "ENG 307: Nigerian English: Phonological, Syntactic & Lexical Features",
                            "ENG 309: Research Methodology in English Language & Linguistics",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ENG 302: Stylistics (Linguistic Analysis of Literary & Non-Literary Texts)",
                            "ENG 304: SIWES / Practical Fieldwork (6 Months Attachment in Media Houses, Publishing Firms, Advertising Agencies, Corporate Communications, or Educational Outposts)",
                            "ENG 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Theoretical Linguistics, Digital Media & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ENG 401: Advanced English Semantics & Pragmatics",
                            "ENG 403: Psycholinguistics & Language Acquisition (L1 & L2 Processes)",
                            "ENG 405: Language and Media: Digital Communication, Copywriting & Broadcasting",
                            "ENG 407: Computational Linguistics & Natural Language Processing (NLP) Foundations",
                            "ENG 409: Language, Gender & Power Dynamics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ENG 402: Multilingualism, Language Planning & Language Policy in Nigeria",
                            "ENG 404: Applied English Linguistics & English as a Second Language (ESL) Pedagogy",
                            "ENG 406: Editing, Book Publishing & Lexicography (Dictionary Design)",
                            "ENG 490: Final Year Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "English Literature / Literature-in-English": {
        degree: "B.A. English Literature / Literature-in-English",
        levels: [
            {
                level: "100 Level (Foundations in Literary Genres, Orality & Critical Reading)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIT 101: Introduction to Literature-in-English & Literary Appreciation",
                            "LIT 103: Introduction to Fiction & Prose Narrative Forms",
                            "LIT 105: Introduction to Drama & Dramatic Literature",
                            "ENG 101: Spoken English & Practical Phonetics",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIT 102: Introduction to Poetry & Poetic Forms",
                            "LIT 104: African Oral Literature & Folklore Traditions",
                            "LIT 106: Introduction to Nigerian Literature (Pioneering Prose & Poetry)",
                            "ENG 104: English Grammar & Composition",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (African Literature, Classical Traditions & Literary Criticism)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIT 201: Survey of African Prose Fiction (Achebe, Soyinka, Armah, Beti to Modern)",
                            "LIT 203: Classical Classical & Elizabethan Drama (Greek Tragedies to Shakespeare)",
                            "LIT 205: History & Evolution of Poetry (Chaucer, Metaphysical, Romantic & Victorian)",
                            "LIT 207: Creative Writing I (Workshop in Fiction, Poetry & Scriptwriting)",
                            "ENG 201: Stylistics Foundations & Language in Literature",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIT 202: Survey of African Drama & Performance (Soyinka, Clark, Osofisan, Rotimi)",
                            "LIT 204: African Poetry & Orality (Oral Chants to Written Verse)",
                            "LIT 206: 18th & 19th Century European Novel",
                            "LIT 208: Introduction to Literary Criticism & Critical Theory",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Post-Colonial Theory, Diaspora Literature, Research & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIT 301: Modern Literary Theory & Critical Approaches (Structuralism, Marxism, Feminism, Post-Modernism)",
                            "LIT 303: Post-Colonial African Literature & Liberation Movements",
                            "LIT 305: African-American & Black Diaspora Literature (Harlem Renaissance to Contemporary)",
                            "LIT 307: Commonwealth & World Literature in Translation",
                            "LIT 309: Research Methodology in Literary & Cultural Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIT 302: Caribbean Literature (Walcott, Brathwaite, Naipaul, Kincaid)",
                            "LIT 304: SIWES / Practical Attachment (6 Months Attachment in Publishing Houses, Media Organizations, Film Studios, Cultural Centers, or Advertising Agencies)",
                            "LIT 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Literary Theory, Contemporary Literature & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIT 401: Advanced Literary Theory & Post-Colonial Discourse (Fanon, Said, Bhabha, Spivak)",
                            "LIT 403: Contemporary African Literature & Modern Nigerian Writers (Adichie, Habila, Obioma, Cole)",
                            "LIT 405: Feminist Literature, Gender & Women's Writing in Africa",
                            "LIT 407: Studies in Major Authors (In-Depth Seminar on Selected Literary Figures)",
                            "LIT 409: Digital Humanities, Electronic Literature & Screen Adaptations"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIT 402: Literature, Politics, Eco-Criticism & Human Rights in Africa",
                            "LIT 404: Popular Culture, Urban Literature & Performance Poetry (Spoken Word & Social Media)",
                            "LIT 406: Creative Writing II: Master Class & Portfolio Defense",
                            "LIT 490: Final Year Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Foreign Languages (French, German, Russian, Chinese, Spanish)": {
        degree: "B.A. Foreign Languages",
        levels: [
            {
                level: "100 Level (Foundational Grammar, Phonetics & Language Proficiency)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LANG 101: Basic Grammar & Structure of Target Language I",
                            "LANG 103: Spoken Language, Practical Phonetics & Pronunciation I",
                            "LANG 105: Reading Comprehension, Lexicon & Vocabulary Building I",
                            "LANG 107: Introduction to the History & Culture of Target Language Countries",
                            "HIS 101: African Civilizations & World History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LANG 102: Basic Grammar & Structure of Target Language II",
                            "LANG 104: Spoken Language & Conversation Practice II",
                            "LANG 106: Basic Composition, Orthography & Writing Systems II",
                            "LANG 108: Introduction to Literature in Target Language",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Intermediate Linguistics, Literary Genres & Translation)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LANG 201: Intermediate Grammar, Syntax & Morphology I",
                            "LANG 203: Intermediate Oral Expression, Debates & Listening Laboratory",
                            "LANG 205: Survey of Literature I (17th to 19th Century Prose, Drama & Poetry)",
                            "LANG 207: Translation Theory & Practice I (Target Language ↔ English)",
                            "LIN 201: General Linguistics Foundations",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LANG 202: Intermediate Grammar, Syntax & Morphology II",
                            "LANG 204: Advanced Written Composition & Expressive Writing",
                            "LANG 206: Survey of Literature II (20th Century to Contemporary Works)",
                            "LANG 208: Civilization & Socio-Political Institutions of Target Language Nations",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Year Abroad Program / In-Country Immersion & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LANG 301: Advanced Language Immersion: Oral Communication & Accent Stylistics",
                            "LANG 303: Advanced Textual Analysis & Stylistics",
                            "LANG 305: Commercial, Legal & Diplomatic Translation Practice",
                            "LANG 307: Civilizations, Media & Contemporary Press Studies of Target Language Nations",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LANG 302: SIWES / Immersion Attachment (6 Months Attachment in Foreign Embassies, International NGOs, Translation Agencies, Media Houses, or Tourism Boards)",
                            "LANG 304: SIWES / Immersion Evaluation, Logbook Defense & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Linguistics, Interpretation, Literature & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LANG 401: Advanced Syntax & Theoretical Linguistics of Target Language",
                            "LANG 403: Literary Theory & Criticism of Target Language Texts",
                            "LANG 405: Consecutive & Simultaneous Interpretation Techniques",
                            "LANG 407: Francophone / Hispanic / Lusophone / Asian Literature in Africa & Diaspora",
                            "LANG 409: Research Methodology in Foreign Languages & Literature"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LANG 402: Computer-Assisted Translation (CAT), Localization & Subtitling",
                            "LANG 404: Comparative Literature & Intercultural Communication",
                            "LANG 406: Business Communication & International Relations in Target Language",
                            "LANG 490: Final Year Undergraduate Research Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "History & Diplomatic Studies / International Studies": {
        degree: "B.A. History & Diplomatic Studies / International Studies",
        levels: [
            {
                level: "100 Level (Foundations in World History, Statecraft & International Relations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HDS 101: Introduction to History & Historical Methodology",
                            "HDS 103: Introduction to International Relations & Diplomacy",
                            "HDS 105: African History to 1800 (Pre-Colonial Kingdoms & Trade Networks)",
                            "HDS 107: World History: Classical Antiquity to the Industrial Revolution",
                            "POL 101: Introduction to Political Science",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HDS 102: History of Nigeria from Earliest Times to 1800",
                            "HDS 104: Evolution of the Modern International System (Westphalia to Present)",
                            "HDS 106: Africa and the Wider World: Trans-Saharan & Trans-Atlantic Contacts",
                            "HDS 108: Basic Diplomatic Concepts, Protocols & Etiquette",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Colonial History, Diplomatic Theory, Foreign Policy & Law)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HDS 201: History of Nigeria: 1800 to 1960 (Colonial Rule & Independence Movements)",
                            "HDS 203: History of International Diplomacy & Statecraft",
                            "HDS 205: International Law & Diplomacy I (Sources, Subjects & Sovereignty)",
                            "HDS 207: History of Imperialism, Colonialism & Decolonization in Africa",
                            "HDS 209: History of the Middle East & Geopolitics",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HDS 202: History of Nigeria Since 1960 (Post-Independence, Civil War & Governance)",
                            "HDS 204: Nigerian Foreign Policy Since Independence",
                            "HDS 206: International Law & Diplomacy II (Treaties, Immunity & Maritime Law)",
                            "HDS 208: History of Europe: 1789 to 1945 (French Revolution to WWII)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Global Organizations, Cold War, Strategic Studies & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HDS 301: International Organizations & Global Governance (UN, AU, ECOWAS, EU)",
                            "HDS 303: Cold War Geopolitics, Nuclear Diplomacy & Post-Cold War Order",
                            "HDS 305: Foreign Policy Analysis: Theories & Decision-Making Models",
                            "HDS 307: Strategic Studies, National Security & Arms Control",
                            "HDS 309: Research Methodology in History & Diplomatic Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HDS 302: International Political Economy (IPE): Trade, Globalization & Finance",
                            "HDS 304: SIWES / Practical Attachment (6 Months Attachment in Ministry of Foreign Affairs, Embassies, International NGOs, Think Tanks, or Media Outlets)",
                            "HDS 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Conflict Resolution, Global Crises, Advanced Diplomacy & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HDS 401: Conflict Resolution, Peacebuilding & International Mediation",
                            "HDS 403: Diplomacy of Major Powers (USA, China, Russia & EU Foreign Policies)",
                            "HDS 405: Human Rights, International Humanitarian Law & Refugee Studies",
                            "HDS 407: African Union (AU), Regional Integration & Pan-Africanism",
                            "HDS 409: Contemporary Global Crises, Terrorism & Cybersecurity Diplomacy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HDS 402: Consular and Diplomatic Practice, Correspondence & Negotiations",
                            "HDS 404: Environmental Diplomacy, Climate Governance & Energy Security",
                            "HDS 406: Global Diaspora, Migration Dynamics & Transnational Relations",
                            "HDS 490: Final Year Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "History & Strategic Studies": {
        degree: "B.A. History & Strategic Studies",
        levels: [
            {
                level: "100 Level (Foundations in World History, Strategy & Political Science)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSS 101: Introduction to History & Historical Methodology",
                            "HSS 103: Introduction to Strategic & Security Studies",
                            "HSS 105: African History to 1800 (States, Warfare & Trade Systems)",
                            "HSS 107: World History: Classical Antiquity to Industrial Revolution",
                            "POL 101: Introduction to Political Science",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSS 102: History of Nigeria from Earliest Times to 1800",
                            "HSS 104: Evolution of Strategic Thought (Sun Tzu, Thucydides, Machiavelli, Clausewitz)",
                            "HSS 106: Africa and the Wider World: Slavery, Trade & Contact",
                            "HSS 108: Basic Military History & Development of Warfare",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Strategic Theories, Colonial History, Military History & Law)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSS 201: History of Nigeria: 1800 to 1960 (Colonial Rule & Military Resistance)",
                            "HSS 203: Strategic Thought & Theories of War (Jomini, Mahan, Mackinder, Douhet)",
                            "HSS 205: History of World Wars I & II: Military & Geopolitical Analysis",
                            "HSS 207: Imperialism, Colonialism & Decolonization in Africa",
                            "HSS 209: Laws of Armed Conflict & International Humanitarian Law",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSS 202: History of Nigeria Since 1960 (Post-Independence, Civil War & Civil-Military Relations)",
                            "HSS 204: Defense & Security Policies of Nigeria",
                            "HSS 206: Cold War Geopolitics, Deterrence Theory & Nuclear Strategy",
                            "HSS 208: History of Europe: 1789 to 1945 (Revolution to Modern Warfare)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Security Management, Intelligence, Regional Geopolitics & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSS 301: National Security Analysis & Threat Assessment",
                            "HSS 303: Strategic Intelligence, Counter-Intelligence & Statecraft",
                            "HSS 305: Maritime Strategy, Naval Power & Geopolitics of Oceans",
                            "HSS 307: Arms Control, Disarmament & Non-Proliferation Regimes",
                            "HSS 309: Research Methodology in History & Strategic Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSS 302: Air Power, Space Warfare & Cyber Security Strategy",
                            "HSS 304: SIWES / Practical Fieldwork (6 Months Attachment in Defense Agencies, Security Institutes, Think Tanks, Peacekeeping Missions, or Media Houses)",
                            "HSS 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Irregular Warfare, Terrorism, Global Power Strategy & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HSS 401: Insurgency, Counter-Insurgency & Asymmetric Warfare",
                            "HSS 403: Grand Strategy & Foreign Policies of Major Powers (USA, China, Russia, EU)",
                            "HSS 405: Counter-Terrorism, Homeland Security & Border Control Strategies",
                            "HSS 407: Regional Security Architecture in Africa (AU Standby Force, ECOWAS, Lake Chad Basin Commission)",
                            "HSS 409: Geopolitics of Energy, Resources & Environmental Security"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HSS 402: Conflict Resolution, Peacebuilding & Crisis Management",
                            "HSS 404: Strategic Leadership, Decision-Making & War Gaming Simulations",
                            "HSS 406: Contemporary Global Security Crises & Transnational Organized Crime",
                            "HSS 490: Final Year Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Islamic Studies": {
        degree: "B.A. Islamic Studies",
        levels: [
            {
                level: "100 Level (Foundational Studies in Quran, Hadith, Arabic & History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ISS 101: Introduction to Islamic Studies & Islamic Worldview",
                            "ISS 103: Textual Study of the Quran I (Selected Surahs & Recitation Standards)",
                            "ISS 105: Textual Study of Hadith I (Fundamentals & Core Collections)",
                            "ARA 101: Basic Arabic Grammar I (Al-Nahu)",
                            "HIS 101: Early History of Islam: Pre-Islamic Arabia & Prophetic Era (Seerah)",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ISS 102: Introduction to Islamic Jurisprudence (Fiqh) & Acts of Worship (Ibadat)",
                            "ISS 104: Fundamentals of Islamic Creed (Aqidah & Articles of Faith)",
                            "ISS 106: Textual Study of Hadith II",
                            "ARA 102: Basic Arabic Grammar & Conversation II",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Hadith Methodology, Fiqh, Caliphate History & Philosophy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ISS 201: Sciences of the Quran ('Ulum al-Quran & History of Compilation)",
                            "ISS 203: Science of Hadith Criticism & Methodology ('Ulum al-Hadith)",
                            "ISS 205: Islamic Jurisprudence I (Fiqh al-Mu'amalat - Transactions & Civil Law)",
                            "ISS 207: History of the Rightly Guided Caliphs (Al-Khulafa' al-Rashidun)",
                            "ISS 209: Islamic Moral Philosophy, Ethics & Character (Tasawwuf & Akhlaq)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ISS 202: Classical Exegesis of the Quran (Tafsir Principles)",
                            "ISS 204: Principles of Islamic Jurisprudence (Usul al-Fiqh)",
                            "ISS 206: History of Umayyad and Abbasid Dynasties",
                            "ISS 208: Family Law in Islam (Ahkam al-Usrah: Marriage, Divorce & Inheritance)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Islamic Law, West African Heritage, Research Methods & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ISS 301: Advanced Exegesis of the Quran (Tafsir Studies)",
                            "ISS 303: Schools of Islamic Jurisprudence (Al-Madhahib al-Fiqhiyyah)",
                            "ISS 305: History of Islam in West Africa & Bilad al-Sudan",
                            "ISS 307: Islamic Economics, Banking & Finance (Zakat, Waqf & Murabahah)",
                            "ISS 309: Research Methodology in Islamic Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ISS 302: Comparative Study of Religions (Islam, Christianity & ATR)",
                            "ISS 304: SIWES / Practical Attachment (6 Months Attachment in Sharia Courts, Islamic Educational Foundations, Media Organizations, or Translation Agencies)",
                            "ISS 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Sokoto Caliphate Studies, Modern Thought, Law & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ISS 401: History of Islam in Nigeria & Writings of Sokoto Jihad Scholars (Dan Fodio, Abdullahi, Bello)",
                            "ISS 403: Modern Islamic Movements & Intellectual Thought (19th-21st Century)",
                            "ISS 405: Islamic Judicial System & Administration of Justice in Nigeria (Sharia Courts & Appeals)",
                            "ISS 407: Contemporary Issues in Islam (Human Rights, Bioethics, Gender & Governance)",
                            "ISS 409: Intellectual History of Muslims in Northern & Southern Nigeria"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ISS 402: Advanced Principles of Islamic Jurisprudence (Usul al-Fiqh Applications)",
                            "ISS 404: Inter-Religious Dialogue, Peacebuilding & Muslim-Christian Relations in Nigeria",
                            "ISS 406: Islamic Contribution to Science, Medicine & Civilization",
                            "ISS 490: Final Year Undergraduate Research Thesis Project & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Linguistics": {
        degree: "B.A. Linguistics",
        levels: [
            {
                level: "100 Level (Foundations of Language Science & General Linguistics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIN 101: Introduction to Linguistics I (Scope, Nature & Human Language vs. Animal Communication)",
                            "LIN 103: Practical Phonetics & Sound Production Mechanics",
                            "LIN 105: Language and Culture in Africa",
                            "ENG 101: Spoken English & Oral Communication",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIN 102: Introduction to Linguistics II (Morphology, Syntax & Semantics Overview)",
                            "LIN 104: Orthography, Writing Systems & Language Standardization",
                            "LIN 106: Linguistic Geography & African Language Families (Niger-Congo, Afroasiatic, Nilo-Saharan, Khoisan)",
                            "ENG 104: English Grammar & Composition",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Formal Linguistics, Structural Analysis & Sociolinguistics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIN 201: Phonetics: Articulatory, Acoustic & Auditory Analysis",
                            "LIN 203: Morphology: Word Formation, Affixation & Inflectional Systems",
                            "LIN 205: Syntax I: Phrase Structure, Word Classes & Sentence Mechanics",
                            "LIN 207: Sociolinguistics: Language Variation, Dialects & Social Factors",
                            "LIN 209: Language in Nigeria: Multilingualism, Pidgin & Minority Languages",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIN 202: Phonology I: Phonemic Analysis, Features & Phonological Rules",
                            "LIN 204: Semantics I: Lexical Meaning, Sense Relations & Propositional Logic",
                            "LIN 206: Historical & Comparative Linguistics: Language Change & Reconstruction",
                            "LIN 208: Language Typology & Universals",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Formal Theories, Field Methods, Media & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIN 301: Syntax II: Transformational & Generative Grammar Frameworks",
                            "LIN 303: Phonology II: Non-Linear & Generative Phonological Theories",
                            "LIN 305: Pragmatics: Speech Acts, Implicature, Context & Discourse",
                            "LIN 307: Field Methods in Linguistics & Indigenous Language Documentation",
                            "LIN 309: Research Methodology in Linguistics & Empirical Data Analysis",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIN 302: Lexicography: Dictionary Making & Vocabulary Engineering",
                            "LIN 304: SIWES / Practical Field Attachment (6 Months Attachment at Publishing Houses, Language Resource Centers, Media Agencies, Tech Localization Hubs, or Educational Institutions)",
                            "LIN 306: SIWES Technical Logbook Evaluation, Fieldwork Reports & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Applied Linguistics, NLP, Language Policy & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "LIN 401: Psycholinguistics: Cognitive Processing, Language Storage & Brain Function",
                            "LIN 403: Applied Linguistics: Second Language Acquisition (SLA) & Language Teaching Methods",
                            "LIN 405: Language Planning, Mother-Tongue Policy & Education in Nigeria",
                            "LIN 407: Clinical Linguistics & Language Pathologies (Speech Disorders & Aphasia)",
                            "LIN 409: Stylistics & Textual Analysis of Oral/Written Discourse"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "LIN 402: Computational Linguistics, Natural Language Processing (NLP) & Localization for African Languages",
                            "LIN 404: Forensic Linguistics: Language, Law & Evidence Analysis",
                            "LIN 406: Language, Gender, Identity & Ideology",
                            "LIN 490: Final Year Undergraduate Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Music": {
        degree: "B.A. Music",
        levels: [
            {
                level: "100 Level (Foundations in Music Theory, Performance & Sight Reading)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MUS 101: Foundation of Music Theory & Rudiments I (Pitch, Scales, Keys & Intervals)",
                            "MUS 103: Sight Singing, Ear Training & Aural Perception I",
                            "MUS 105: Practical Applied Music I (Principal Instrument / Voice Performance)",
                            "MUS 107: History & Appreciation of Music I (Ancient to Baroque Era)",
                            "MUS 109: Introduction to African Music & Dance Culture",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MUS 102: Foundation of Music Theory & Rudiments II (Chords, Cadences & Basic Harmony)",
                            "MUS 104: Sight Singing, Ear Training & Aural Perception II",
                            "MUS 106: Practical Applied Music II (Subsidiary Instrument / Ensemble)",
                            "MUS 108: History & Appreciation of Music II (Classical & Romantic Eras)",
                            "MUS 110: Keyboard Skills & Sight Reading",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Tonal Harmony, African Musicology, Technology & Ensemble)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MUS 201: Diatonic Harmony & Counterpoint I (4-Part Writing & Voice Leading)",
                            "MUS 203: Form & Structural Analysis in Music (Binary, Ternary, Rondo, Sonata)",
                            "MUS 205: African Ethnomusicology I: Instruments, Scales & Rhythmic Systems",
                            "MUS 207: Intermediate Practical Applied Music III (Solo Recital Preparation)",
                            "MUS 209: Introduction to Music Technology & Digital Audio Workstations (DAWs)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MUS 202: Diatonic Harmony & Counterpoint II",
                            "MUS 204: History of Modern & Contemporary Western Music (20th Century to Present)",
                            "MUS 206: Choral Conducting, Voice Building & Ensemble Management",
                            "MUS 208: Intermediate Practical Applied Music IV",
                            "MUS 210: Orchestration, Instrumentation & Band Arrangement",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Composition, Sound Engineering, Business & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MUS 301: Chromatic Harmony, Counterpoint & Advanced Fugue",
                            "MUS 303: African Ethnomusicology II: Fieldwork Methods & Organology",
                            "MUS 305: Sound Engineering, Music Production, Mixing & Mastering",
                            "MUS 307: Music Business, Intellectual Property Rights & Copyright Law in Nigeria",
                            "MUS 309: Research Methodology in Music & Ethnomusicology",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MUS 302: Practical Departmental Ensemble Concert & Composition Workshop",
                            "MUS 304: SIWES / Practical Attachment (6 Months Attachment at Recording Studios, Broadcasting Stations, Film Scoring Hubs, Performing Arts Troupes, or Music Schools)",
                            "MUS 306: SIWES Technical Logbook Evaluation, Audio/Video Portfolio & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Performance, Film Scoring, Production & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MUS 401: Advanced Compositional Techniques (Atonality, Serialism & Electroacoustic)",
                            "MUS 403: Film Scoring, Game Audio & Media Composition",
                            "MUS 405: African Music Composition & Popular Music Analysis (Afrobeats, Highlife, Juju, Fuji)",
                            "MUS 407: Music Therapy, Psychology & Education",
                            "MUS 409: Executive Music Industry Management, Event Production & Marketing"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MUS 402: Final Year Solo Recital / Senior Performance Showcase (Jury Examination)",
                            "MUS 404: Final Composition Portfolio Defense (Original Works / Orchestral Scores)",
                            "MUS 406: Comparative Musicology & World Music Cultures",
                            "MUS 490: Final Year Research Thesis Dissertation & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Performing Arts / Film Studies": {
        degree: "B.A. Performing Arts / Film Studies",
        levels: [
            {
                level: "100 Level (Foundations in Performance, Cinema & Creative Arts)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PFS 101: Introduction to Performing Arts & Film Studies",
                            "PFS 103: History of World Cinema & Moving Image",
                            "PFS 105: Fundamentals of Acting: Voice, Body & Movement I",
                            "PFS 107: Introduction to Screenwriting & Narrative Structure",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PFS 102: African Cinema & Indigenous Performance Traditions",
                            "PFS 104: Elements of Film Language & Shot Composition",
                            "PFS 106: Stage Movement, Dance & Kinesiology",
                            "PFS 108: Technical Theatre, Lighting & Scenography Basics",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Film Production, Directing, Cinematography & African Screen)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PFS 201: Film Directing I: Script Breakdown, Staging & Blocking",
                            "PFS 203: Principles of Cinematography, Lighting & Camera Operations",
                            "PFS 205: Screen Acting Techniques (Camera vs. Stage Performance)",
                            "PFS 207: History & Evolution of Nollywood & African Screen Media",
                            "PFS 209: Audio Engineering, Sound Design & Scoring for Film",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PFS 202: Film Directing II: Working with Actors & On-Set Operations",
                            "PFS 204: Non-Linear Video Editing & Post-Production Workflows",
                            "PFS 206: Advanced Screenwriting: Short Films, Features & Series",
                            "PFS 208: Costume, Makeup, Prosthetics & Wardrobe Management",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Specialization, Media Economics, Production & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PFS 301: Advanced Cinematography & Digital Color Grading",
                            "PFS 303: Documentary Film Production & Non-Fiction Storytelling",
                            "PFS 305: Film Business, Monetization, Distribution & Streaming Platforms (Nollywood, VOD & Global Sales)",
                            "PFS 307: Community Theatre & Media for Social Change",
                            "PFS 309: Research Methodology in Performing Arts & Film Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PFS 302: Practical Departmental Film Production / Major Stage Production",
                            "PFS 304: SIWES / Practical Attachment (6 Months Attachment in Nollywood Studios, Post-Production Houses, TV Stations, Advertising Agencies, or Media Hubs)",
                            "PFS 306: SIWES Technical Logbook Evaluation, Portfolio Review & Seminar Defense",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Specialization, Creative Thesis & Film Defense)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PFS 401: Film Theory & Film Criticism (Auteur, Genre, Post-Colonial & Feminist Approaches)",
                            "PFS 403: VFX, Digital Compositing & Motion Graphics",
                            "PFS 405: Creative Industry Entrepreneurship, Event & Festival Management",
                            "PFS 407: Advanced Specialization Workshop I (Directing / Acting / Cinematography / Screenwriting)",
                            "PFS 409: Contemporary African Performing Arts & Global Screen Dynamics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PFS 402: Executive Film Producing, Legal Contracts & Intellectual Property Rights",
                            "PFS 404: Final Graduation Film Project / Major Stage Directing Defense",
                            "PFS 406: Digital Media, Mobile Cinema & Web Series Production",
                            "PFS 490: Final Year Undergraduate Research Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Philosophy": {
        degree: "B.A. Philosophy",
        levels: [
            {
                level: "100 Level (Foundations in Logic, Ethics & Historical Philosophy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHI 101: Introduction to Philosophy I (Scope, Branches & Methods)",
                            "PHI 103: Introduction to Logic I (Arguments, Deduction & Induction)",
                            "PHI 105: Ancient Western Philosophy (Presocratics, Socrates, Plato & Aristotle)",
                            "PHI 107: Introduction to African Philosophy & Worldviews",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHI 102: Introduction to Philosophy II (Problems of Mind, Knowledge & Existence)",
                            "PHI 104: Introduction to Ethics & Moral Philosophy",
                            "PHI 106: Medieval Western & Islamic Philosophy (Augustine, Aquinas, Ibn Sina, Ibn Rushd)",
                            "PHI 108: Critical Thinking, Informal Fallacies & Problem Solving",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Symbolic Logic, Epistemology, Metaphysics & Political Thought)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHI 201: Symbolic Logic I (Propositional Logic & Truth Tables)",
                            "PHI 203: Epistemology I: Theory of Knowledge (Skepticism, Justification & Perception)",
                            "PHI 205: Metaphysics I: Core Problems (Being, Substance, Causality & Time)",
                            "PHI 207: Modern Western Philosophy (Rationalism & Empiricism: Descartes to Kant)",
                            "PHI 209: Social and Political Philosophy I (State of Nature, Justice & Authority)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHI 202: Symbolic Logic II (Predicate Logic & Formal Proofs)",
                            "PHI 204: Professional & Applied Ethics (Bioethics, Environmental & Tech Ethics)",
                            "PHI 206: African Philosophy II: Trends, Sage Philosophy & Ethnophilosophy",
                            "PHI 208: Philosophy of Mind & Consciousness",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Philosophy of Science, Language, Religion & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHI 301: Philosophy of Science (Scientific Method, Falsification & Paradigms)",
                            "PHI 303: Philosophy of Language (Meaning, Reference & Truth)",
                            "PHI 305: Contemporary Western Philosophy (Existentialism, Phenomenology & Pragmatism)",
                            "PHI 307: Philosophy of Religion (Arguments for God, Problem of Evil & Faith)",
                            "PHI 309: Research Methodology in Philosophy",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHI 302: Hermeneutics & Philosophical Analysis",
                            "PHI 304: SIWES / Practical Attachment (6 Months Attachment in Legal Firms, Policy Think Tanks, Ethics Boards, Media Houses, or Public Sector Agencies)",
                            "PHI 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Theoretical Philosophy, Legal Thought & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHI 401: Advanced Epistemology & Metaphysics",
                            "PHI 403: Contemporary African Philosophy & Post-Colonial Discourse",
                            "PHI 405: Philosophy of Law / Jurisprudence (Natural Law, Positivism & Legal Rights)",
                            "PHI 407: Philosophy of Social Sciences & Historical Methodology",
                            "PHI 409: Marxism, Critical Theory & Post-Modernism"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHI 402: Philosophy of Development, Technology & Artificial Intelligence",
                            "PHI 404: Comparative Philosophy (Eastern, Western & African Traditions)",
                            "PHI 406: Seminars in Major Philosophers (In-Depth Analysis of Selected Thinkers)",
                            "PHI 490: Final Year Research Dissertation / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Religious Studies": {
        degree: "B.A. Religious Studies",
        levels: [
            {
                level: "100 Level (Foundations of Religion, ATR & World Religions)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RST 101: Introduction to the Study of Religion (Definitions, Scope & Approaches)",
                            "RST 103: Phenomenological & Sociological Approaches to Religion",
                            "RST 105: Introduction to African Traditional Religion (ATR) & Worldview",
                            "RST 107: Survey of the Old Testament / Hebrew Bible",
                            "HIS 101: African Civilizations & Cultural History",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RST 102: Survey of the New Testament & Early Christian History",
                            "RST 104: Introduction to Islamic History, Beliefs & Practices",
                            "RST 106: Religion, Culture & Human Values",
                            "RST 108: Elementary Arabic / Greek / Hebrew for Religious Studies",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Comparative Religion, Hermeneutics, Ethics & History)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RST 201: Comparative Religion I: Eastern Traditions (Hinduism, Buddhism & Taoism)",
                            "RST 203: Psychology of Religion & Spiritual Experience",
                            "RST 205: History of Christianity in Nigeria & West Africa",
                            "RST 207: History of Islam in Nigeria & West Africa",
                            "RST 209: ATR: Myths, Rituals, Symbols & Deities",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RST 202: Sociology of Religion (Religion, Power & Social Structures)",
                            "RST 204: Religious Hermeneutics & Textual Interpretation Methods",
                            "RST 206: Social & Medical Ethics in Religious Perspectives",
                            "RST 208: Religion, Politics & State Governance in Nigeria",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Inter-Faith Relations, Peacebuilding, Research & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RST 301: Philosophy of Religion (Epistemology, Problem of Evil & Faith)",
                            "RST 303: Comparative Religion II: Abrahamic Monotheisms (Judaism, Christianity, Islam)",
                            "RST 305: Religion, Gender & Women's Experience in Africa",
                            "RST 307: New Religious Movements (NRMs) & Pentecostalism in Africa",
                            "RST 309: Research Methodology in Religious Studies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RST 302: Religion, Peacebuilding & Conflict Resolution Strategies",
                            "RST 304: SIWES / Practical Attachment (6 Months Field Attachment at Peace & Reconciliation NGOs, Social Welfare Foundations, Inter-Faith Councils, or Educational Research Hubs)",
                            "RST 306: SIWES Technical Logbook Evaluation, Field Reports & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Comparative Studies, Global Movements & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "RST 401: Ecumenism, Inter-Religious Dialogue & Muslim-Christian Relations",
                            "RST 403: African Traditional Religion in the Diaspora (Caribbean, Latin America & US)",
                            "RST 405: Religion, Globalization & Digital Culture",
                            "RST 407: Religion, Human Rights & International Law",
                            "RST 409: Modern Religious Movements & Fundamentalism"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "RST 402: Contemporary Ethical Issues (Bioethics, Climate Change, Tech Ethics & Governance)",
                            "RST 404: Religion, Economic Development & Poverty Alleviation in Africa",
                            "RST 406: Seminars in Religion & Contemporary Society",
                            "RST 490: Final Year Undergraduate Research Thesis & Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Translation & Interpretation Studies": {
        degree: "B.A. Translation & Interpretation Studies",
        levels: [
            {
                level: "100 Level (Foundations in Linguistics, Grammar & Language Proficiency)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TIS 101: Introduction to Translation & Interpretation Studies",
                            "TIS 103: Language Structure & Comparative Grammar I (Source & Target Languages)",
                            "TIS 105: Practical Phonetics & Pronunciation for Interpreters",
                            "LIN 101: Introduction to General Linguistics",
                            "ENG 101: Spoken English & Advanced Composition",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TIS 102: Theory of Translation: Principles & Approaches",
                            "TIS 104: Language Structure & Comparative Grammar II",
                            "TIS 106: Textual Comprehension, Summary & Vocabulary Building",
                            "TIS 108: History of Translation & Cultural Exchange",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Translation Techniques, Sight Translation & Contrastive Analysis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TIS 201: Translation Methods & Techniques (Direct, Oblique & Transposition)",
                            "TIS 203: Contrastive Linguistics & Stylistics",
                            "TIS 205: Introduction to Sight Translation & Note-Taking Techniques",
                            "TIS 207: Lexicography, Terminology & Glossary Building",
                            "LIN 201: Phonetics & Phonology",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TIS 202: General Text Translation (Literary, Media & Academic Texts)",
                            "TIS 204: Introduction to Consecutive Interpretation",
                            "TIS 206: Sociolinguistics & Cross-Cultural Communication",
                            "TIS 208: Language for Specific Purposes (LSP): Commercial & Business French/Arabic/German/English",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (CAT Tools, Specialized Translation, Booth Practice & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TIS 301: Computer-Assisted Translation (CAT) Tools & Translation Memory (SDL Trados, MemoQ)",
                            "TIS 303: Specialized Translation I: Legal, Medical & Economic Translation",
                            "TIS 305: Consecutive Interpretation Workshop (Diplomatic & Conference Settings)",
                            "TIS 307: Introduction to Simultaneous Interpretation & Booth Practice",
                            "TIS 309: Research Methodology in Translation & Interpretation",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TIS 302: Subtitling, Dubbing & Audiovisual Translation (AVT)",
                            "TIS 304: SIWES / Practical Field Attachment (6 Months Attachment at International Organizations like AU/ECOWAS/UN, Foreign Embassies, Translation Agencies, or Media Houses)",
                            "TIS 306: SIWES Logbook Evaluation, Portfolio Review & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Simultaneous Interpretation, Localization, AI Tools & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TIS 401: Advanced Simultaneous Interpretation (Conference Booth Practice)",
                            "TIS 402: Specialized Translation II: Technical, Scientific & Software Localization",
                            "TIS 403: Machine Translation, AI Translation Models & Post-Editing (MTPE)",
                            "TIS 405: Ethics, Deontology & Professional Practice of Translators & Interpreters",
                            "TIS 407: Community, Court & Medical Interpreting"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TIS 404: Literary Translation & Creative Adaptation",
                            "TIS 406: Business Management, Freelancing & Agency Operations for Translators",
                            "TIS 408: Practical Exit Defense: Simultaneous Booth & Translation Portfolio",
                            "TIS 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== BASIC MEDICAL SCIENCES =====
    "Human Anatomy": {
        degree: "B.Sc. Human Anatomy",
        levels: [
            {
                level: "100 Level (Pre-Medical Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BIO 101: General Biology I (Cell Biology & Genetics)",
                            "CHM 101: General Chemistry I (Inorganic & Physical Chemistry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "MAT 101: General Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "GST 113: Nigerian Peoples and Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BIO 102: General Biology II (Organismal Biology & Ecology)",
                            "CHM 102: General Chemistry II (Organic & Analytical Chemistry)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "GST 112: Philosophy, Logic, and Human Existence",
                            "AMS 102: Introduction to Computing & Information Technology"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Systemic Anatomy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 201: Gross Anatomy I: Upper Limb, Lower Limb & Thorax",
                            "ANA 203: General Histology & Tissue Biology",
                            "ANA 205: General Embryology & Teratology",
                            "PIO 201: General Human Physiology I (Blood, Excitable Tissues & CVS)",
                            "BCH 201: General Biochemistry I (Biomolecules & Enzymology)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 202: Gross Anatomy II: Abdomen, Pelvis & Perineum",
                            "ANA 204: Systemic Histology (Organ Systems)",
                            "ANA 206: Systemic Embryology & Organogenesis",
                            "PIO 202: General Human Physiology II (Respiration, Renal & GI Systems)",
                            "BCH 202: General Biochemistry II (Metabolism & Energetics)",
                            "STA 202: Biostatistics for Health Sciences"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Anatomy, Neuroanatomy & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 301: Gross Anatomy III: Head and Neck",
                            "ANA 303: Neuroanatomy (Central & Peripheral Nervous Systems)",
                            "ANA 305: Histochemistry & Cytochemistry Techniques",
                            "ANA 307: Radiological & Imaging Anatomy (X-Ray, CT, MRI, Ultrasound)",
                            "ANA 309: Research Methodology in Basic Medical Sciences",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 302: Practical Cadaveric Dissection & Museum Preparation Techniques",
                            "ANA 304: SIWES / Industrial Training (6 Months Attachment in Teaching Hospitals, Diagnostic Centers, Histopathology Labs, Mortuaries, or Research Hubs)",
                            "ANA 306: SIWES Technical Logbook Evaluation, Laboratory Reports & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Specialized Anatomy, Physical Anthropology & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ANA 401: Physical Anthropology, Comparative Anatomy & Forensic Anatomy",
                            "ANA 403: Advanced Neurobiology & Clinical Neuroanatomy",
                            "ANA 405: Electron Microscopy, Modern Histological Techniques & Microtomy",
                            "ANA 407: Clinical & Applied Anatomy (Surgical & Surface Anatomy)",
                            "ANA 409: Molecular Biology, Genetics & Cytogenetics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ANA 402: Developmental & Reproductive Biology",
                            "ANA 404: Mortuary Technology, Embalming Techniques & Forensic Histology",
                            "ANA 406: Laboratory Management, Bioethics & Safety Standards",
                            "ANA 490: Final Year Undergraduate Research Thesis & Practical Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Human Physiology": {
        degree: "B.Sc. Human Physiology",
        levels: [
            {
                level: "100 Level (Pre-Medical Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BIO 101: General Biology I (Cell Biology & Genetics)",
                            "CHM 101: General Chemistry I (Inorganic & Physical Chemistry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "MAT 101: General Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "GST 113: Nigerian Peoples and Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BIO 102: General Biology II (Organismal Biology & Ecology)",
                            "CHM 102: General Chemistry II (Organic & Analytical Chemistry)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "GST 112: Philosophy, Logic, and Human Existence",
                            "AMS 102: Introduction to Computing & Information Technology"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Systemic Physiology)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PIO 201: General Physiology, Cell Physiology & Excitable Tissues",
                            "PIO 203: Blood, Body Fluids & Cardiovascular Physiology",
                            "ANA 201: Gross Anatomy I (Limbs, Thorax & General Histology)",
                            "BCH 201: General Biochemistry I (Biomolecules & Enzymology)",
                            "STA 201: Biostatistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PIO 202: Respiratory Physiology & Renal Physiology",
                            "PIO 204: Gastrointestinal Physiology & Nutrition",
                            "ANA 202: Gross Anatomy II (Abdomen, Pelvis & Histology)",
                            "BCH 202: General Biochemistry II (Metabolism & Energetics)",
                            "PIO 206: Biophysics & Physiological Instrumentation",
                            "GST 212: Nigerian Peoples and Culture II"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Advanced Physiology, Neurophysiology & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PIO 301: Neurophysiology (Central, Peripheral & Autonomic Nervous Systems)",
                            "PIO 303: Endocrinological Physiology & Metabolic Homeostasis",
                            "PIO 305: Reproductive Physiology & Developmental Biology",
                            "PIO 307: Special Senses (Vision, Hearing, Gustation, Olfaction)",
                            "PIO 309: Research Methodology & Experimental Design in Physiology",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PIO 302: Practical Physiological Techniques & Laboratory Diagnostics",
                            "PIO 304: SIWES / Industrial Training (6 Months Attachment in Teaching Hospitals, Diagnostic Centers, Medical Research Institutes, or Fitness/Sports Science Labs)",
                            "PIO 306: SIWES Technical Logbook Evaluation, Experimental Reports & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Specialized & Environmental Physiology, Pathophysiology & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PIO 401: Pathophysiology & Applied Clinical Physiology",
                            "PIO 403: Environmental, Exercise & Sports Physiology",
                            "PIO 405: Aviation, Space & Underwater Physiology",
                            "PIO 407: Comparative & Evolutionary Physiology",
                            "PIO 409: Molecular Biology, Genetics & Cellular Signaling Pathways"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PIO 402: Chronobiology, Psychophysiology & Behavioral Neuroscience",
                            "PIO 404: Neuropharmacology & Autonomic Regulation",
                            "PIO 406: Bioethics, Laboratory Safety & Medical Equipment Calibration",
                            "PIO 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Medical Biochemistry": {
        degree: "B.Sc. Medical Biochemistry",
        levels: [
            {
                level: "100 Level (Pre-Medical Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BIO 101: General Biology I (Cell Biology & Genetics)",
                            "CHM 101: General Chemistry I (Inorganic & Physical Chemistry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "MAT 101: General Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "GST 113: Nigerian Peoples and Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BIO 102: General Biology II (Organismal Biology & Ecology)",
                            "CHM 102: General Chemistry II (Organic & Analytical Chemistry)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "GST 112: Philosophy, Logic, and Human Existence",
                            "AMS 102: Introduction to Computing & Information Technology"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Core Biochemistry & Basic Medical Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BCH 201: General Biochemistry I (Chemistry of Biomolecules: Proteins, Lipids, Nucleic Acids & Carbohydrates)",
                            "BCH 203: Bioenergetics & Thermodynamics",
                            "ANA 201: Gross Anatomy I (General Anatomy & Histology)",
                            "PIO 201: General Human Physiology I (Cell, Blood & Excitable Tissues)",
                            "CHM 211: Physical & Organic Chemistry for Life Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BCH 202: General Biochemistry II (Metabolism of Carbohydrates & Lipids)",
                            "BCH 204: Enzymology & Enzyme Kinetics",
                            "BCH 206: Biochemical Methods & Analytical Techniques I",
                            "ANA 202: Gross Anatomy II (Abdomen, Pelvis & Systemic Histology)",
                            "PIO 202: General Human Physiology II (CVS, Renal & GI Systems)",
                            "STA 202: Biostatistics for Health Sciences"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Clinical Biochemistry, Molecular Biology & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MBC 301: Clinical Biochemistry I (Metabolic Disorders, Liver & Kidney Function Tests)",
                            "MBC 303: Metabolism of Amino Acids, Nucleotides & Inborn Errors of Metabolism",
                            "MBC 305: Molecular Biology I (DNA Replication, Transcription, Translation & Gene Expression)",
                            "MBC 307: Biochemical Instrumentation & Spectrophotometry",
                            "MBC 309: Research Methodology & Experimental Design in Medical Biochemistry",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MBC 302: Practical Medical Biochemistry & Diagnostic Laboratory Procedures",
                            "MBC 304: SIWES / Industrial Training (6 Months Attachment in Diagnostic Hospitals, Clinical Reference Labs, Pharmaceutical Companies, or Research Institutes)",
                            "MBC 306: SIWES Logbook Evaluation, Laboratory Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Clinical Biochemistry, Molecular Diagnostics & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MBC 401: Advanced Clinical Biochemistry (Endocrine Functions, Tumor Markers & Disease Diagnostics)",
                            "MBC 403: Molecular Diagnostics, Recombinant DNA Technology & Genomics",
                            "MBC 405: Biochemical Toxicology, Xenobiotics & Drug Metabolism",
                            "MBC 407: Immunology & Immunochemistry",
                            "MBC 409: Neurochemistry & Biochemical Endocrinology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MBC 402: Nutritional Biochemistry & Food Toxicology",
                            "MBC 404: Pharmacology, Natural Products & Drug Discovery",
                            "MBC 406: Bioethics, Laboratory Management & Quality Assurance",
                            "MBC 490: Final Year Undergraduate Research Thesis & Oral Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Pharmacology & Therapeutics": {
        degree: "B.Sc. Pharmacology & Therapeutics",
        levels: [
            {
                level: "100 Level (Pre-Medical Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BIO 101: General Biology I (Cell Biology & Genetics)",
                            "CHM 101: General Chemistry I (Inorganic & Physical Chemistry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "MAT 101: General Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "GST 113: Nigerian Peoples and Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BIO 102: General Biology II (Organismal Biology & Ecology)",
                            "CHM 102: General Chemistry II (Organic & Analytical Chemistry)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "GST 112: Philosophy, Logic, and Human Existence",
                            "AMS 102: Introduction to Computing & Information Technology"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Basic Medical Sciences & Introductory Pharmacology)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHA 201: General Principles of Pharmacology & Pharmacokinetics",
                            "ANA 201: Gross Anatomy I (General Anatomy & Histology)",
                            "PIO 201: General Human Physiology I (Cell, Blood & Excitable Tissues)",
                            "BCH 201: General Biochemistry I (Biomolecules & Enzymology)",
                            "STA 201: Biostatistics for Health Sciences",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHA 202: Autonomic & Peripheral Nervous System Pharmacology",
                            "PHA 204: Pharmacodynamics & Receptor Theory",
                            "ANA 202: Gross Anatomy II (Abdomen, Pelvis & Systemic Histology)",
                            "PIO 202: General Human Physiology II (CVS, Renal & GI Systems)",
                            "BCH 202: General Biochemistry II (Metabolism & Energetics)",
                            "GST 212: Nigerian Peoples and Culture II"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Systemic Pharmacology, Bioassays & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHA 301: Cardiovascular & Renal Pharmacology",
                            "PHA 303: Central Nervous System & Neuropharmacology",
                            "PHA 305: Endocrine & Reproductive Pharmacology",
                            "PHA 307: Gastrointestinal & Respiratory Pharmacology",
                            "PHA 309: Research Methodology & Experimental Bioassays",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHA 302: Practical Pharmacological Screening & Bioassay Techniques",
                            "PHA 304: SIWES / Industrial Training (6 Months Attachment in Pharmaceutical Manufacturing, Clinical Trial Units, NFDAC/SON, Teaching Hospitals, or Diagnostic Labs)",
                            "PHA 306: SIWES Technical Logbook Evaluation, Experimental Reports & Departmental Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Chemotherapy, Toxicology, Clinical Therapeutics & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PHA 401: Chemotherapy I: Antimicrobial, Antifungal & Antiviral Agents",
                            "PHA 403: Chemotherapy II: Cancer Chemotherapy & Immunopharmacology",
                            "PHA 405: Toxicology, Xenobiotics & Environmental Health",
                            "PHA 407: Clinical Pharmacology & Rational Therapeutics",
                            "PHA 409: Molecular Pharmacology & Pharmacogenomics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PHA 402: Drug Discovery, Design & Development",
                            "PHA 404: Ethnopharmacology & Phytomedicine Development",
                            "PHA 406: Pharmacovigilance, Regulatory Affairs & Bioethics",
                            "PHA 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Human Nutrition & Environmental Health": {
        degree: "B.Sc. Human Nutrition & Environmental Health",
        levels: [
            {
                level: "100 Level (Pre-Medical & Environmental Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BIO 101: General Biology I (Cell Biology & Genetics)",
                            "CHM 101: General Chemistry I (Inorganic & Physical Chemistry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "MAT 101: General Mathematics I (Algebra & Trigonometry)",
                            "GST 111: Communication in English Language",
                            "GST 113: Nigerian Peoples and Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BIO 102: General Biology II (Organismal Biology & Ecology)",
                            "CHM 102: General Chemistry II (Organic & Analytical Chemistry)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Optics)",
                            "GST 112: Philosophy, Logic, and Human Existence",
                            "AMS 102: Introduction to Computing & Information Technology"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Nutritional Biochemistry, Physiology & Environmental Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HNE 201: Fundamentals of Human Nutrition & Food Science",
                            "HNE 203: Introduction to Environmental Health & Ecology",
                            "ANA 201: Basic Human Anatomy (Systemic & Histology)",
                            "PIO 201: General Human Physiology I (Cell, Blood & Circulation)",
                            "BCH 201: General Biochemistry I (Biomolecules & Enzymology)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HNE 202: Nutritional Biochemistry & Metabolism",
                            "HNE 204: Environmental Sanitation, Hygiene & Housing Standards",
                            "HNE 206: Human Anatomy & Physiology II (GI, Renal & Endocrine Systems)",
                            "BCH 202: General Biochemistry II (Metabolic Pathways)",
                            "STA 202: Biostatistics for Health Sciences",
                            "GST 212: Nigerian Peoples and Culture II"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Clinical Nutrition, Food Safety, Assessment & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HNE 301: Nutritional Assessment Techniques (Anthropometry, Biochemical & Clinical)",
                            "HNE 303: Food Safety, Hygiene, Inspection & Quality Assurance (HACCP)",
                            "HNE 305: Clinical Nutrition & Dietetics I (Nutritional Therapy in Disease)",
                            "HNE 307: Water Quality, Wastewater Treatment & Vector Control",
                            "HNE 309: Research Methodology in Public Health & Epidemiology",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HNE 302: Practical Laboratory Analysis of Foods & Water",
                            "HNE 304: SIWES / Industrial Training (6 Months Attachment in Tertiary Teaching Hospitals, Public Health Agencies, NAFDAC, SON, Environmental Protection Agencies, or Food Processing Industries)",
                            "HNE 306: SIWES Technical Logbook Evaluation, Field Assessment & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Community Health, Toxicology, Environmental Policy & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "HNE 401: Community Nutrition, Food Security & Public Health Interventions",
                            "HNE 402: Environmental Toxicology, Air Pollution & Industrial Hygiene",
                            "HNE 403: Clinical Nutrition & Dietetics II (Metabolic & Chronic Diseases)",
                            "HNE 405: Disaster Management, Emergency Nutrition & Climate Change",
                            "HNE 407: Environmental Impact Assessment (EIA) & Health Safety Policy"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "HNE 404: Maternal, Infant & Child Nutrition",
                            "HNE 406: Food Processing, Preservation & Biotechnology",
                            "HNE 408: Health Economics, Bioethics & Public Health Legislation",
                            "HNE 490: Final Year Undergraduate Research Thesis & Oral Defense"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== COMMUNICATION & MEDIA STUDIES =====
    "Advertising": {
        degree: "B.Sc. Advertising",
        levels: [
            {
                level: "100 Level (Foundations in Mass Communication & Advertising)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ADV 101: Introduction to Advertising & Brand Communication",
                            "ADV 103: Introduction to Mass Communication & Media Systems",
                            "ADV 105: History & Evolution of Advertising in Nigeria & Globally",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ADV 102: Principles of Marketing Communications",
                            "ADV 104: Basic Copywriting & Creative Writing",
                            "ADV 106: Visual Communication & Basic Graphic Design",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Consumer Behavior, Media Planning & Creative Production)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ADV 201: Consumer Behavior & Audience Psychology",
                            "ADV 203: Advertising Copywriting & Scriptwriting (TV, Radio, Print & Digital)",
                            "ADV 205: Media Planning, Strategy & Buying",
                            "ADV 207: Creative Art Direction, Typography & Layout",
                            "ADV 209: Public Relations & Corporate Communication",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ADV 202: Commercial Radio & Television Advertising Production",
                            "ADV 204: Advertising Agency Management & Account Planning",
                            "ADV 206: Brand Management & Strategic Product Positioning",
                            "ADV 208: Photography & Video Production for Advertising",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Digital Advertising, Research & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ADV 301: Digital Advertising, Social Media Marketing & SEO/SEM",
                            "ADV 303: Advertising Research Methodology & Data Analytics",
                            "ADV 305: Integrated Marketing Communications (IMC) Strategies",
                            "ADV 307: Advertising Law, Ethics & Regulatory Bodies (ARCON, APCON, NBC)",
                            "ADV 309: Political Advertising, Public Diplomacy & Advocacy Campaigns",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ADV 302: Practical Campaign Development & Pitch Presentation Workshop",
                            "ADV 304: SIWES / Practical Attachment (6 Months Attachment at Advertising Agencies, Media Buying Houses, Corporate Brand Marketing Departments, or Digital Agencies)",
                            "ADV 306: SIWES Logbook Evaluation, Portfolio Defense & Seminar Presentation",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy, Global Branding & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ADV 401: Strategic Brand Building & Equity Management",
                            "ADV 403: Global & Cross-Cultural Advertising Strategies",
                            "ADV 405: Programmatic Advertising, AdTech & Performance Marketing",
                            "ADV 407: Event Management, Sponsorship & Activation Strategies",
                            "ADV 409: Contemporary Issues in Advertising & Consumer Culture"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ADV 402: Financial Management & Entrepreneurship in Ad Agencies",
                            "ADV 404: Crisis Communication & Reputation Management",
                            "ADV 406: Final Year Creative Campaign Exhibition & Jury Defense",
                            "ADV 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Broadcasting": {
        degree: "B.Sc. Broadcasting",
        levels: [
            {
                level: "100 Level (Foundations in Communication & Mass Media)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BRC 101: Introduction to Broadcasting (Radio & Television Systems)",
                            "BRC 103: Introduction to Mass Communication",
                            "BRC 105: History & Evolution of Broadcasting in Nigeria & Internationally",
                            "BRC 107: Voice & Diction for Broadcasters",
                            "SOC 101: Introduction to Sociology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BRC 102: Writing for Radio & Television",
                            "BRC 104: Announcing & Broadcast Presentation Techniques",
                            "BRC 106: Basic Acoustics & Sound Production Mechanics",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Radio & TV Production, Technical Operations & Editing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BRC 201: Radio Production Processes & Studio Engineering",
                            "BRC 203: Television Production Processes & Studio Directing",
                            "BRC 205: Broadcast News Writing, Reporting & Editing",
                            "BRC 207: Camera Operations, Lighting & Visual Composition",
                            "BRC 209: Audio Editing & Multi-Track Sound Engineering",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BRC 202: Non-Linear Video Editing & Post-Production Workflows",
                            "BRC 204: Documentary & Special Program Production (Radio & TV)",
                            "BRC 206: Broadcast Station Operations, Programming & Scheduling",
                            "BRC 208: Interviewing & Discussion Program Production",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Digital Broadcasting, Podcasting, Law & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BRC 301: Digital Broadcasting, Podcasting & Web Streaming Technologies",
                            "BRC 303: Broadcast Investigative Journalism & Field Reporting",
                            "BRC 305: Broadcast Law, Ethics & Regulatory Agencies (NBC Code)",
                            "BRC 307: Media Economics, Commercials & Broadcast Sales",
                            "BRC 309: Research Methodology in Mass Communication & Broadcasting",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BRC 302: Campus Radio/TV Station Practical Workshop & Transmission",
                            "BRC 304: SIWES / Practical Field Attachment (6 Months Attachment at Radio/TV Stations, Production Houses, Streaming Hubs, or Media Agencies)",
                            "BRC 306: SIWES Technical Logbook Evaluation, Portfolio Defense & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Directing, Station Management & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "BRC 401: Advanced Radio Production & Sound Design",
                            "BRC 403: Advanced TV Directing & Live Broadcast Coverage",
                            "BRC 405: Broadcast Station Management, Leadership & Policy Formulation",
                            "BRC 407: Comparative Broadcasting Systems & International Media Dynamics",
                            "BRC 409: Contemporary Issues in Mass Media & Digital Disruption"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "BRC 402: Drama Production & Creative Performance for Broadcast Media",
                            "BRC 404: Broadcast Audience Measurement, Analytics & Ratings",
                            "BRC 406: Final Graduation Broadcast Production Portfolio Exhibition & Defense",
                            "BRC 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Development Communication": {
        degree: "B.Sc. Development Communication",
        levels: [
            {
                level: "100 Level (Foundations in Communication & Social Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DCM 101: Introduction to Development Communication",
                            "DCM 103: Introduction to Mass Communication",
                            "DCM 105: History & Theories of Social & Economic Development",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DCM 102: Communication for Social Change & Behavioral Transformation",
                            "DCM 104: Basic Media Writing for Community Engagement",
                            "DCM 106: Cultural Dynamics, Indigenous Knowledge & Rural Communication",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Participatory Media, Health & Environmental Communication)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DCM 201: Health Communication, Public Health Campaigns & Epidemic Advocacy",
                            "DCM 202: Environmental Communication, Climate Change & Sustainability",
                            "DCM 203: Participatory Media Systems & Community Radio/TV Operations",
                            "DCM 205: Gender, Diversity & Inclusive Development Communication",
                            "DCM 207: Graphic Design, Visual Literacy & Material Production for Advocacy",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DCM 204: Educational & Instructional Media Design",
                            "DCM 206: Population Communication, Migration & Demographics",
                            "DCM 208: Audio-Visual Production for Social Advocacy & Campaigns",
                            "DCM 210: Public Relations, Advocacy & Mobilization in NGOs",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Campaign Design, Digital Advocacy & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DCM 301: Digital Communication, Social Media Activism & Mobile Advocacy",
                            "DCM 303: Social & Behavioral Change Communication (SBCC) Campaign Strategy",
                            "DCM 305: Research Methods in Development Communication & Monitoring/Evaluation",
                            "DCM 307: Peacebuilding, Conflict Transformation & Humanitarian Communication",
                            "DCM 309: Public Policy Analysis, Governance & Democratic Engagement",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DCM 302: Fieldwork Workshop: Community Entry, Diagnostics & Asset Mapping",
                            "DCM 304: SIWES / Practical Field Attachment (6 Months Attachment at International NGOs, Civil Society Organizations, Government Development Agencies, or UN Agencies)",
                            "DCM 306: SIWES Technical Logbook Evaluation, Portfolio Defense & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy, Monitoring/Evaluation & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DCM 401: Monitoring, Evaluation, Accountability & Learning (MEAL) in Communication",
                            "DCM 403: Strategic Communication in International Development & Donor Relations",
                            "DCM 405: Disaster Risk Reduction, Emergency & Crisis Communication",
                            "DCM 407: Communication for Agricultural Development & Rural Extension",
                            "DCM 409: Contemporary Issues & Emerging Trends in Development Communication"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DCM 402: NGO Management, Fundraising & Grant Proposal Writing",
                            "DCM 404: Digital Rights, Open Data & Information Accessibility in Development",
                            "DCM 406: Development Communication Campaign Portfolio & Community Project Defense",
                            "DCM 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Digital Media & Communication": {
        degree: "B.Sc. Digital Media & Communication",
        levels: [
            {
                level: "100 Level (Foundations in Communication & Digital Literacy)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DMC 101: Introduction to Digital Media & Communication",
                            "DMC 103: Foundations of Mass Communication & New Media",
                            "DMC 105: Fundamentals of Digital Technology & Web Infrastructure",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DMC 102: Writing & Storytelling for Digital Platforms",
                            "DMC 104: Basic Graphic Design, Vector Art & Visual Aesthetics",
                            "DMC 106: Digital Culture, Cyber-Psychology & Social Networks",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Content Creation, UI/UX & Interactive Media Production)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DMC 201: Digital Content Creation: Podcasting, Blogging & Audio Design",
                            "DMC 203: User Experience (UX) & User Interface (UI) Design for Media",
                            "DMC 205: Digital Photography & Commercial Image Editing",
                            "DMC 207: Web Design & Front-End Media Publishing (HTML/CSS/CMS)",
                            "DMC 209: Digital Advertising, SEO & Performance Marketing",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DMC 202: Motion Graphics, Animation & Visual Effects (VFX)",
                            "DMC 204: Digital Video Production & Non-Linear Editing Workflows",
                            "DMC 206: Social Media Management, Strategy & Community Building",
                            "DMC 208: Game Design, Interactive Narrative & Virtual Environments",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Analytics, Mobile Media, Cyberlaw & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DMC 301: Media Analytics, Big Data & Audience Measurement",
                            "DMC 303: Mobile Media, App Publishing & Content Distribution",
                            "DMC 305: Cyberlaw, Intellectual Property, Digital Rights & Ethics",
                            "DMC 307: Artificial Intelligence, Automation & Code-Driven Media",
                            "DMC 309: Research Methodology in Digital Media & Communication",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DMC 302: Digital Media Studio Lab & Interactive Prototype Exhibition",
                            "DMC 304: SIWES / Practical Field Attachment (6 Months Attachment at Digital Agencies, Tech Hubs, Media Houses, or Product Design Studios)",
                            "DMC 306: SIWES Technical Logbook Evaluation, Portfolio Defense & Departmental Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Strategy, Tech Entrepreneurship & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DMC 401: Strategic Digital Communication & Brand Innovation",
                            "DMC 403: Immersive Media: AR, VR & Spatial Computing Applications",
                            "DMC 405: Programmatic Media Buying, AdTech & Platform Monetization",
                            "DMC 407: Information Warfare, Fact-Checking & Combating Misinformation",
                            "DMC 409: Contemporary Issues & Disruptive Trends in Digital Media"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DMC 402: Media Entrepreneurship, Startup Product Management & Venture Pitching",
                            "DMC 404: Transmedia Storytelling & Cross-Platform Campaign Design",
                            "DMC 406: Final Year Capstone Digital Product Exhibition & Portfolio Jury Defense",
                            "DMC 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Film & Multimedia Studies": {
        degree: "B.Sc. Film & Multimedia Studies",
        levels: [
            {
                level: "100 Level (Foundations in Film, Arts & Media)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FMS 101: Introduction to Film & Multimedia Studies",
                            "FMS 103: History of Global & African Cinema (Nollywood Focus)",
                            "FMS 105: Fundamentals of Screenwriting & Visual Storytelling",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FMS 102: Visual Language, Composition & Film Aesthetics",
                            "FMS 104: Basic Photography & Motion Picture Optics",
                            "FMS 106: Introduction to Digital Media & Computer Graphics",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Craft Skills: Directing, Cinematography, Sound & Editing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FMS 201: Film Directing I: Blocking, Staging & Actor Guidance",
                            "FMS 203: Cinematography & Lighting Techniques",
                            "FMS 205: Intermediate Screenwriting (Short Film & Feature Structure)",
                            "FMS 207: Sound Design, Production Audio Recording & Foley",
                            "FMS 209: Digital Graphic Design & Concept Art for Film",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FMS 202: Non-Linear Video Editing & Post-Production Workflows",
                            "FMS 204: Multi-Camera Studio Production & Directing",
                            "FMS 206: Documentary Film & Non-Fiction Media Production",
                            "FMS 208: Production Design, Art Direction & Set Construction",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (VFX, Interactive Media, Film Law & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FMS 301: Motion Graphics, Visual Effects (VFX) & Compositing",
                            "FMS 303: Film & Media Research Methodology",
                            "FMS 305: Interactive Multimedia, Web Video & Streaming Tech",
                            "FMS 307: Film Economics, Distribution, Marketing & Exhibition",
                            "FMS 309: Entertainment Law, Copyright, Intellectual Property & Censorship (NFVCB)",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FMS 302: Short Film Production Workshop (Group Project)",
                            "FMS 304: SIWES / Practical Field Attachment (6 Months Attachment at Film Studios, Post-Production Houses, TV Networks, or VFX/Animation Agencies)",
                            "FMS 306: SIWES Technical Logbook Evaluation, Portfolio Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Directing, Business, Capstone Film & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "FMS 401: Advanced Film Directing & Cinematic Style",
                            "FMS 403: Color Grading, Finishing & Master Editing",
                            "FMS 405: Film Producing, Budgeting, Financing & Unit Production Management",
                            "FMS 407: Emerging Technologies: Virtual Production, AR/VR & AI in Film",
                            "FMS 409: Contemporary Issues in African Cinema & Cultural Critique"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "FMS 402: Transmedia Storytelling, Gaming & World-Building",
                            "FMS 404: Film Festival Strategy, Pitching & Global Sales",
                            "FMS 406: Final Year Capstone Film Project Screening & Jury Defense",
                            "FMS 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Journalism & Media Studies": {
        degree: "B.Sc. Journalism & Media Studies",
        levels: [
            {
                level: "100 Level (Foundations in Communication & News Reporting)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "JMS 101: Introduction to Journalism & Mass Media",
                            "JMS 103: History of Nigerian & African Press Systems",
                            "JMS 105: Basic News Writing & Reporting",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "JMS 102: Specialized News Writing & Feature Writing",
                            "JMS 104: Photojournalism & Visual Storytelling",
                            "JMS 106: Print & Digital Layout, Design & Typography",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Broadcasting News, Editing & Data Journalism)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "JMS 201: Broadcast News Reporting, Writing & Anchoring",
                            "JMS 203: Newspaper & Magazine Editing and Production",
                            "JMS 205: Data Journalism, Infographics & Visualization Techniques",
                            "JMS 207: Public Affairs Reporting & Political Journalism",
                            "JMS 209: Digital Publishing & Content Management Systems",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "JMS 202: Mobile Journalism (MoJo) & Multi-Platform Newsroom Operations",
                            "JMS 204: Business, Financial & Economic Reporting",
                            "JMS 206: Environmental, Science & Health Journalism",
                            "JMS 208: Interviewing Techniques & Source Verification",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Investigative Journalism, Media Law & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "JMS 301: Investigative Journalism, Open-Source Intelligence (OSINT) & Fact-Checking",
                            "JMS 303: Media Law, Ethics, Freedom of Information (FOI Act) & Defamation",
                            "JMS 305: Conflict-Sensitive Reporting, Peace Journalism & Safety of Journalists",
                            "JMS 307: Media Economics, Digital Monetization & Media Entrepreneurship",
                            "JMS 309: Research Methodology in Journalism & Mass Communication",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "JMS 302: Practical Campus Newspaper / Digital Newsroom Production",
                            "JMS 304: SIWES / Practical Field Attachment (6 Months Attachment at Newspaper Houses, TV/Radio Stations, Online News Outlets, or Media Agencies)",
                            "JMS 306: SIWES Technical Logbook Evaluation, News Portfolio Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Global Media, AI in Newsrooms & Research Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "JMS 401: Global Journalism, International News Systems & Foreign Correspondence",
                            "JMS 402: Artificial Intelligence, Automation & Algorithmic Newsrooms",
                            "JMS 403: Advanced Investigative & Depth Reporting Workshop",
                            "JMS 405: Media Criticism, Audience Analysis & Public Sphere Theory",
                            "JMS 407: Contemporary Issues & Disruption in Global Media"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "JMS 404: Newsroom Leadership, Management & Executive Publishing",
                            "JMS 406: Final Year Capstone Journalism Portfolio & Multi-Media Exhibition",
                            "JMS 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Mass Communication": {
        degree: "B.Sc. Mass Communication",
        levels: [
            {
                level: "100 Level (Foundations in Mass Communication & Social Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MAC 101: Introduction to Mass Communication",
                            "MAC 103: History of Nigerian & African Mass Media",
                            "MAC 105: Writing for the Mass Media I",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MAC 102: Writing for the Mass Media II",
                            "MAC 104: Basic Photography & Visual Communication",
                            "MAC 106: African Communication Systems & Indigenous Media",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Media Production, Reporting & PR/Advertising Basics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MAC 201: News Writing & Reporting (Print & Digital)",
                            "MAC 203: Radio & Television Production Techniques",
                            "MAC 205: Principles of Public Relations",
                            "MAC 207: Principles of Advertising",
                            "MAC 209: Graphic Communication, Desktop Publishing & Layout",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MAC 202: Feature Writing & Editorial Writing",
                            "MAC 204: Broadcast Announcing, Presentation & Voice Training",
                            "MAC 206: Theories of Mass Communication",
                            "MAC 208: Media Management, Economics & Station Operations",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Specialization Tracks, Media Law & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MAC 301: Mass Communication Research Methodology",
                            "MAC 303: Media Law, Ethics & Freedom of Information (FOI Act)",
                            "MAC 305: Digital Media, Online Journalism & Web Production",
                            "MAC 307: Specialized Reporting (Environment, Business, Health & Politics)",
                            "MAC 309: Integrated Marketing Communications (IMC) Strategies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MAC 302: Practical Campus Media Workshop (Campus Newspaper / Radio Broadcasting)",
                            "MAC 304: SIWES / Practical Field Attachment (6 Months Attachment at Newspaper Houses, TV/Radio Stations, PR Agencies, or Digital Media Houses)",
                            "MAC 306: SIWES Technical Logbook Evaluation, Media Portfolio Review & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Communication Strategy, Global Media & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "MAC 401: International Communication & Global Media Systems",
                            "MAC 403: Public Relations Campaigns, Event Management & Crisis Communication",
                            "MAC 405: Advertising Campaign Planning, Execution & Media Buying",
                            "MAC 407: Investigative Journalism & Fact-Checking Workflows",
                            "MAC 409: Contemporary Issues in Mass Communication & Digital Disruption"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "MAC 402: Media Criticism, Content Analysis & Audience Studies",
                            "MAC 404: Media Entrepreneurship, Startup Publishing & Agency Operations",
                            "MAC 406: Final Year Practical Media Exhibition & Portfolio Jury Defense",
                            "MAC 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Public Relations": {
        degree: "B.Sc. Public Relations",
        levels: [
            {
                level: "100 Level (Foundations in Public Relations & Social Sciences)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUR 101: Introduction to Public Relations & Corporate Communication",
                            "PUR 103: Introduction to Mass Communication",
                            "PUR 105: History & Evolution of Public Relations Globally & in Nigeria",
                            "SOC 101: Introduction to Sociology",
                            "PSY 101: Introduction to Psychology",
                            "GST 111: Communication in English Language",
                            "AMS 103: Introduction to Computing & Information Technology"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUR 102: Principles of Marketing Communications & Branding",
                            "PUR 104: Basic PR Writing, Speechwriting & Press Releases",
                            "PUR 106: Visual Communication, Photography & Graphic Design Basics",
                            "SOC 102: Introduction to Social Psychology",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Media Relations, Crisis PR & Stakeholder Management)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUR 201: Media Relations, Press Conferences & Spokesperson Training",
                            "PUR 203: Corporate Identity, Reputation Management & Brand Equity",
                            "PUR 205: Public Relations Writing for Print, Broadcast & Web",
                            "PUR 207: Internal & Employee Communication Strategies",
                            "PUR 209: Principles of Advertising & Integrated Communications",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUR 202: Crisis Communication & Risk Management",
                            "PUR 204: Stakeholder Engagement, Investor & Financial Public Relations",
                            "PUR 206: Event Planning, Trade Shows & Sponsorship Management",
                            "PUR 208: Community Relations, CSR & Sustainable Development",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Digital PR, Research, Ethics & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUR 301: Digital Public Relations, Social Media Strategy & Online Reputation",
                            "PUR 303: Public Relations Research Methodology & Sentiment Analysis",
                            "PUR 305: Ethics, Professional Standards & Regulatory Bodies in PR (NIPR, IPRA)",
                            "PUR 307: Public Affairs, Government Relations, Advocacy & Lobbying",
                            "PUR 309: Integrated Marketing Communications (IMC) Strategies",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUR 302: Practical PR Campaign Strategy & Client Pitch Workshop",
                            "PUR 304: SIWES / Practical Field Attachment (6 Months Attachment at PR Agencies, Corporate Communications Departments, NGOs, or Public Sector Agencies)",
                            "PUR 306: SIWES Technical Logbook Evaluation, PR Portfolio Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Global PR, Public Diplomacy, Agency Leadership & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "PUR 401: Global Public Relations & Cross-Cultural Communication",
                            "PUR 403: Public Diplomacy, Nation Branding & International Affairs",
                            "PUR 405: Measurement, Evaluation & Data Analytics in Public Relations",
                            "PUR 407: Issue Management, Political PR & Election Campaign Strategy",
                            "PUR 409: Contemporary Issues & Emerging Trends in Strategic Communication"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "PUR 402: Consultancy Management, Entrepreneurship & PR Agency Operations",
                            "PUR 404: Strategic Communication for Non-Profits, NGOs & Development",
                            "PUR 406: Final Year Practical PR Campaign Exhibition & Jury Defense",
                            "PUR 490: Final Year Undergraduate Research Project / Thesis Defense"
                        ]
                    }
                ]
            }
        ]
    },
    "Telecommunication Science": {
        degree: "B.Sc. Telecommunication Science",
        levels: [
            {
                level: "100 Level (Foundations in Physics, Mathematics & Computing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TCS 101: Introduction to Telecommunication Science & Technology",
                            "COS 101: Introduction to Computing Sciences",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "CHM 101: General Chemistry I",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TCS 102: Fundamentals of Data Communication & Computer Networks",
                            "MTH 102: Elementary Mathematics II (Calculus)",
                            "PHY 102: General Physics II (Electricity, Magnetism & Modern Physics)",
                            "PHY 108: General Physics Practical II",
                            "COS 102: Problem Solving & Structured Programming (C/Python)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Signals, Network Architecture & Telecommunication Circuits)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TCS 201: Analog & Digital Communication Systems",
                            "TCS 203: Signals and Systems Analysis",
                            "TCS 205: Telecommunication Circuits & Systems Laboratory",
                            "CSC 201: Computer Architecture & Organization",
                            "STA 201: Probability & Mathematical Statistics for Computing",
                            "MTH 201: Mathematical Methods I (Differential Equations)",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TCS 202: Electromagnetic Waves, Transmission Lines & Waveguides",
                            "TCS 204: Computer Network Protocols, Architectures & Routing Fundamentals",
                            "TCS 206: Telecommunication Software Systems & Scripting",
                            "TCS 208: Switching Systems, IP Telephony & VoIP Engineering",
                            "CSC 204: Object-Oriented Programming (Java/C++)",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Wireless Communications, Network Security & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TCS 301: Wireless & Mobile Communication Systems (3G/4G/5G Architectures)",
                            "TCS 303: Antenna Theory, Propagation & Radio Frequency (RF) Engineering",
                            "TCS 305: Network Computing & Cloud Infrastructure",
                            "TCS 307: Network and Information Security, Cryptography & Firewalls",
                            "TCS 309: Telecommunication Research Methodology & Data Analysis",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TCS 302: Optical Fiber Communication & Satellite Systems",
                            "TCS 304: SIWES / Practical Industrial Attachment (6 Months Field Training at Telecom Operators like MTN/Airtel, ISPs, Fiber Networks, or Network Engineering Firms)",
                            "TCS 306: SIWES Technical Logbook Evaluation, Industrial Report & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Networks, IoT, Policy & Capstone Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "TCS 401: Advanced Cellular Systems, 5G/6G Networks & Network Slicing",
                            "TCS 402: Internet of Things (IoT), Wireless Sensor Networks & Embedded Systems",
                            "TCS 403: Telecommunication Network Planning, Analysis & Optimization",
                            "TCS 405: Network Management, Traffic Engineering & Quality of Service (QoS)",
                            "TCS 407: Telecommunication Policy, Regulations (NCC Benchmarks) & Spectrum Management"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "TCS 404: Software-Defined Networking (SDN) & Network Function Virtualization (NFV)",
                            "TCS 406: Telecommunication Project Management & Tech Entrepreneurship",
                            "TCS 408: Emerging Trends in Optical, Quantum & Satellite Telecommunications",
                            "TCS 490: Final Year Undergraduate Capstone Research Project / Practical System Implementation"
                        ]
                    }
                ]
            }
        ]
    },
    // ===== COMPUTING PROGRAMS =====
    "Artificial Intelligence": {
        degree: "B.Sc. Artificial Intelligence",
        levels: [
            {
                level: "100 Level (Foundations in Mathematics, Programming & Computing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AIF 101: Introduction to Artificial Intelligence & Intelligent Agents",
                            "COS 101: Introduction to Computing Sciences",
                            "COS 103: Computer Programming I (Python for Computing)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "MTH 103: Discrete Mathematics & Logic",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "COS 102: Computer Programming II (Object-Oriented Programming in Python/C++)",
                            "MTH 102: Elementary Mathematics II (Calculus & Linear Algebra)",
                            "STA 102: Probability & Descriptive Statistics for Data Science",
                            "PHY 102: General Physics II (Electricity, Magnetism & Modern Physics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Data Structures, AI Algorithms & Mathematical Foundations)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AIF 201: Foundations of Artificial Intelligence & Search Algorithms",
                            "AIF 203: Linear Algebra & Vector Calculus for Machine Learning",
                            "CSC 201: Computer Architecture & Organization",
                            "CSC 203: Data Structures & Algorithms",
                            "STA 201: Inferential Statistics & Probability Models",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AIF 202: Machine Learning Fundamentals (Supervised & Unsupervised Learning)",
                            "AIF 204: Knowledge Representation, Reasoning & Expert Systems",
                            "CSC 202: Database Management Systems (SQL & Vector Databases)",
                            "CSC 204: Software Engineering & Systems Design",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Deep Learning, NLP, Computer Vision & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AIF 301: Deep Learning & Neural Networks Architectures (PyTorch/TensorFlow)",
                            "AIF 303: Natural Language Processing (NLP) & Computational Linguistics",
                            "AIF 305: Computer Vision, Pattern Recognition & Image Processing",
                            "AIF 307: Optimization Techniques for AI & Convex Analysis",
                            "CSC 301: Operating Systems & Parallel Computing",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AIF 302: Reinforcement Learning, Multi-Agent Systems & Game Theory",
                            "AIF 304: SIWES / Industrial Attachment (6 Months Field Attachment at AI Labs, Tech Companies, Software Agencies, or Enterprise R&D Units)",
                            "AIF 306: SIWES Technical Logbook Evaluation, Industrial Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Generative AI, MLOps, AI Ethics & Capstone Project)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "AIF 401: Generative AI, Large Language Models (LLMs) & Transformer Architectures",
                            "AIF 403: MLOps, AI Model Deployment, Cloud Infrastructure & Pipelines",
                            "AIF 405: Robotics, Autonomous Systems & Spatial AI",
                            "AIF 407: Ethics, Governance, Explainable AI (XAI) & Algorithmic Bias",
                            "AIF 409: AI Research Methodology, Grant Writing & Seminar"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "AIF 402: AI in Healthcare, Finance, Agriculture & Emerging Systems",
                            "AIF 404: Edge AI, Hardware Acceleration & Embedded Machine Learning",
                            "AIF 406: AI Startup Operations, Product Design & Commercialization",
                            "AIF 490: Final Year Undergraduate Research Project / Practical System Implementation"
                        ]
                    }
                ]
            }
        ]
    },
    "Computer Science": {
        degree: "B.Sc. Computer Science",
        levels: [
            {
                level: "100 Level (Foundations in Mathematics, Programming & Science)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSC 101: Introduction to Computer Science & Computing Systems",
                            "COS 101: Introduction to Computing Sciences",
                            "COS 103: Computer Programming I (Structured Programming in Python/C)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "MTH 103: Discrete Mathematics & Logic",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSC 102: Computer Programming II (Object-Oriented Programming in Java/C++)",
                            "MTH 102: Elementary Mathematics II (Calculus & Linear Algebra)",
                            "STA 102: Probability & Descriptive Statistics for Computing",
                            "PHY 102: General Physics II (Electricity, Magnetism & Modern Physics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Data Structures, Algorithms & Computer Architecture)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSC 201: Computer Architecture & Organization",
                            "CSC 203: Data Structures & Algorithms",
                            "CSC 205: Digital Logic Design & Assembly Language",
                            "MTH 201: Mathematical Methods I (Differential Equations)",
                            "STA 201: Inferential Statistics & Probability Models",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSC 202: Database Management Systems (SQL & Relational Models)",
                            "CSC 204: Software Engineering Principles & System Design",
                            "CSC 206: Web Technologies & Front-End/Back-End Systems",
                            "CSC 208: Operating Systems Principles & Process Management",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Networks, Systems Programming, Security & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSC 301: Operating Systems Internals & Systems Programming",
                            "CSC 303: Computer Networks & Internet Protocols (TCP/IP Architecture)",
                            "CSC 305: Theory of Computation & Automata Theory",
                            "CSC 307: Artificial Intelligence & Machine Learning Basics",
                            "CSC 309: Research Methodology in Computer Science",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSC 302: Compiler Construction & Programming Language Concepts",
                            "CSC 304: SIWES / Industrial Attachment (6 Months Field Attachment at Software Companies, Tech Hubs, Telecoms, or IT Departments)",
                            "CSC 306: SIWES Technical Logbook Evaluation, Industrial Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Advanced Software Engineering, Cybersecurity & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CSC 401: Distributed Systems & Cloud Computing",
                            "CSC 403: Cybersecurity, Cryptography & Network Security",
                            "CSC 405: Advanced Database Systems (NoSQL, Big Data & Query Optimization)",
                            "CSC 407: Algorithm Design, Complexity Analysis & Optimization",
                            "CSC 409: Human-Computer Interaction (HCI) & UI/UX Principles"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CSC 402: Mobile Application Development (Android/iOS)",
                            "CSC 404: Software Quality Assurance, Testing & DevOps Pipelines",
                            "CSC 406: Computing Ethics, IT Law & Professional Practice",
                            "CSC 490: Final Year Undergraduate Research Project / Practical System Implementation"
                        ]
                    }
                ]
            }
        ]
    },
    "Cyber Security": {
        degree: "B.Sc. Cyber Security",
        levels: [
            {
                level: "100 Level (Foundations in Mathematics, Programming & Computing)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CYB 101: Introduction to Cybersecurity & Information Assurance",
                            "COS 101: Introduction to Computing Sciences",
                            "COS 103: Computer Programming I (Python/C for Computing)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "MTH 103: Discrete Mathematics & Logic",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CYB 102: Computer Networking Fundamentals & Protocols",
                            "COS 102: Computer Programming II (Object-Oriented Programming in C++/Python)",
                            "MTH 102: Elementary Mathematics II (Calculus & Linear Algebra)",
                            "STA 102: Probability & Descriptive Statistics for Computing",
                            "PHY 102: General Physics II (Electricity, Magnetism & Modern Physics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (System Architecture, Network Security & Cryptography Basics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CYB 201: Principles of Information Security & Risk Management",
                            "CYB 203: Cryptography & Data Hiding Techniques I",
                            "CSC 201: Computer Architecture & Assembly Language",
                            "CSC 203: Data Structures & Algorithms",
                            "STA 201: Inferential Statistics & Probability Models",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CYB 202: Network Security, Firewalls & Intrusion Detection Systems",
                            "CYB 204: Operating Systems Security & Administration (Linux/Windows)",
                            "CSC 202: Database Management Systems & SQL Security",
                            "CSC 204: Secure Software Engineering & Code Auditing",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Ethical Hacking, Digital Forensics, Malware Analysis & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CYB 301: Vulnerability Assessment, Ethical Hacking & Penetration Testing",
                            "CYB 303: Digital Forensics, Chain of Custody & Evidence Analysis",
                            "CYB 305: Applied Cryptography, PKI & Wireless Security",
                            "CYB 307: Reverse Engineering & Malware Analysis Fundamentals",
                            "CYB 309: Research Methodology in Cybersecurity",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CYB 302: Practical Offensive & Defensive Cyber Operations Lab",
                            "CYB 304: SIWES / Industrial Attachment (6 Months Field Attachment at SOCs, Cyber Agencies, Banking Tech Units, or Telecom Firms)",
                            "CYB 306: SIWES Technical Logbook Evaluation, Security Portfolio Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Cloud Security, Threat Intelligence, Cyberlaw & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "CYB 401: Cloud, Virtualization & Container Security",
                            "CYB 403: Cyber Threat Intelligence, Threat Hunting & SIEM Analytics",
                            "CYB 405: Incident Response, Disaster Recovery & Business Continuity",
                            "CYB 407: Critical Infrastructure, IoT & Industrial Control Systems (ICS/SCADA) Security",
                            "CYB 409: Cyber Crime, Cyberlaw, Digital Rights & Ethics (NDPA/Cybercrime Act)"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "CYB 402: Cybersecurity Governance, Compliance & Audit (ISO 27001, NIST)",
                            "CYB 404: Security Operations Center (SOC) Management & Security Automation",
                            "CYB 406: AI in Cybersecurity, Biometrics & Emerging Threat Vectors",
                            "CYB 490: Final Year Undergraduate Research Project / Practical System Implementation"
                        ]
                    }
                ]
            }
        ]
    },
    "Data Science": {
        degree: "B.Sc. Data Science",
        levels: [
            {
                level: "100 Level (Foundations in Mathematics, Programming & Statistics)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DTS 101: Introduction to Data Science & Analytics",
                            "COS 101: Introduction to Computing Sciences",
                            "COS 103: Computer Programming I (Python for Data Science)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "MTH 103: Discrete Mathematics & Logic",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "COS 102: Computer Programming II (Data Structures & Object-Oriented Python/R)",
                            "MTH 102: Elementary Mathematics II (Calculus & Linear Algebra)",
                            "STA 102: Probability & Descriptive Statistics",
                            "PHY 102: General Physics II (Electricity, Magnetism & Modern Physics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Data Wrangling, Applied Statistics & Database Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DTS 201: Data Wrangling, Cleaning & Exploratory Data Analysis (EDA)",
                            "DTS 203: Linear Algebra & Multivariate Calculus for Data Science",
                            "CSC 201: Computer Architecture & Systems",
                            "CSC 203: Data Structures & Algorithms",
                            "STA 201: Inferential Statistics & Statistical Distributions",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DTS 202: Applied Machine Learning I (Regression, Classification & Clustering)",
                            "DTS 204: Data Visualization & Storytelling (PowerBI, Tableau & Matplotlib/Seaborn)",
                            "CSC 202: Relational Database Management Systems & SQL",
                            "CSC 204: Software Engineering Principles for Data Products",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Big Data, Machine Learning, Deep Learning & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DTS 301: Big Data Technologies & Distributed Computing (Hadoop, Spark & PySpark)",
                            "DTS 303: Applied Machine Learning II & Deep Learning Fundamentals",
                            "DTS 305: NoSQL Databases & Unstructured Data Management (MongoDB, Cassandra)",
                            "DTS 307: Time Series Analysis & Predictive Forecasting",
                            "CSC 309: Research Methodology & Experimental Design for Data Science",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DTS 302: Practical Data Science Lab & Analytics Portfolio Workshop",
                            "DTS 304: SIWES / Industrial Attachment (6 Months Field Attachment at FinTechs, Data Consultancies, Telecoms, or Tech Companies)",
                            "DTS 306: SIWES Technical Logbook Evaluation, Industrial Defense & Seminar",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (Data Engineering, MLOps, Data Ethics & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "DTS 401: Data Engineering, ETL Pipelines & Cloud Warehousing (Snowflake, BigQuery)",
                            "DTS 403: MLOps, Model Monitoring & Automated Machine Learning (AutoML)",
                            "DTS 405: Natural Language Processing (NLP) & Text Analytics",
                            "DTS 407: Data Ethics, Privacy Laws, Governance & Data Protection (NDPA/GDPR)",
                            "DTS 409: Business Intelligence, Decision Science & Domain Analytics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "DTS 402: Advanced Spatial Data Science & GIS Analytics",
                            "DTS 404: Reinforcement Learning & A/B Testing Methodologies",
                            "DTS 406: Data Science Startup Operations & Commercialization",
                            "DTS 490: Final Year Undergraduate Research Project / End-to-End Data System Implementation"
                        ]
                    }
                ]
            }
        ]
    },
    "Information & Communication Technology": {
        degree: "B.Sc. Information & Communication Technology",
        levels: [
            {
                level: "100 Level (Foundations in Computing, Mathematics & Communication Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ICT 101: Introduction to Information & Communication Technology",
                            "COS 101: Introduction to Computing Sciences",
                            "COS 103: Computer Programming I (Python/C)",
                            "MTH 101: Elementary Mathematics I (Algebra & Trigonometry)",
                            "MTH 103: Discrete Mathematics & Logic",
                            "PHY 101: General Physics I (Mechanics, Thermal Physics & Waves)",
                            "GST 111: Communication in English Language"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ICT 102: Basics of Telecommunication & Signal Systems",
                            "COS 102: Computer Programming II (Object-Oriented Programming)",
                            "MTH 102: Elementary Mathematics II (Calculus & Linear Algebra)",
                            "STA 102: Probability & Descriptive Statistics for Computing",
                            "PHY 102: General Physics II (Electricity, Magnetism & Electronics)",
                            "GST 112: Nigerian Peoples and Culture"
                        ]
                    }
                ]
            },
            {
                level: "200 Level (Networking, Digital Logic, Web Tech & Database Systems)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ICT 201: Computer Communications & Networking Fundamentals",
                            "ICT 203: Web Design & Front-End Technologies (HTML5, CSS3, JavaScript)",
                            "CSC 201: Computer Architecture & Assembly Language",
                            "CSC 203: Data Structures & Algorithms",
                            "STA 201: Inferential Statistics for ICT Applications",
                            "ENT 211: Entrepreneurship and Innovation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ICT 202: Wireless Communications & Mobile Networks",
                            "ICT 204: Internet & Web Application Development (Server-side & APIs)",
                            "CSC 202: Relational Database Management Systems & SQL",
                            "CSC 204: System Analysis, Design & UML Modeling",
                            "GST 212: Philosophy, Logic, and Human Existence"
                        ]
                    }
                ]
            },
            {
                level: "300 Level (Enterprise Systems, Cloud Computing, Cybersecurity & SIWES)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ICT 301: Enterprise Network Architecture, Routing & Switching",
                            "ICT 303: Mobile Application Development (Android/Flutter)",
                            "ICT 305: Information Systems Security & Cryptography",
                            "ICT 307: Cloud Computing Infrastructure & Virtualization",
                            "CSC 309: Research Methodology in ICT & Computing",
                            "ENT 312: Venture Creation"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ICT 302: Practical ICT Network Lab & Systems Admin Workshop",
                            "ICT 304: SIWES / Industrial Attachment (6 Months Field Attachment at Telecoms, ISPs, IT Firms, or Enterprise Tech Units)",
                            "ICT 306: SIWES Technical Logbook Evaluation, Presentation & Defense",
                            "GST 312: Peace Studies and Conflict Resolution"
                        ]
                    }
                ]
            },
            {
                level: "400 Level (IoT, IT Governance, Broadcast/Multimedia Tech & Thesis)",
                semesters: [
                    {
                        semester: "First Semester",
                        courses: [
                            "ICT 401: Internet of Things (IoT) & Embedded Communication Systems",
                            "ICT 403: Multimedia Systems, Audio/Video Streaming Protocols & Digital Signal Processing",
                            "ICT 405: IT Infrastructure Governance, Service Management & Policy (ITIL, COBIT)",
                            "ICT 407: Network Security, Firewalls & Intrusion Prevention",
                            "ICT 409: Telecommunication Laws, Spectrum Regulation & Cyber Ethics"
                        ]
                    },
                    {
                        semester: "Second Semester",
                        courses: [
                            "ICT 402: Satellite Communications, Fiber Optics & Microwave Systems",
                            "ICT 404: E-Commerce Systems, Digital Transformation & FinTech Infrastructure",
                            "ICT 406: Emerging ICT Technologies (5G/6G, Edge Computing & AI Integration)",
                            "ICT 490: Final Year Undergraduate Research Project / Practical System Implementation"
                        ]
                    }
                ]
            }
        ]
    }
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
            html += `</div>`;
            html += `</div>`;
        });
        html += `</div>`;
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

    document.querySelectorAll('[data-protected="true"]').forEach(el => {
        el.addEventListener('click', function(e) {
            if (!requireAuth(e)) return;
        });
    });

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
