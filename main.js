document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all elements that need animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const experienceCards = document.querySelectorAll('.experience-card');
    const projectCards = document.querySelectorAll('.project-card');
    const educationCards = document.querySelectorAll('.education-card');
    const certificationCards = document.querySelectorAll('.certification-card');

    timelineItems.forEach(item => observer.observe(item));
    experienceCards.forEach(card => observer.observe(card));
    projectCards.forEach(card => observer.observe(card));
    educationCards.forEach(card => observer.observe(card));
    certificationCards.forEach(card => observer.observe(card));

    // Mobile menu toggle logic - now using a CSS class
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
