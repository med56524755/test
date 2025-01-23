
const navToggle = document.querySelector('.nav-toggle');
const body = document.body; // Or you could target a specific container if preferred
navToggle.addEventListener('click', () => {
body.classList.toggle('nav-open');
});
