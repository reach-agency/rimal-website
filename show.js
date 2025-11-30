/**
 * ==================== Show Page Specific JavaScript ====================
 * 
 * This file contains:
 * 1. Show page specific translations (Arabic & English)
 * 2. Functions to merge show translations with main translations
 * 3. Show page specific animations and interactions
 * 
 * Dependencies:
 * - script.js (must be loaded before this file)
 * - styles.css (base styles)
 * - show.css (show page specific styles)
 */

// ==================== Show Page Specific Translations ====================
const showTranslations = {
    ar: {
        // Project Show Page Hero
        project_hero_title: 'مشروع عقاري متميز في دمياط الجديدة',
        project_hero_description: 'اكتشف التفاصيل والمواصفات الكاملة لمشروعنا المتميز',

        // Project Details Section
        project_details_label: 'تفاصيل المشروع',
        project_details_title: 'مشروع سكني فاخر',
        project_location_title: 'الموقع',
        project_location: 'دمياط الجديدة - موقع استراتيجي يتميز بسهولة الوصول والخدمات المتكاملة',
        project_description_title: 'الوصف',
        project_description: 'مشروع سكني فاخر يجمع بين الأناقة والراحة، مصمم بأعلى معايير الجودة والتصميم العصري. يوفر المشروع وحدات سكنية متنوعة تناسب جميع الأذواق والميزانيات.',

        // Project Features
        project_feature_1_title: 'وحدات سكنية متنوعة',
        project_feature_1_desc: 'شقق بمساحات مختلفة تناسب جميع الاحتياجات',
        project_feature_2_title: 'أمن وسلامة',
        project_feature_2_desc: 'نظام أمن متكامل وخدمات حراسة على مدار الساعة',
        project_feature_3_title: 'مواقف سيارات',
        project_feature_3_desc: 'مواقف سيارات مخصصة لجميع الوحدات السكنية',
        project_feature_4_title: 'مناطق ترفيهية',
        project_feature_4_desc: 'حدائق ومساحات خضراء ومناطق ترفيهية للأطفال',
        project_feature_5_title: 'مراكز تجارية',
        project_feature_5_desc: 'قرب المشروع من المراكز التجارية والمدارس والمستشفيات',
        project_feature_6_title: 'تشطيب فاخر',
        project_feature_6_desc: 'تشطيب عالي الجودة بأفضل المواد والأساليب',

        // Specifications Section
        specifications_label: 'المواصفات',
        specifications_title: 'مواصفات المشروع',
        specifications_description: 'تعرف على المواصفات والخدمات المتوفرة في المشروع',

        // Area Specifications
        spec_area_title: 'المساحات',
        spec_area_desc: 'شقق بمساحات تتراوح من 100 متر مربع إلى 200 متر مربع',
        spec_area_1: 'شقق بغرفتين: 100-120 م²',
        spec_area_2: 'شقق بثلاث غرف: 130-150 م²',
        spec_area_3: 'شقق بأربع غرف: 180-200 م²',

        // Building Specifications
        spec_building_title: 'البناء',
        spec_building_desc: 'مباني عالية الجودة بمواد بناء مستوردة ومحلية معتمدة',
        spec_building_1: 'هيكل خرساني مسلح',
        spec_building_2: 'عزل حراري ومائي',
        spec_building_3: 'نوافذ ألومنيوم عالية الجودة',

        // Finishing Specifications
        spec_finishing_title: 'التشطيب',
        spec_finishing_desc: 'تشطيب فاخر بمواد عالية الجودة وألوان عصرية',
        spec_finishing_1: 'سيراميك وبورسلين راقي',
        spec_finishing_2: 'دهانات أوروبية عالية الجودة',
        spec_finishing_3: 'أبواب ونوافذ فاخرة',

        // Utilities Specifications
        spec_utilities_title: 'المرافق والخدمات',
        spec_utilities_desc: 'خدمات ومرافق متكاملة لراحة السكان',
        spec_utilities_1: 'كهرباء ومياه وغاز',
        spec_utilities_2: 'إنترنت فائق السرعة',
        spec_utilities_3: 'نظام أمن متكامل',

        // Location Specifications
        spec_location_title: 'الموقع',
        spec_location_desc: 'موقع استراتيجي بجوار أهم الخدمات والمرافق',
        spec_location_1: 'قرب المدارس والجامعات',
        spec_location_2: 'قرب المستشفيات والمراكز الطبية',
        spec_location_3: 'قرب المراكز التجارية',

        // Delivery Specifications
        spec_delivery_title: 'التسليم',
        spec_delivery_desc: 'خطط تسليم مرنة تناسب جميع العملاء',
        spec_delivery_1: 'نظام تقسيط مريح',
        spec_delivery_2: 'تسليم على المفتاح',
        spec_delivery_3: 'ضمانات قانونية'
    },
    en: {
        // Project Show Page Hero
        project_hero_title: 'Distinguished Real Estate Project in New Damietta',
        project_hero_description: 'Discover the complete details and specifications of our distinguished project',

        // Project Details Section
        project_details_label: 'Project Details',
        project_details_title: 'Luxury Residential Project',
        project_location_title: 'Location',
        project_location: 'New Damietta - A strategic location characterized by easy access and integrated services',
        project_description_title: 'Description',
        project_description: 'A luxury residential project that combines elegance and comfort, designed with the highest quality standards and modern design. The project offers diverse residential units to suit all tastes and budgets.',

        // Project Features
        project_feature_1_title: 'Diverse Residential Units',
        project_feature_1_desc: 'Apartments with different areas to suit all needs',
        project_feature_2_title: 'Security & Safety',
        project_feature_2_desc: 'Integrated security system and 24/7 guard services',
        project_feature_3_title: 'Parking Spaces',
        project_feature_3_desc: 'Dedicated parking spaces for all residential units',
        project_feature_4_title: 'Recreational Areas',
        project_feature_4_desc: 'Gardens, green spaces, and recreational areas for children',
        project_feature_5_title: 'Commercial Centers',
        project_feature_5_desc: 'Close to commercial centers, schools, and hospitals',
        project_feature_6_title: 'Luxury Finishing',
        project_feature_6_desc: 'High-quality finishing with the best materials and methods',

        // Specifications Section
        specifications_label: 'Specifications',
        specifications_title: 'Project Specifications',
        specifications_description: 'Learn about the specifications and services available in the project',

        // Area Specifications
        spec_area_title: 'Areas',
        spec_area_desc: 'Apartments with areas ranging from 100 square meters to 200 square meters',
        spec_area_1: '2-bedroom apartments: 100-120 m²',
        spec_area_2: '3-bedroom apartments: 130-150 m²',
        spec_area_3: '4-bedroom apartments: 180-200 m²',

        // Building Specifications
        spec_building_title: 'Building',
        spec_building_desc: 'High-quality buildings with imported and locally certified building materials',
        spec_building_1: 'Reinforced concrete structure',
        spec_building_2: 'Thermal and waterproof insulation',
        spec_building_3: 'High-quality aluminum windows',

        // Finishing Specifications
        spec_finishing_title: 'Finishing',
        spec_finishing_desc: 'Luxury finishing with high-quality materials and modern colors',
        spec_finishing_1: 'Elegant ceramic and porcelain',
        spec_finishing_2: 'High-quality European paints',
        spec_finishing_3: 'Luxury doors and windows',

        // Utilities Specifications
        spec_utilities_title: 'Utilities & Services',
        spec_utilities_desc: 'Integrated services and utilities for residents\' comfort',
        spec_utilities_1: 'Electricity, water, and gas',
        spec_utilities_2: 'High-speed internet',
        spec_utilities_3: 'Integrated security system',

        // Location Specifications
        spec_location_title: 'Location',
        spec_location_desc: 'Strategic location next to the most important services and facilities',
        spec_location_1: 'Close to schools and universities',
        spec_location_2: 'Close to hospitals and medical centers',
        spec_location_3: 'Close to commercial centers',

        // Delivery Specifications
        spec_delivery_title: 'Delivery',
        spec_delivery_desc: 'Flexible delivery plans to suit all clients',
        spec_delivery_1: 'Comfortable installment system',
        spec_delivery_2: 'Turnkey delivery',
        spec_delivery_3: 'Legal guarantees'
    }
};

// ==================== Merge Show Translations with Main Translations ====================
// This function merges show page translations with main translations
function mergeShowTranslations() {
    // Wait for script.js to load and initialize translations
    if (typeof window.translations === 'undefined') {
        // If translations not loaded yet, wait a bit and try again
        setTimeout(mergeShowTranslations, 50);
        return;
    }

    // Merge show translations into main translations for both languages
    ['ar', 'en'].forEach(lang => {
        if (window.translations[lang] && showTranslations[lang]) {
            Object.assign(window.translations[lang], showTranslations[lang]);
        }
    });
}

// ==================== Initialize Show Page ====================
// Wait for DOM and script.js to be fully loaded
(function initShowPage() {
    // Function to initialize after everything is loaded
    function initialize() {
        // Merge translations
        mergeShowTranslations();

        // If switchLanguage function exists, call it to update the page
        if (typeof window.switchLanguage === 'function') {
            const currentLang = localStorage.getItem('language') || 'ar';
            window.switchLanguage(currentLang);
        }
    }

    // Try to initialize immediately if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Wait a bit more for script.js to load
            setTimeout(initialize, 100);
        });
    } else {
        // DOM is already ready
        setTimeout(initialize, 100);
    }

    // Also try after window load to ensure everything is ready
    window.addEventListener('load', () => {
        setTimeout(initialize, 50);
    });
})();

// ==================== Show Page Specific Functions ====================
// Additional functions specific to show page can be added here

// Example: Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ==================== Project Details Animation ====================
function animateProjectDetails() {
    const projectDetails = document.querySelectorAll('.value-card, .service-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    projectDetails.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    animateProjectDetails();
});

// ==================== Export for use in main script ====================
// Make showTranslations available globally
window.showTranslations = showTranslations;

