/**
 * Öner Efe Güngör Portfolio - Main JavaScript
 * Renders content from config.js and handles interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // Render all sections from config
    renderNavigation();
    renderHero();
    renderAbout();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCertifications();
    renderSkills();
    renderInterests();
    renderTraining();
    renderReferences();
    renderContact();
    renderFooter();

    // Initialize interactions
    initNavigation();
    initScrollAnimations();
    initBackToTop();
    initContactForm();
    initResumeDownload();
});

// ===================================
// RENDERING FUNCTIONS
// ===================================

function renderNavigation() {
    const navMenu = document.getElementById('navMenu');
    const navLogoName = document.getElementById('navLogoName');

    if (navLogoName && CONFIG.personal) {
        navLogoName.textContent = CONFIG.personal.name.split(' ').pop(); // Last name
    }

    if (navMenu && CONFIG.navigation) {
        navMenu.innerHTML = CONFIG.navigation.map(item => `
            <li role="none">
                <a href="${item.href}" class="nav-link${item.href === '#home' ? ' active' : ''}" role="menuitem">
                    ${item.label}
                </a>
            </li>
        `).join('');
    }
}

function renderHero() {
    const { personal } = CONFIG;
    if (!personal) return;

    const heroName = document.getElementById('heroName');
    const heroTitle = document.getElementById('heroTitle');
    const heroTagline = document.getElementById('heroTagline');
    const heroImage = document.getElementById('heroImage');
    const heroSocial = document.getElementById('heroSocial');

    if (heroName) heroName.textContent = personal.name;
    if (heroTitle) heroTitle.textContent = personal.title;
    if (heroTagline) {
        heroTagline.innerHTML = `<i class="fas fa-shield-halved"></i><span>${personal.tagline}</span>`;
    }
    if (heroImage && personal.profileImage) {
        heroImage.src = personal.profileImage;
        heroImage.alt = `${personal.name} - ${personal.title}`;
    }

    if (heroSocial && personal.social) {
        const socialIcons = {
            github: 'fab fa-github',
            linkedin: 'fab fa-linkedin',
            twitter: 'fab fa-twitter'
        };

        heroSocial.innerHTML = Object.entries(personal.social).map(([platform, url]) => `
            <a href="${url}" target="_blank" rel="noopener noreferrer" 
               aria-label="${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile" 
               class="social-link">
                <i class="${socialIcons[platform] || 'fas fa-link'}"></i>
            </a>
        `).join('');
    }
}

function renderAbout() {
    const { summary } = CONFIG;
    if (!summary) return;

    const aboutText = document.getElementById('aboutText');
    const aboutStats = document.getElementById('aboutStats');

    if (aboutText && summary.paragraphs) {
        aboutText.innerHTML = summary.paragraphs.map(p => `
            <p class="about-text">${p}</p>
        `).join('');
    }

    if (aboutStats && summary.stats) {
        aboutStats.innerHTML = summary.stats.map(stat => `
            <div class="stat-item">
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }
}

function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline || !CONFIG.experience) return;

    timeline.innerHTML = CONFIG.experience.map(exp => `
        <div class="timeline-item fade-in">
            <div class="timeline-marker">
                <i class="${exp.icon}"></i>
            </div>
            <div class="timeline-content glass-card">
                <div class="timeline-header">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <span class="timeline-company">
                        <i class="fas fa-building"></i> ${exp.company}
                    </span>
                </div>
                <span class="timeline-date">
                    <i class="fas fa-calendar"></i> ${exp.date}
                </span>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-tags">
                    ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const grid = document.getElementById('educationGrid');
    if (!grid || !CONFIG.education) return;

    grid.innerHTML = CONFIG.education.map(edu => `
        <div class="education-card glass-card fade-in">
            <div class="education-icon">
                <i class="${edu.icon}"></i>
            </div>
            <div class="education-badge ${edu.badgeClass}">${edu.badge}</div>
            <h3 class="education-degree">${edu.degree}</h3>
            <p class="education-field">${edu.field}</p>
            <p class="education-school">
                <i class="fas fa-university"></i> ${edu.school}
            </p>
            <span class="education-date">${edu.date}</span>
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || !CONFIG.projects) return;

    grid.innerHTML = CONFIG.projects.map(project => `
        <div class="project-card glass-card fade-in ${project.featured ? 'featured' : ''}">
            ${project.featured ? `
                <div class="project-featured-badge">
                    <i class="fas fa-${project.featuredLabel === 'Patent' ? 'award' : 'star'}"></i> ${project.featuredLabel}
                </div>
            ` : ''}
            <div class="project-image">
                <div class="project-image-placeholder ${project.iconClass || ''}">
                    <i class="${project.icon}"></i>
                </div>
                ${project.github ? `
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                           class="project-link" aria-label="View on GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                ` : ''}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-date"><i class="fas fa-calendar"></i> ${project.date}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !CONFIG.certifications) return;

    grid.innerHTML = CONFIG.certifications.map(cert => `
        <div class="cert-card glass-card fade-in">
            <div class="cert-icon ${cert.iconClass}">
                <i class="${cert.icon}"></i>
            </div>
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <span class="cert-date ${cert.ongoing ? 'ongoing' : ''}">${cert.date}</span>
            <p class="cert-description">${cert.description}</p>
            ${cert.certId ? `<span class="cert-id">ID: ${cert.certId}</span>` : ''}
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container || !CONFIG.skills) return;

    const { technical, tools } = CONFIG.skills;
    const { languages } = CONFIG;

    container.innerHTML = `
        <div class="skills-category fade-in">
            <h3 class="skills-category-title">
                <i class="fas fa-code"></i> Technical Skills
            </h3>
            <div class="skills-tags">
                ${technical.map(skill => `
                    <div class="skill-tag">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="skills-category fade-in">
            <h3 class="skills-category-title">
                <i class="fas fa-wrench"></i> Tools & Security
            </h3>
            <div class="skills-tags">
                ${tools.map(skill => `
                    <div class="skill-tag">
                        <i class="${skill.icon}"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        ${languages ? `
            <div class="skills-category fade-in">
                <h3 class="skills-category-title">
                    <i class="fas fa-language"></i> Languages
                </h3>
                <div class="languages-grid">
                    ${languages.map(lang => `
                        <div class="language-item">
                            <div class="language-flag">${lang.flag}</div>
                            <span class="language-name">${lang.name}</span>
                            <span class="language-level ${lang.levelClass}">${lang.level}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

function renderInterests() {
    const grid = document.getElementById('interestsGrid');
    if (!grid || !CONFIG.interests) return;

    grid.innerHTML = CONFIG.interests.map(interest => `
        <div class="interest-card glass-card fade-in">
            <div class="interest-icon">
                <i class="${interest.icon}"></i>
            </div>
            <h3 class="interest-title">${interest.title}</h3>
            <p class="interest-description">${interest.description}</p>
        </div>
    `).join('');
}

function renderTraining() {
    const list = document.getElementById('trainingList');
    if (!list || !CONFIG.training) return;

    list.innerHTML = CONFIG.training.map(item => `
        <div class="training-item glass-card fade-in">
            <div class="training-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="training-content">
                <h3 class="training-title">${item.title}</h3>
                <p class="training-issuer">${item.issuer} • ${item.date}</p>
                <p class="training-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

function renderReferences() {
    const grid = document.getElementById('referencesGrid');
    if (!grid || !CONFIG.references) return;

    // Simple format - no quotes, just name, position, email
    grid.innerHTML = CONFIG.references.map(ref => `
        <div class="reference-card glass-card fade-in simple">
            <div class="reference-author">
                <div class="reference-avatar">
                    <i class="fas fa-user-tie"></i>
                </div>
                <div class="reference-info">
                    <h4 class="reference-name">${ref.name}</h4>
                    <p class="reference-title">${ref.position}</p>
                    <a href="mailto:${ref.email}" class="reference-email">
                        <i class="fas fa-envelope"></i> ${ref.email}
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const contactInfo = document.getElementById('contactInfo');
    if (!contactInfo || !CONFIG.personal) return;

    const { personal } = CONFIG;
    const socialIcons = {
        github: { icon: 'fab fa-github', class: 'github' },
        linkedin: { icon: 'fab fa-linkedin-in', class: 'linkedin' },
        twitter: { icon: 'fab fa-twitter', class: 'twitter' }
    };

    contactInfo.innerHTML = `
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:${personal.email}">${personal.email}</a>
            </div>
        </div>
        
        <div class="contact-item">
            <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
                <h3>Location</h3>
                <p>${personal.location}</p>
            </div>
        </div>
        
        <div class="contact-social">
            <h3>Connect with me</h3>
            <div class="social-links">
                ${Object.entries(personal.social).map(([platform, url]) => `
                    <a href="${url}" target="_blank" rel="noopener noreferrer" 
                       class="social-btn ${socialIcons[platform]?.class || ''}" 
                       aria-label="${platform}">
                        <i class="${socialIcons[platform]?.icon || 'fas fa-link'}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderFooter() {
    const { personal, navigation } = CONFIG;
    if (!personal) return;

    const footerName = document.getElementById('footerName');
    const footerTitle = document.getElementById('footerTitle');
    const footerLinks = document.getElementById('footerLinks');
    const footerCopyright = document.getElementById('footerCopyright');
    const currentYear = document.getElementById('currentYear');

    if (footerName) footerName.textContent = personal.name;
    if (footerTitle) footerTitle.textContent = personal.title;
    if (footerCopyright) footerCopyright.textContent = personal.name;
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    if (footerLinks && navigation) {
        footerLinks.innerHTML = navigation.slice(0, 4).map(item => `
            <a href="${item.href}">${item.label}</a>
        `).join('');
    }
}

// ===================================
// RESUME GENERATOR
// ===================================

function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (!downloadBtn) return;

    downloadBtn.addEventListener('click', generateResume);
}

function generateResume() {
    const { personal, summary, experience, education, skills, certifications, languages } = CONFIG;

    // Create resume HTML
    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name} - Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1a1a2e;
            line-height: 1.5;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #0a4d68;
            padding-bottom: 20px;
            margin-bottom: 25px;
        }
        .header h1 {
            font-size: 28px;
            color: #0a4d68;
            margin-bottom: 5px;
        }
        .header .title {
            font-size: 16px;
            color: #666;
            margin-bottom: 10px;
        }
        .header .contact {
            font-size: 13px;
            color: #444;
        }
        .header .contact a { color: #0a4d68; text-decoration: none; }
        .section { margin-bottom: 22px; }
        .section h2 {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #0a4d68;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 6px;
            margin-bottom: 12px;
        }
        .section p { font-size: 13px; margin-bottom: 8px; }
        .item { margin-bottom: 15px; }
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 4px;
        }
        .item-title { font-weight: 600; font-size: 14px; }
        .item-company { color: #0a4d68; font-size: 13px; }
        .item-date { font-size: 12px; color: #666; white-space: nowrap; }
        .item-desc { font-size: 13px; color: #444; }
        .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .skill-tag {
            background: #e8f4f8;
            color: #0a4d68;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
        }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .cert-item { font-size: 13px; margin-bottom: 6px; }
        .cert-item strong { color: #0a4d68; }
        @media print {
            body { padding: 20px; }
            .section { break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${personal.name}</h1>
        <div class="title">${personal.title}</div>
        <div class="contact">
            ${personal.location} • 
            <a href="mailto:${personal.email}">${personal.email}</a> • 
            <a href="${personal.social.linkedin}">LinkedIn</a> • 
            <a href="${personal.social.github}">GitHub</a>
        </div>
    </div>
    
    <div class="section">
        <h2>Professional Summary</h2>
        <p>${summary.paragraphs[0].replace(/<\/?strong>/g, '')}</p>
    </div>
    
    <div class="section">
        <h2>Experience</h2>
        ${experience.map(exp => `
            <div class="item">
                <div class="item-header">
                    <div>
                        <div class="item-title">${exp.title}</div>
                        <div class="item-company">${exp.company}</div>
                    </div>
                    <div class="item-date">${exp.date}</div>
                </div>
                <div class="item-desc">${exp.description.replace(/<\/?strong>/g, '')}</div>
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h2>Education</h2>
        ${education.map(edu => `
            <div class="item">
                <div class="item-header">
                    <div>
                        <div class="item-title">${edu.degree} in ${edu.field}</div>
                        <div class="item-company">${edu.school}</div>
                    </div>
                    <div class="item-date">${edu.date}</div>
                </div>
            </div>
        `).join('')}
    </div>
    
    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-list">
            ${skills.technical.map(s => `<span class="skill-tag">${s.name}</span>`).join('')}
            ${skills.tools.map(s => `<span class="skill-tag">${s.name}</span>`).join('')}
        </div>
    </div>
    
    <div class="two-col">
        <div class="section">
            <h2>Certifications</h2>
            ${certifications.slice(0, 4).map(cert => `
                <div class="cert-item">
                    <strong>${cert.title}</strong><br>
                    ${cert.issuer} (${cert.date})
                </div>
            `).join('')}
        </div>
        
        <div class="section">
            <h2>Languages</h2>
            ${languages.map(lang => `
                <div class="cert-item">
                    <strong>${lang.name}</strong>: ${lang.level}
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>`;

    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(resumeHTML);
    printWindow.document.close();

    // Auto-trigger print dialog after a short delay
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

// ===================================
// INTERACTION HANDLERS
// ===================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const sections = document.querySelectorAll('section[id]');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded',
                navToggle.classList.contains('active'));
        });

        // Close menu when clicking a link
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Scroll behavior
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    };

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => observer.observe(element));
    } else {
        fadeElements.forEach(element => element.classList.add('visible'));
    }
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    const handleScroll = () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Console greeting
console.log(`
╔═══════════════════════════════════════════════════════╗
║  Portfolio powered by config.js                       ║
║  Edit js/config.js to update content!                 ║
║                                                       ║
║  🔗 GitHub: github.com/zer0dayf                       ║
╚═══════════════════════════════════════════════════════╝
`);
