const menuBtn = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('#close-menu')

menuBtn.addEventListener('click', () => {
    nav.classList.add('show-menu');
    nav.style.display = 'block';
    nav.style.transition = '0.3s';
})

closeMenu.addEventListener('click', () => {
    nav.classList.remove('show-menu');
    nav.style.display = 'none';
})