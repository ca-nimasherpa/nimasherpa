// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // --- Sticky Navigation ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.querySelector('nav').classList.add('scrolled');
            } else {
                header.querySelector('nav').classList.remove('scrolled');
            }
        });
    }

    // --- Animated Metric Counters ---
    const animateCounters = () => {
        const counters = document.querySelectorAll('.metric-number');
        const speed = 200; // The lower the number, the faster the count

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            let count = 0;

            const updateCount = () => {
                const increment = target / speed;
                count += increment;

                if (count < target) {
                    counter.innerText = Math.ceil(count) + suffix;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer to trigger counter animation only when visible
    const heroSection = document.getElementById('hero');
    let hasAnimated = false; // Flag to ensure animation runs only once
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    if (heroSection) {
        observer.observe(heroSection);
    }
    
    // --- Initialize AOS (Animate On Scroll) Library ---
    // This looks for all elements with "data-aos" and animates them
    AOS.init({
        duration: 800, // animation duration in ms
        once: true,    // whether animation should happen only once
        offset: 100,   // offset (in px) from the original trigger point
    });
});
