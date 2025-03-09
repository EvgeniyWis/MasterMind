/* Инициализация Swiper.js для блоков */
const swipersArray = [
  {
    wrapperID: 'mainBlock__leftCol',
    paginationID: 'mainBlock__leftCol-swiper-pagination',
  },
  {
    wrapperID: 'whoNeeds__wrapper',
    paginationID: 'whoNeeds-swiper-pagination',
  },
];

swipersArray.forEach((swiper) => {
  new Swiper(`#${swiper.wrapperID}`, {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: `#${swiper.paginationID}`,
      clickable: true,
    },
  });
});
/* /Инициализация Swiper.js для блоков/ */
