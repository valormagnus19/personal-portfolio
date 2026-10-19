/* ==========================================
   Dark Mode Toggle & Persistence
   ========================================== */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️';
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙';
    }
});

/* ==========================================
   Contact Form Submission Simulation
   ========================================== */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        formStatus.style.color = 'var(--accent-color)';
        formStatus.textContent = 'Sending message...';

        // Simulate a network request (Replace this with EmailJS, Formspree, or your backend API later)
        setTimeout(() => {
            formStatus.style.color = '#10b981'; // Success green
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }, 1000);
    });
}