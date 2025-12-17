// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSEO();
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initStatsCounters();
    initParallaxEffects();
    initLazyLoading();
    initMobileOptimizations();
    initPerformanceOptimization();

    // Add page load animation
    document.body.classList.add('fade-in');

    // 设置页面标题和描述
    updatePageMetadata();
});

// SEO优化初始化
function initSEO() {
    // 添加结构化数据
    addBreadcrumbStructuredData();

    // 优化图片alt属性
    optimizeImageAltTexts();

    // 设置语言属性
    document.documentElement.lang = 'zh-CN';

    // 添加canonical链接
    addCanonicalLink();

    // 优化内部链接
    optimizeInternalLinks();
}

// 添加面包屑结构化数据
function addBreadcrumbStructuredData() {
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "首页",
                "item": "https://xianyu110.github.io/gemini3flash/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Google Gemini 3 Flash评测",
                "item": "https://xianyu110.github.io/gemini3flash/"
            }
        ]
    });
    document.head.appendChild(breadcrumbScript);
}

// 优化图片alt文本
function optimizeImageAltTexts() {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
        const section = img.closest('section');
        const sectionTitle = section ? section.querySelector('h2, h3')?.textContent : '';
        img.alt = `Google Gemini 3 Flash ${sectionTitle || '演示图片'} ${index + 1}`;
    });
}

// 添加canonical链接
function addCanonicalLink() {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = 'https://xianyu110.github.io/gemini3flash/';
        document.head.appendChild(canonicalLink);
    }
}

// 优化内部链接
function optimizeInternalLinks() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    // 更新URL但不刷新页面
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// 更新页面元数据
function updatePageMetadata() {
    // 动态更新页面标题
    const performanceScore = document.querySelector('.stat-number');
    if (performanceScore && performanceScore.textContent) {
        const title = document.title;
        document.title = `Gemini 3 Flash ${performanceScore.textContent} SWE-bench | ${title}`;
    }

    // 更新页面描述
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = heroSubtitle.textContent.replace(/<[^>]*>/g, '').substring(0, 160);
        }
    }
}

// 性能优化
function initPerformanceOptimization() {
    // 预加载关键资源
    const criticalImages = document.querySelectorAll('img[src*="mmbiz.qpic.cn"]');
    criticalImages.forEach(img => {
        if (img.complete) return;

        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = img.src;
        document.head.appendChild(preloadLink);
    });

    // 优化字体加载
    const fonts = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fonts.forEach(font => {
        font.rel = 'preload';
        font.as = 'style';
        font.onload = function() {
            this.rel = 'stylesheet';
        };
    });

    // 延迟加载非关键图片
    setTimeout(() => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }, 1000);
}

// Navigation Menu Toggle
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }

            // Add background blur on scroll
            if (scrollTop > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // For performance, unobserve after animation
                if (entry.target.dataset.once !== 'false') {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .performance-card,
        .feature-item,
        .price-card,
        .dev-feature,
        .access-card,
        .section-header,
        .hero-stats,
        .platform-item
    `);

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        element.dataset.once = 'true';
        observer.observe(element);
    });
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Stats Counter Animation
function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current) + element.textContent.replace(/[0-9]/g, '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + element.textContent.replace(/[0-9]/g, '');
        }
    };

    updateCounter();
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero::before');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
}

// Mobile Optimizations
function initMobileOptimizations() {
    // Touch feedback for buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Prevent zoom on double tap for buttons
    let lastTouchEnd = 0;

    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Adjust viewport height for mobile browsers
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Enhanced scroll events with throttling
window.addEventListener('scroll', throttle(function() {
    // Add scroll-based animations here if needed
}, 100));

// Form validation and submission (if forms are added)
function initForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            handleFormSubmission(this);
        });
    });
}

function handleFormSubmission(form) {
    // Add form submission logic here
    console.log('Form submitted:', form);
}

// Analytics and event tracking
function trackEvent(eventName, properties = {}) {
    // Add analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }

    // Example: Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('button_click', {
                button_text: this.textContent,
                button_type: this.classList.contains('btn-primary') ? 'primary' : 'secondary'
            });
        });
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You might want to send this to an error tracking service
});

// Initialize error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik01MCAzMUMzOC45NTQzIDMxIDMwIDM5Ljk1NDMgMzAgNTFDMzAgNjIuMDQ1NyAzOC45NTQzIDcxIDUwIDcxQzYxLjA0NTcgNzEgNzAgNjIuMDQ1NyA3MCA1MUM3MCAzOS45NTQzIDYxLjA0NTcgMzEgNTAgMzFaIiBmaWxsPSIjQ0NDIi8+CjxwYXRoIGQ9Ik01MCA0MUM0My4zNzMgNDEgMzggNDYuMzczIDM4IDUzQzM4IDU5LjYyNyA0My4zNzMgNjUgNTAgNjVDNTYuNjI3IDY1IDYyIDU5LjYyNyA2MiA1M0M2MiA0Ni4zNzMgNTYuNjI3IDQxIDUwIDQxWiIgZmlsbD0iI0Y1RjVGNSIvPgo8L3N2Zz4K';
    });
});

// Add loading state management
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // All initializations are already called at the top
    });
} else {
    // DOM is already loaded
    // All initializations are already called at the top
}

// Export functions for potential external use
window.GeminiLandingPage = {
    initNavigation,
    initSmoothScrolling,
    initScrollAnimations,
    initStatsCounters,
    trackEvent,
    showLoading,
    hideLoading
};