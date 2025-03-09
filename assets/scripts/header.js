/* Открытие бургер меню */
const header__burger__icon = document.getElementById("header__burger__icon");
const header__menu = document.getElementById("header__menu");

header__burger__icon.addEventListener("click", () => {
  header__menu.classList.toggle("header__menu__active");
});

/* /Открытие бургер меню/ */
