/* Функционал плавного скролла по якорным ссылкам */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
/* /Функционал плавного скролла по якорным ссылкам/ */
