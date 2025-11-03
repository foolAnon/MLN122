// ========================================
// SMOOTH SCROLLING
// ========================================
function scrollToModules() {
    const modulesSection = document.getElementById('modules');
    modulesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        mobileBtn.classList.remove('active');
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.padding = '1rem';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        mobileBtn.classList.add('active');
    }
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all module cards and intro cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.module-card, .intro-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ========================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ========================================
// RESIZE HANDLER FOR MOBILE MENU
// ========================================
window.addEventListener('resize', () => {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
        nav.style.background = 'transparent';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
    } else {
        nav.style.display = 'none';
    }
});
