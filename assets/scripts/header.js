/* Открытие бургер меню */
const headerBurgerIcon = document.getElementById('header__burger__icon');
const headerMenu = document.getElementById('header__menu');

headerBurgerIcon.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu__active');
});

/* /Открытие бургер меню/ */
