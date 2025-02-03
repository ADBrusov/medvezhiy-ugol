import Alpine from "alpinejs";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

window.Alpine = Alpine;
Alpine.start();

// Инициализация слайдеров
const initSliders = () => {
  // Слайдер Hero с плавной анимацией
  new Swiper(".hero-slider", {
    modules: [Autoplay, EffectFade],
    loop: true,
    slidesPerView: 1,
    effect: "fade", // Плавный переход между слайдами
    autoplay: {
      delay: 3000, // 3 секунды
      disableOnInteraction: false,
    },
  });

  // Слайдер кухни
  new Swiper(".kitchen-slider", {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".kitchen-slider .swiper-button-next",
      prevEl: ".kitchen-slider .swiper-button-prev",
    },
    pagination: {
      el: ".kitchen-slider .swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} swiper-bullet-custom"></span>`;
      },
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1280: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Слайдер отзывов
  new Swiper(".reviews-slider", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-slider .swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} swiper-bullet-custom"></span>`;
      },
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },
  });
};

// Запуск после загрузки DOM
document.addEventListener("DOMContentLoaded", initSliders);
