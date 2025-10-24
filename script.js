// ==================== Language Switching ====================
const translations = {
    ar: {
        // Navigation
        nav_home: 'الرئيسية',
        nav_about: 'من نحن',
        nav_ceo: 'المؤسس',
        nav_gallery: 'معرض الصور',
        nav_services: 'خدماتنا',
        nav_projects: 'مشاريعنا',
        nav_contact: 'تواصل معنا',
        
        // Logo
        logo_text: 'رمال',
        logo_subtext: 'للاستثمار والتطوير العقاري',
        
        // Hero Section
        hero_slogan: 'شريكك الموثوق في التطوير العقاري بدمياط الجديدة',
        hero_description: 'نوفر حلول عقارية مبتكرة تناسب جميع احتياجات عملائنا',
        cta_button: 'تواصل معنا',
        hero_feature_1: 'موثوقية',
        hero_feature_2: 'ابتكار',
        hero_feature_3: 'جودة',
        
        // Stats
        stat_1: 'سنوات من الخبرة',
        stat_2: 'مشروع مكتمل',
        stat_3: 'عميل سعيد',
        stat_4: '% نسبة الرضا',
        
        // About Section
        about_label: 'من نحن',
        about_title: 'رمال للاستثمار والتطوير العقاري',
        about_subtitle: 'شركة عقارية موثوقة في دمياط الجديدة',
        about_p1: 'رمال هي شركة عقارية رائدة تتخصص في شراء وبيع وتبديل العقارات في دمياط الجديدة. نحن نقدم حلولاً عقارية مبتكرة ومخصصة لتلبية جميع احتياجات عملائنا، مع التركيز على الجودة والموثوقية والابتكار.',
        about_p2: 'مع سنوات من الخبرة في سوق العقارات المصري، أصبحت رمال الشريك الموثوق للعديد من العملاء الذين يبحثون عن الاستثمارات العقارية الناجحة والتطوير المستدام.',
        value_1_title: 'الموثوقية',
        value_1_desc: 'نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة والشفافية',
        value_2_title: 'الابتكار',
        value_2_desc: 'نستخدم أحدث التقنيات والحلول لتقديم خدمات عقارية متميزة',
        value_3_title: 'الجودة',
        value_3_desc: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا وخدماتنا',
        
        // CEO Section
        ceo_label: 'القيادة',
        ceo_title: 'مؤسس الشركة',
        ceo_badge: '12+ سنة خبرة',
        ceo_name: 'مهندس طارق مجاهد',
        ceo_position: 'مؤسس ورئيس مجلس الإدارة',
        ceo_field_title: 'المجال',
        ceo_field_desc: 'التطوير العقاري في مصر',
        ceo_experience_title: 'الخبرة',
        ceo_experience_desc: 'خريج كلية الهندسة المعمارية، وخبرة تزيد عن 12 عامًا في المجال العقاري والهندسي، بالإضافة إلى العمل في كبرى الشركات العقارية داخل مصر',
        ceo_company_title: 'الشركة',
        ceo_company_desc: 'مؤسس ورئيس مجلس إدارة رمال للتطوير العقاري، التي تأسست عام 2020',
        ceo_achievements_title: 'الإنجازات',
        ceo_achievements_desc: 'شارك في تنفيذ أكثر من 200 مشروع عقاري متنوع بين السكني والتجاري والإداري والطبي، مع الاهتمام بالجودة العالية والتصميم المتميز واختيار المواقع الاستراتيجية',
        ceo_quote: '"نؤمن بأن النجاح الحقيقي يأتي من بناء علاقات طويلة الأمد مع عملائنا وتقديم قيمة حقيقية في كل مشروع"',
        
        // Gallery Section
        gallery_label: 'معرض الصور',
        gallery_title: 'استكشف مشاريعنا المتميزة',
        gallery_description: 'تصفح مجموعة من أفضل التصاميم والمشاريع العقارية',
        gallery_hint: 'اسحب لرؤية المزيد',
        
        // Services Section
        services_label: 'خدماتنا',
        services_title: 'ما نقدمه لعملائنا',
        services_description: 'نقدم مجموعة شاملة من الخدمات العقارية المتخصصة',
        service_1_title: 'شراء العقارات',
        service_1_desc: 'نساعدك في العثور على العقار المثالي الذي يناسب احتياجاتك وميزانيتك مع ضمان أفضل الأسعار والمواقع',
        service_1_feat_1: 'استشارات عقارية متخصصة',
        service_1_feat_2: 'تقييم دقيق للعقارات',
        service_1_feat_3: 'إجراءات قانونية آمنة',
        service_2_title: 'بيع العقارات',
        service_2_desc: 'نوفر لك أفضل الفرص لبيع عقارك بأعلى سعر في السوق من خلال استراتيجيات تسويق فعالة وشبكة واسعة من العملاء',
        service_2_feat_1: 'تسويق احترافي',
        service_2_feat_2: 'تقييم سوقي دقيق',
        service_2_feat_3: 'إتمام صفقات سريعة',
        service_3_title: 'تبديل العقارات',
        service_3_desc: 'نقدم خدمات تبديل العقارات بطريقة سلسة وآمنة، مما يتيح لك الانتقال إلى عقار أفضل يناسب احتياجاتك المتغيرة',
        service_3_feat_1: 'تقييم عادل للطرفين',
        service_3_feat_2: 'إجراءات قانونية كاملة',
        service_3_feat_3: 'حلول مرنة ومبتكرة',
        service_4_title: 'الاستثمار العقاري',
        service_4_desc: 'نوفر فرص استثمارية مدروسة ومربحة في سوق العقارات مع تحليل شامل للعوائد والمخاطر',
        service_4_feat_1: 'دراسات جدوى احترافية',
        service_4_feat_2: 'متابعة استثماراتك',
        service_4_feat_3: 'عوائد استثمارية مضمونة',
        service_5_title: 'التطوير العقاري',
        service_5_desc: 'نقوم بتطوير المشاريع العقارية الحديثة بأعلى معايير الجودة والتصميم العصري',
        service_5_feat_1: 'تصاميم عصرية',
        service_5_feat_2: 'تنفيذ احترافي',
        service_5_feat_3: 'التزام بالمواعيد',
        service_6_title: 'الاستشارات العقارية',
        service_6_desc: 'نقدم استشارات عقارية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة في استثماراتك',
        service_6_feat_1: 'خبراء متخصصون',
        service_6_feat_2: 'تحليل السوق',
        service_6_feat_3: 'إرشادات قانونية',
        
        // Projects Section
        projects_label: 'مشاريعنا',
        projects_title: 'أحدث المشاريع العقارية',
        projects_description: 'اكتشف مشاريعنا المتميزة في دمياط الجديدة',
        filter_all: 'الكل',
        filter_residential: 'سكني',
        filter_commercial: 'تجاري',
        filter_land: 'أراضي',
        project_1_title: 'مشروع سكني فاخر',
        project_1_location: 'دمياط الجديدة',
        project_2_title: 'تطوير أراضي',
        project_2_location: 'منطقة بيت الوطن',
        project_3_title: 'مخطط معماري حديث',
        project_3_location: 'تصاميم متطورة',
        project_4_title: 'مجمع سكني متكامل',
        project_4_location: 'دمياط الجديدة',
        project_5_title: 'مركز تجاري حديث',
        project_5_location: 'موقع استراتيجي',
        project_6_title: 'فيلات فاخرة',
        project_6_location: 'تصميم عصري',
        
        // Contact Section
        contact_label: 'تواصل معنا',
        contact_title: 'ابدأ رحلتك العقارية معنا',
        contact_description: 'نحن هنا لمساعدتك في تحقيق أهدافك العقارية',
        contact_address_title: 'العنوان',
        contact_address: 'بيت الوطن<br>شارع صلاح سالم<br>156 B',
        contact_phone_title: 'الهاتف',
        contact_phone_hours: 'متاح من 9 صباحاً - 8 مساءً',
        contact_email_title: 'البريد الإلكتروني',
        contact_email_response: 'نرد خلال 24 ساعة',
        form_name: 'الاسم',
        form_phone: 'رقم الهاتف',
        form_email: 'البريد الإلكتروني',
        form_message: 'رسالتك',
        form_submit: 'إرسال الرسالة',
        form_success_title: 'تم الإرسال بنجاح!',
        form_success_message: 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.',
        
        // Footer
        footer_description: 'شريكك الموثوق في التطوير العقاري بدمياط الجديدة. نقدم حلول عقارية مبتكرة تناسب جميع احتياجات عملائنا.',
        footer_quick_links: 'روابط سريعة',
        footer_services: 'خدماتنا',
        footer_service_1: 'شراء العقارات',
        footer_service_2: 'بيع العقارات',
        footer_service_3: 'تبديل العقارات',
        footer_service_4: 'الاستشارات العقارية',
        footer_contact: 'تواصل معنا',
        footer_copyright: '© 2025 رمال للاستثمار والتطوير العقاري. جميع الحقوق محفوظة.'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About Us',
        nav_ceo: 'Founder',
        nav_gallery: 'Gallery',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_contact: 'Contact Us',
        
        // Logo
        logo_text: 'RIMAL',
        logo_subtext: 'Real Estate Investment & Development',
        
        // Hero Section
        hero_slogan: 'Your Trusted Partner in Real Estate Development in New Damietta',
        hero_description: 'We provide innovative real estate solutions that meet all our clients\' needs',
        cta_button: 'Contact Us',
        hero_feature_1: 'Reliability',
        hero_feature_2: 'Innovation',
        hero_feature_3: 'Quality',
        
        // Stats
        stat_1: 'Years of Experience',
        stat_2: 'Completed Projects',
        stat_3: 'Happy Clients',
        stat_4: '% Satisfaction Rate',
        
        // About Section
        about_label: 'About Us',
        about_title: 'RIMAL Real Estate Investment & Development',
        about_subtitle: 'A Trusted Real Estate Company in New Damietta',
        about_p1: 'RIMAL is a leading real estate company specializing in buying, selling, and exchanging properties in New Damietta. We provide innovative and customized real estate solutions to meet all our clients\' needs, focusing on quality, reliability, and innovation.',
        about_p2: 'With years of experience in the Egyptian real estate market, RIMAL has become the trusted partner for many clients seeking successful real estate investments and sustainable development.',
        value_1_title: 'Reliability',
        value_1_desc: 'We build long-term relationships with our clients based on trust and transparency',
        value_2_title: 'Innovation',
        value_2_desc: 'We use the latest technologies and solutions to provide exceptional real estate services',
        value_3_title: 'Quality',
        value_3_desc: 'We commit to the highest quality standards in all our projects and services',
        
        // CEO Section
        ceo_label: 'Leadership',
        ceo_title: 'Company Founder',
        ceo_badge: '12+ Years of Experience',
        ceo_name: 'Eng. Tarek Megahed',
        ceo_position: 'Founder & Chairman',
        ceo_field_title: 'Field',
        ceo_field_desc: 'Real Estate Development in Egypt',
        ceo_experience_title: 'Experience',
        ceo_experience_desc: 'Graduate of the Faculty of Architectural Engineering, with over 12 years of experience in real estate and engineering, in addition to working in major real estate companies in Egypt',
        ceo_company_title: 'Company',
        ceo_company_desc: 'Founder and Chairman of RIMAL Real Estate Development, established in 2020',
        ceo_achievements_title: 'Achievements',
        ceo_achievements_desc: 'Participated in the implementation of more than 200 diverse real estate projects including residential, commercial, administrative, and medical, with attention to high quality, distinctive design, and strategic location selection',
        ceo_quote: '"We believe that true success comes from building long-term relationships with our clients and delivering real value in every project"',
        
        // Gallery Section
        gallery_label: 'Gallery',
        gallery_title: 'Explore Our Distinctive Projects',
        gallery_description: 'Browse a collection of the best designs and real estate projects',
        gallery_hint: 'Swipe to see more',
        
        // Services Section
        services_label: 'Our Services',
        services_title: 'What We Offer Our Clients',
        services_description: 'We provide a comprehensive range of specialized real estate services',
        service_1_title: 'Property Purchase',
        service_1_desc: 'We help you find the perfect property that suits your needs and budget while ensuring the best prices and locations',
        service_1_feat_1: 'Specialized real estate consultations',
        service_1_feat_2: 'Accurate property valuation',
        service_1_feat_3: 'Safe legal procedures',
        service_2_title: 'Property Sale',
        service_2_desc: 'We provide you with the best opportunities to sell your property at the highest market price through effective marketing strategies and a wide network of clients',
        service_2_feat_1: 'Professional marketing',
        service_2_feat_2: 'Accurate market valuation',
        service_2_feat_3: 'Quick deal completion',
        service_3_title: 'Property Exchange',
        service_3_desc: 'We offer property exchange services in a smooth and safe manner, allowing you to move to a better property that suits your changing needs',
        service_3_feat_1: 'Fair evaluation for both parties',
        service_3_feat_2: 'Complete legal procedures',
        service_3_feat_3: 'Flexible and innovative solutions',
        service_4_title: 'Real Estate Investment',
        service_4_desc: 'We provide well-studied and profitable investment opportunities in the real estate market with comprehensive analysis of returns and risks',
        service_4_feat_1: 'Professional feasibility studies',
        service_4_feat_2: 'Investment follow-up',
        service_4_feat_3: 'Guaranteed investment returns',
        service_5_title: 'Real Estate Development',
        service_5_desc: 'We develop modern real estate projects with the highest quality standards and contemporary design',
        service_5_feat_1: 'Modern designs',
        service_5_feat_2: 'Professional execution',
        service_5_feat_3: 'Deadline commitment',
        service_6_title: 'Real Estate Consulting',
        service_6_desc: 'We provide specialized real estate consultations to help you make the right decisions in your investments',
        service_6_feat_1: 'Specialized experts',
        service_6_feat_2: 'Market analysis',
        service_6_feat_3: 'Legal guidance',
        
        // Projects Section
        projects_label: 'Our Projects',
        projects_title: 'Latest Real Estate Projects',
        projects_description: 'Discover our distinctive projects in New Damietta',
        filter_all: 'All',
        filter_residential: 'Residential',
        filter_commercial: 'Commercial',
        filter_land: 'Land',
        project_1_title: 'Luxury Residential Project',
        project_1_location: 'New Damietta',
        project_2_title: 'Land Development',
        project_2_location: 'Beit El Watan Area',
        project_3_title: 'Modern Architectural Plan',
        project_3_location: 'Advanced Designs',
        project_4_title: 'Integrated Residential Complex',
        project_4_location: 'New Damietta',
        project_5_title: 'Modern Commercial Center',
        project_5_location: 'Strategic Location',
        project_6_title: 'Luxury Villas',
        project_6_location: 'Modern Design',
        
        // Contact Section
        contact_label: 'Contact Us',
        contact_title: 'Start Your Real Estate Journey With Us',
        contact_description: 'We are here to help you achieve your real estate goals',
        contact_address_title: 'Address',
        contact_address: 'Beit El Watan<br>Salah Salem Street<br>156 B',
        contact_phone_title: 'Phone',
        contact_phone_hours: 'Available from 9 AM - 8 PM',
        contact_email_title: 'Email',
        contact_email_response: 'We respond within 24 hours',
        form_name: 'Name',
        form_phone: 'Phone Number',
        form_email: 'Email',
        form_message: 'Your Message',
        form_submit: 'Send Message',
        form_success_title: 'Successfully Sent!',
        form_success_message: 'Thank you for contacting us. We will respond to you as soon as possible.',
        
        // Footer
        footer_description: 'Your trusted partner in real estate development in New Damietta. We provide innovative real estate solutions that meet all our clients\' needs.',
        footer_quick_links: 'Quick Links',
        footer_services: 'Our Services',
        footer_service_1: 'Property Purchase',
        footer_service_2: 'Property Sale',
        footer_service_3: 'Property Exchange',
        footer_service_4: 'Real Estate Consulting',
        footer_contact: 'Contact Us',
        footer_copyright: '© 2025 RIMAL Real Estate Investment & Development. All rights reserved.'
    }
};

// Current language (default: Arabic)
let currentLang = localStorage.getItem('language') || 'ar';

// Language Switcher Function
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update language switcher button text
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang === 'ar' ? 'EN' : 'ع';
    }
    
    // Update form success message translation
    updateFormSuccessMessages(lang);
}

// Update form success message
function updateFormSuccessMessages(lang) {
    window.formSuccessTitle = translations[lang].form_success_title;
    window.formSuccessMessage = translations[lang].form_success_message;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
    
    // Language switcher button event
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(newLang);
        });
    }
});

// ==================== Navigation & Menu ==================== 
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navigation on Scroll with Smooth Transition
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Animated Counters ====================
const statNumbers = document.querySelectorAll('.stat-number');
let counted = false;

function animateCounters() {
    const statsSection = document.querySelector('.stats-section');
    const statsSectionTop = statsSection.offsetTop;
    const statsSectionHeight = statsSection.offsetHeight;
    const scrollY = window.pageYOffset;
    
    if (scrollY > statsSectionTop - window.innerHeight / 2 && 
        scrollY < statsSectionTop + statsSectionHeight && 
        !counted) {
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        counted = true;
    }
}

window.addEventListener('scroll', animateCounters);

// ==================== Scroll Reveal Animation ====================
function revealOnScroll() {
    const elements = document.querySelectorAll('.section-header, .service-card, .project-card, .value-card, .stat-card, .about-text, .about-image, .contact-card, .contact-form-wrapper');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==================== CEO Section Scroll Animation ====================
function animateCEOSection() {
    const ceoSection = document.querySelector('.ceo-section');
    if (!ceoSection) return;
    
    const ceoImageWrapper = document.querySelector('.ceo-image-wrapper');
    const ceoInfo = document.querySelector('.ceo-info');
    const ceoDetailCards = document.querySelectorAll('.ceo-detail-card');
    const ceoQuote = document.querySelector('.ceo-quote');
    
    const sectionTop = ceoSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.75;
    
    if (sectionTop < triggerPoint) {
        // Animate image wrapper
        if (ceoImageWrapper && !ceoImageWrapper.classList.contains('animate-slide-in-right')) {
            ceoImageWrapper.classList.add('animate-slide-in-right');
        }
        
        // Animate info section
        if (ceoInfo && !ceoInfo.classList.contains('animate-slide-in-left')) {
            ceoInfo.classList.add('animate-slide-in-left');
        }
        
        // Animate detail cards with stagger
        ceoDetailCards.forEach((card, index) => {
            if (!card.classList.contains('animate-fade-in-up')) {
                setTimeout(() => {
                    card.classList.add('animate-fade-in-up');
                }, index * 150);
            }
        });
        
        // Animate quote
        if (ceoQuote && !ceoQuote.classList.contains('animate-fade-in-up')) {
            setTimeout(() => {
                ceoQuote.classList.add('animate-fade-in-up');
            }, ceoDetailCards.length * 150);
        }
    }
}

window.addEventListener('scroll', animateCEOSection);
window.addEventListener('load', animateCEOSection);

// ==================== Projects Filter ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ==================== Gallery Horizontal Scroll ====================
const galleryScroll = document.getElementById('galleryScroll');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (scrollLeftBtn && scrollRightBtn && galleryScroll) {
    scrollLeftBtn.addEventListener('click', () => {
        galleryScroll.scrollBy({
            left: -420,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        galleryScroll.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    });

    // Touch/swipe support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    galleryScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        galleryScroll.style.cursor = 'grabbing';
        startX = e.pageX - galleryScroll.offsetLeft;
        scrollLeft = galleryScroll.scrollLeft;
    });

    galleryScroll.addEventListener('mouseleave', () => {
        isDown = false;
        galleryScroll.style.cursor = 'grab';
    });

    galleryScroll.addEventListener('mouseup', () => {
        isDown = false;
        galleryScroll.style.cursor = 'grab';
    });

    galleryScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryScroll.offsetLeft;
        const walk = (x - startX) * 2;
        galleryScroll.scrollLeft = scrollLeft - walk;
    });
}

// Gallery images array
const galleryImages = [
    'images/3/Artboard 1.png',
    'images/3/Artboard 2.png',
    'images/3/Artboard 3.png',
    'images/3/Artboard 4.png',
    'images/3/Artboard 5.png',
    'images/3/Artboard 7.png',
    'images/3/Artboard 8.png',
    'images/3/Artboard 10.png',
    'images/3/Artboard 11.png',
    'images/3/Artboard 12.png',
];

// Function to open gallery lightbox
function openGalleryLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==================== Lightbox Gallery ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex = 0;

// All project images
const projectImages = [
    'images/3/Artboard 1.png',
    'images/2/Artboard 1.png',
    'images/1/Artboard 1.png',
    'images/3/Artboard 2.png',
    'images/3/Artboard 3.png',
    'images/3/Artboard 4.png',
    'images/3/Artboard 5.png',
    'images/3/Artboard 7.png',
    'images/3/Artboard 8.png',
    'images/1/Artboard 2.png',
    'images/1/Artboard 3.png',
    'images/1/Artboard 4.png',
    'images/1/Artboard 5.png',
    'images/2/Artboard 2.png',
    'images/2/Artboard 3.png',
    'images/2/Artboard 4.png',
    'images/2/Artboard 5.png',
    'images/2/Artboard 7.png',
    'images/2/Artboard 8.png',
];

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = projectImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Check which images array to use based on current image
    const currentSrc = lightboxImg.src;
    const isGalleryImage = galleryImages.some(img => currentSrc.includes(img));
    const imagesArray = isGalleryImage ? galleryImages : projectImages;
    
    // Loop back to start/end
    if (currentImageIndex < 0) {
        currentImageIndex = imagesArray.length - 1;
    } else if (currentImageIndex >= imagesArray.length) {
        currentImageIndex = 0;
    }
    
    lightboxImg.src = imagesArray[currentImageIndex];
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        changeImage(1); // In RTL, left arrow goes next
    } else if (e.key === 'ArrowRight') {
        changeImage(-1); // In RTL, right arrow goes previous
    }
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #1F3A4D 0%, #4EC3E0 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        box-shadow: 0 16px 48px rgba(31, 58, 77, 0.3);
        text-align: center;
        z-index: 10000;
        animation: fadeInUp 0.5s ease;
    `;
    
    successMessage.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 48px; margin-bottom: 15px;"></i>
        <h3 style="font-size: 24px; margin-bottom: 10px;">${window.formSuccessTitle || 'تم الإرسال بنجاح!'}</h3>
        <p style="font-size: 16px; opacity: 0.9;">${window.formSuccessMessage || 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.'}</p>
    `;
    
    document.body.appendChild(successMessage);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translate(-50%, -50%) translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 4000);
    
    // Reset form
    contactForm.reset();
    
    // Log form data (in production, send to server)
    console.log('Form submitted:', { name, phone, email, message });
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.querySelector('i').style.color = '#4EC3E0';
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.querySelector('i').style.color = '#8B9DAF';
        }
    });
});

// ==================== Scroll to Top Button ====================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== Service Cards Hover Effect ====================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        serviceCards.forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.6';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        serviceCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ==================== Parallax Effect for Hero ====================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    
    if (hero && heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== Prevent Right Click on Images (Optional) ====================
// Uncomment if you want to protect images
/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
*/

// ==================== Mobile Touch Optimization ====================
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image (in RTL)
        changeImage(1);
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image (in RTL)
        changeImage(-1);
    }
}

// ==================== Add WhatsApp Floating Button ====================
function createWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/201066053511';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        box-shadow: 0 8px 32px rgba(31, 58, 77, 0.2);
        z-index: 998;
        transition: all 0.3s ease;
        text-decoration: none;
    `;
    
    whatsappBtn.addEventListener('mouseenter', () => {
        whatsappBtn.style.transform = 'scale(1.1) translateY(-5px)';
        whatsappBtn.style.boxShadow = '0 12px 40px rgba(31, 58, 77, 0.3)';
    });
    
    whatsappBtn.addEventListener('mouseleave', () => {
        whatsappBtn.style.transform = 'scale(1) translateY(0)';
        whatsappBtn.style.boxShadow = '0 8px 32px rgba(31, 58, 77, 0.2)';
    });
    
    document.body.appendChild(whatsappBtn);
}

// Create WhatsApp button on load
window.addEventListener('load', createWhatsAppButton);

// ==================== Console Welcome Message ====================
console.log('%c🏢 RIMAL Real Estate', 'color: #4EC3E0; font-size: 24px; font-weight: bold;');
console.log('%cشريكك الموثوق في التطوير العقاري بدمياط الجديدة', 'color: #1F3A4D; font-size: 14px;');
console.log('%c📞 010 66053511', 'color: #4EC3E0; font-size: 12px;');

