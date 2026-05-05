// Switching Pages
const formOne = document.getElementById('to-password');
const emailInput = document.getElementById('email-input');
const emailView = document.getElementById('email-view');
const passwordView = document.getElementById('password-view');
const chipText = document.getElementById('chip-text');

formOne.addEventListener('submit', (e) => {
    e.preventDefault();
    chipText.textContent = emailInput.value;
    emailView.classList.add('hidden');
    passwordView.classList.remove('hidden');
});

// Show Password
document.getElementById('show-check').addEventListener('change', function() {
    document.getElementById('pass-input').type = this.checked ? 'text' : 'password';
});

// Language Menu Toggle
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('hidden');
});

// Close menu when clicking away
window.onclick = () => langMenu.classList.add('hidden');