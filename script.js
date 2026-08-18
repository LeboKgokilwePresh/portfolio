// Simple JavaScript for interactivity

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button click handler
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Thanks for your interest! Check out my projects below!');
});

// Log a welcome message
console.log('Welcome to my portfolio website!');