
const menuBars = document.getElementById('#menu-bars');
const navbar = document.getElementById('#desktop-nav');

menuBars.addEventListener('click', () => {
  navbar.classList.toggle('show');    
})