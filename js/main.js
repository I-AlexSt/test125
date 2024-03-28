// Nav menu
const NavMenu = document.querySelector('.nav');
const BtnBurger = document.querySelector('.btn-burger__btn');

BtnBurger.onclick = function () {
  NavMenu.classList.toggle('mobile-menu-open')
};