document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu on link click
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Duplicate content for infinite scroll
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');
    if (scrollingWrapper) {
        const content = Array.from(scrollingWrapper.children);
        content.forEach(item => {
            const clone = item.cloneNode(true);
            scrollingWrapper.appendChild(clone);
        });
    }
});