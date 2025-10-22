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
        <h3 style="font-size: 24px; margin-bottom: 10px;">تم الإرسال بنجاح!</h3>
        <p style="font-size: 16px; opacity: 0.9;">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
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

