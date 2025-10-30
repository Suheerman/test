document.addEventListener('DOMContentLoaded', () => {

    // --- Part 1: Handle Clicks on FAQ Questions ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // --- Part 2: Handle Opening a Specific FAQ from a URL Link ---
    const openFaqFromUrl = () => {
        const hash = window.location.hash;
        if (hash) {
            const targetFaq = document.querySelector(hash);
            if (targetFaq) {
                targetFaq.classList.add('active');
                // The smooth scroll is now handled by the CSS `scroll-padding-top`
            }
        }
    };
    openFaqFromUrl();

    // --- Part 3: Scroll-to-Top Button Functionality (NEW) ---
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            // Show button if user has scrolled down more than 300px
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
    }
});