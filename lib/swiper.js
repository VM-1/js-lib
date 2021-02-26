const categorySlider = new Swiper('.category__main', {
    wrapperClass: "category__main-wrapper",
    speed: 500,
    slideClass: "product",
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.category__btn_next',
      prevEl: '.category__btn_prev',
    },
     breakpoints: {
      // when window width is >= 320px
      450: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1340: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: "auto",
        spaceBetween: 40
      }
    }
})
const heroSlider = new Swiper('.hero', {
    wrapperClass: "hero__wrapper",
    speed: 800,
    slideClass: "hero__item",
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    delay: 2000,
    navigation: {
      nextEl: '.hero__btn_next',
      prevEl: '.hero__btn_prev',
    },
})