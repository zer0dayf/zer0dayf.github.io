/**
 * Portfolio Configuration File
 * ============================
 * Edit this file to update your portfolio content.
 * All sections are dynamically rendered from this config.
 */

const CONFIG = {
    // ===== PERSONAL INFO =====
    personal: {
        name: "Öner Efe Güngör",
        title: "Information Systems Engineering Student",
        tagline: "Building, Breaking, Fixing (Sometimes)",
        email: "onerefegungor@gmail.com",
        location: "Ankara, Turkey",
        profileImage: "assets/images/profile.png",
        social: {
            github: "https://github.com/zer0dayf",
            linkedin: "https://linkedin.com/in/oner-efe-gungor",
        }
    },

    // ===== PROFESSIONAL SUMMARY =====
    summary: {
        paragraphs: [
          "Information Systems Engineering student with a strong interest in breaking things legally <strong>(cybersecurity)</strong>. Solid foundation in <strong>network security, information security fundamentals, risk management, and system protection </strong> — built through academic coursework and way too many hands-on projects that sometimes ended with the classic <strong><em>it works on my machine</em></strong>.",
          "Experienced in <strong>vulnerability identification</strong>, basic security assessment, and data protection practices. Familiar with <strong>cybersecurity tools</strong> and security best practices. Seeking an <strong> entry-level or internship position </strong> to apply technical knowledge and further develop skills in information systems and cybersecurity."
        ],
        stats: [
            { number: "7+", label: "Projects" },
            { number: "10+", label: "Certifications" },
            { number: "3", label: "Degrees" }
        ]
    },

    // ===== EXPERIENCE =====
    experience: [
        {
            title: "Cybersecurity Analyst Intern",
            company: "Paulmark",
            date: "2025",
            icon: "fas fa-shield-halved",
            description: "Completed an internship as a Cybersecurity Analyst, gaining hands-on experience in <strong>security monitoring</strong>, <strong>vulnerability analysis</strong>, and basic risk assessment. Identified and reported 12+ potential vulnerabilities across internal systems and network segments.",
            tags: ["Security Monitoring", "Vulnerability Analysis", "Risk Assessment"]
        },
        {
            title: "Work and Travel Program Participant",
            company: "Cedar Point Amusement Park, USA",
            date: "2025",
            icon: "fas fa-globe",
            description: "Participated in the Work and Travel program, gaining <strong>international work experience</strong> in a fast-paced and multicultural environment. Developed strong <strong>communication skills</strong>, teamwork, adaptability, and professional English usage while working in an international setting.",
            tags: ["International Experience", "Communication", "Adaptability"]
        }
    ],

    // ===== EDUCATION =====
    education: [
        {
            degree: "Bachelor's Degree",
            field: "Information Systems Engineering",
            school: "Atılım University",
            date: "2023 - 2027",
            icon: "fas fa-laptop-code",
            badge: "Primary",
            badgeClass: ""
        },
        {
            degree: "Minor Degree",
            field: "Aerospace Engineering",
            school: "Atılım University",
            date: "2024 - 2027",
            icon: "fas fa-rocket",
            badge: "Minor",
            badgeClass: "minor"
        },
        {
            degree: "Associate's Degree",
            field: "E-Commerce and Marketing",
            school: "Istanbul University",
            date: "2024 - 2027",
            icon: "fas fa-chart-line",
            badge: "Associate",
            badgeClass: "associate"
        }
    ],

    // ===== PROJECTS =====
    projects: [
        {
            title: "YOLO-Based Playing Card Recognition",
            date: "2025 - Present",
            description: "Trained a YOLO-based computer vision model to detect and classify playing cards. Achieved mAP@0.5 of 0.92 across 52 standard card classes. Developed an application to integrate the model for real-world usage, with the name 'AceTrack-AI' and published as open-source on GitHub.",
            icon: "fas fa-eye",
            tags: ["Computer Vision", "YOLO", "Machine Learning", "Python"],
            github: "https://github.com/zer0dayf/AceTrack-AI"
        },

        {
            title: "BIST-KAP Dataset Builder",
            date: "2026",
            description: "Automated tool that builds labeled NLP datasets by matching Borsa İstanbul (BIST) companies' KAP announcements with their T+5 stock price movements. Designed for training financial language models such as FinBERT, with focus on efficient data preprocessing using Python, Pandas, and yfinance.",
            icon: "fas fa-chart-line",
            tags: ["Python", "NLP", "Finance", "Pandas", "yfinance", "Dataset"],
            github: "https://github.com/zer0dayf/Bist-KAP-Dataset-Builder"
        },

        {
            title: "Pathological Virus Detection System",
            date: "2022",
            description: "Patent application presented to Turkish Patent Institute. Developed a project focusing on the detection of pathological viruses using sensor technology combined with artificial intelligence.",
            icon: "fas fa-virus",
            tags: ["AI", "Sensors", "Patent", "Innovation"],

        },
        {
            title: "Ghost-Audit: BadUSB Security Research Payload",
            date: "2025",
            description: "Educational BadUSB payload demonstrating active information gathering techniques and HID attack vectors in controlled environments, focusing on endpoint security weaknesses and mitigation.",
            icon: "fa-etch fa-solid fa-skull",
            iconClass: "security",
            tags: ["Security Research", "Flipper Zero", "Digispark"],
            github: "https://github.com/zer0dayf/Ghost-Audit"
        },
        {
            title: "Neon Runner: Project 2084",
            date: "2025 - Present",
            description: "Developing a retro-futuristic platformer mobile game using modern game development tools. Conducted closed beta testing with 12 participants, achieving average play session of 10+ minutes and 4/5 feedback rating. Responsible for game design, implementation, and deployment with planned release on Google Play Store.",
            icon: "fas fa-gamepad",
            iconClass: "game",
            tags: ["Game Dev", "Mobile", "Unity"]
        },

        {
            title: "Resume Website Template",
            date: "2024",
            description: "Designed and developed a responsive CV and portfolio website template for presenting personal projects, skills, and experience with clean design and usability focus.",
            icon: "fas fa-globe",
            iconClass: "web",
            tags: ["HTML/CSS", "Jekyll", "Web Dev"],
            github: "https://github.com/zer0dayf/jekyll_simple_resume_template"
        },
        {
            title: "GitHub Projects Collection",
            date: "2022 - Present",
            description: "Collection of academic and personal projects published on GitHub, including cybersecurity tools, machine learning models, and software development work.",
            icon: "fab fa-github",
            iconClass: "github",
            tags: ["Open Source", "Various"],
            github: "https://github.com/zer0dayf"
        }

    ],

    // ===== CERTIFICATIONS =====
    certifications: [
        {
            title: "Blue Team Junior Analyst (BTJA)",
            issuer: "Security Blue Team (SBT)",
            date: "2026",
            description: "Technical Competencies: OSINT, Digital Forensics, Vulnerability Management, Dark Web Ops, Threat Hunting, and Network Analysis",
            icon: "fas fa-shield-alt",
            iconClass: "sbt",
            certId: "996703893"
        },
        {
            title: "Google Cybersecurity Professional Certificate",
            issuer: "Google (Coursera)",
            date: "2026",
            description: "Cybersecurity fundamentals, risk management, SIEM & IDS tools, Linux, SQL, and Python for security operations.",
            icon: "fab fa-google",
            iconClass: "google",
            certId: "64NU1OYV9S0U"
        },
        {
            title: "Intermediate Applied Cybersecurity",
            issuer: "BTK Academy & USOM",
            date: "2024",
            description: "Hands-on network security, security tools, incident analysis, and defensive techniques.",
            icon: "fas fa-shield-alt",
            iconClass: "btk"
        },
        {
            title: "Jr. Penetration Tester Path",
            issuer: "TryHackMe",
            date: "Ongoing",
            ongoing: true,
            description: "Penetration testing fundamentals, network exploitation, web application security.",
            icon: "fas fa-user-secret",
            iconClass: "tryhackme"
        },
        {
            title: "Introduction to Unmanned Aerial Vehicles (UAV)",
            issuer: "BTK Academy",
            date: "2026",
            description: "UAV fundamentals, flight principles, airspace regulations, and drone system components.",
            icon: "fas fa-jet-fighter-up",
            iconClass: "btk"
        },
        {
            title: "Mobile App Development with Artificial Intelligence",
            issuer: "BTK Academy",
            date: "2026",
            description: "AI-powered mobile application development, machine learning integration, and model deployment.",
            icon: "fas fa-robot",
            iconClass: "btk"
        },
        {
            title: "Database Architectures in Big Data",
            issuer: "BTK Academy",
            date: "2026",
            description: "Big data ecosystems, distributed databases, data modeling, and scalable architecture design.",
            icon: "fas fa-database",
            iconClass: "btk"
        },
        {
            title: "Animation Production with Adobe Animate",
            issuer: "BTK Academy",
            date: "2026",
            description: "2D animation production, motion graphics principles, and interactive media design using Adobe Animate.",
            icon: "fas fa-film",
            iconClass: "btk"
        },
        {
            title: "Digital Chip Design Fundamentals",
            issuer: "BTK Academy",
            date: "2025",
            description: "30-hour training on digital chip design and digital system design principles.",
            icon: "fas fa-microchip",
            iconClass: "btk"
        },
        {
            title: "Introduction to Information Technologies",
            issuer: "BTK Academy",
            date: "2023",
            description: "Basic IT concepts, systems, and digital infrastructure fundamentals.",
            icon: "fas fa-laptop",
            iconClass: "btk"
        }
    ],

    // ===== SKILLS (Simple list - no progress bars) =====
    skills: {
        technical: [
            { name: "Python: Scripting, automation, computer vision, data processing", icon: "fab fa-python" },
            { name: "Linux: CLI, system hardening, forensics basics", icon: "fab fa-linux" },
            { name: "Networking – TCP/IP, packet analysis with Wireshark, scanning with Nmap", icon: "fas fa-network-wired" }
        ],
        tools: [
            { name: "Vulnerability Assessment: OpenVAS/Nessus basics, manual enumeration", icon: "fas fa-bug" },
            { name: "Risk Assessment: Qualitative analysis, vulnerability reporting", icon: "fas fa-exclamation-triangle" },
            { name: "Security Tools: tcpdump, Volatility, BadUSB", icon: "fas fa-tools" },
            { name: "Penetration Testing: Burp Suite, ZAP, OWASP(Top10)", icon: "fas fa-user-secret" },
            { name: "Incident Analysis: Log review, basic DFIR concepts", icon: "fas fa-search" }
        ]
    },

    // ===== LANGUAGES =====
    languages: [
        { name: "Turkish", flag: "🇹🇷", level: "Native", levelClass: "native" },
        { name: "English", flag: "🇬🇧", level: "Advanced", levelClass: "advanced" }
    ],

    // ===== INTERESTS =====
    interests: [
        {
            title: "Cybersecurity Research",
            icon: "fas fa-search",
            description: "Exploring cybersecurity topics such as threat analysis, vulnerability discovery, and defensive security techniques."
        },
        {
            title: "Game Development",
            icon: "fas fa-gamepad",
            description: "Interested in game development and immersive, story-driven games, focusing on game mechanics, narrative design, and user experience."
        },
        {
            title: "Emerging Technologies",
            icon: "fas fa-microchip",
            description: "Following developments in artificial intelligence, cybersecurity tools, and emerging technologies."
        }
    ],

    // ===== ADDITIONAL TRAINING =====
    training: [
        {
            title: "Occupational Health and Safety Training",
            issuer: "Atılım University",
            date: "2024",
            icon: "fas fa-hard-hat",
            description: "Completed training on laboratory, workshop, and electrical safety practices."
        },
        {
            title: "Career and Competency Meetings",
            issuer: "Defense Industry Academy",
            date: "2024",
            icon: "fas fa-fighter-jet",
            description: "Participated in national career and competency development events under the National Competency Initiative."
        },
        {
            title: "UAV-0 / UAV-1 Individual Sportive Pilot License",
            issuer: "General Directorate of Civil Aviation (SGHM)",
            date: "2026",
            icon: "fas fa-jet-fighter-up",
            description: "Licensed UAV-0 and UAV-1 pilot authorized for individual sportive drone operations in compliance with national aviation regulations."
        },
        {
            title: "ServSafe Alcohol Certification",
            issuer: "National Restaurant Association",
            date: "2025",
            icon: "fas fa-wine-glass",
            description: "Risk Awareness & Compliance Training focused on safety procedures, regulatory compliance, and risk mitigation."
        }
    ],

    // ===== REFERENCES (Simple format - no quotes) =====
    references: [
        {
            name: "Dr. Yavuz Selim Silay",
            position: "Professor at Atılım University",
            email: "drysilay@yahoo.com"
        }
    ],

    // ===== NAVIGATION LINKS =====
    navigation: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
    ]
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
