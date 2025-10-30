// This file likely contains existing Lindy UI Kit JavaScript.
// Ensure WOW.js is initialized if you're using it for animations.
// If your main.js is empty, you can add this:

document.addEventListener('DOMContentLoaded', () => {
    // Initialize WOW.js for scroll animations
    new WOW().init();

    // Add any other custom JavaScript for your page here
    // Example: smooth scrolling for anchor links (if not handled by Lindy UI Kit)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});