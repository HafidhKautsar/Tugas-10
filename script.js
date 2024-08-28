// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Basic validation
    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    return true;
}
