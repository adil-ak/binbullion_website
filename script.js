// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
toggle.addEventListener('click', () => {
const show = nav.classList.toggle('show');
toggle.setAttribute('aria-expanded', show ? 'true' : 'false');
});
}


// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();