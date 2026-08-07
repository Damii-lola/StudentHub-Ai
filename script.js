// script.js
const API_BASE = 'https://studenthub-ai-lj46.onrender.com/api';

// ========== COURSE TOPICS DATA ==========
const COURSES_DATA = {
    // ===== ACCOUNTING & FINANCE PROGRAMS =====
    "Accountancy / Accounting": {
        degree: "B.Sc. Accounting",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Actuarial Science": {
        degree: "B.Sc. Actuarial Science",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Banking and Finance": {
        degree: "B.Sc. Banking and Finance",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    
    // ===== BUSINESS & MANAGEMENT PROGRAMS =====
    "Business Administration / Management": {
        degree: "B.Sc. Business Administration / Management",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Industrial Relations and Personnel Management": {
        degree: "B.Sc. Industrial Relations and Personnel Management",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Marketing": {
        degree: "B.Sc. Marketing",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Public Administration": {
        degree: "B.Sc. Public Administration",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    
    // ===== AGRICULTURE PROGRAMS =====
    "Agricultural Economics and Extension": {
        degree: "B.Agric. Agricultural Economics and Extension",
        levels: [
            // ... (full data as previously provided)
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
            // ... (full data as previously provided)
        ]
    },
    "Animal Production & Health": {
        degree: "B.Agric. Animal Production & Health",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Animal Science": {
        degree: "B.Agric. Animal Science",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Crop Protection": {
        degree: "B.Agric. Crop Protection",
        levels: [
            // ... (full data as previously provided)
        ]
    },
    "Crop Science & Horticulture": {
        degree: "B.Agric. Crop Science & Horticulture",
        levels: [
            // ... (full data as previously provided)
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
            // ... (full data as previously provided)
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
            // ... (full data as previously provided)
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
