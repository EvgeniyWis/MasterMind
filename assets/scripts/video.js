/* Функционал того, чтобы по нажатию на треугольник запускалось видео, если оно обёрнуто в video__wrapper */

// Получаем все обёртки видео
const videoWrappers = document.querySelectorAll('.video__wrapper');

// Добавляем обработчик событий на каждую обёртку видео
videoWrappers.forEach((videoWrapper) => {
  videoWrapper.addEventListener('click', () => {
    // Если видео уже запущено, то паузим его
    if (videoWrapper.classList.contains('video__wrapper__played')) {
      videoWrapper.querySelector('video').pause();
    } else {
      // Если видео не запущено, то запускаем его
      videoWrapper.querySelector('video').play();
    }

    // Переключаем класс, чтобы изменить иконку треугольника
    videoWrapper.classList.toggle('video__wrapper__played');
  });
});

/* /Функционал того, чтобы по нажатию на треугольник запускалось видео, если оно обёрнуто в video__wrapper/ */
