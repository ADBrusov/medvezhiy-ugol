import Alpine from "alpinejs";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Inputmask from "inputmask";
import JustValidate from "just-validate";

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
      1280: { slidesPerView: 2, spaceBetween: 30 },
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

  // Слайдер галереи
  new Swiper(".gallery-slider", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".gallery-slider .swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} swiper-bullet-custom"></span>`;
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};

// Запуск после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  initSliders();

  Fancybox.bind();

  // Маска для телефона
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((phoneInput) => {
    Inputmask({ mask: "+7 (999) 999-99-99" }).mask(phoneInput);
  });

  // Валидация формы бронирования
  const bookingFormValidation = new JustValidate(".booking-form", {
    validateBeforeSubmitting: true,
    errorFieldCssClass: "input-error",
    successFieldCssClass: "input-success",
    errorLabelCssClass: "error-label",
  });

  bookingFormValidation
    .addField("#booking-name", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите ваше имя",
      },
    ])
    .addField("#booking-phone", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите телефон",
      },
      {
        validator: (value) => {
          return !value.includes("_"); // Проверка, что маска заполнена полностью
        },
        errorMessage: "Пожалуйста, введите корректный номер телефона",
      },
    ])
    .addField("#booking-date", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, выберите дату",
      },
    ])
    .onSuccess((event) => {
      const form = event.target;
      const submitButton = form.querySelector('button[type="submit"]');

      const formData = {
        name: document.querySelector("#booking-name").value.trim(),
        phone: document.querySelector("#booking-phone").value.trim(),
        date: document.querySelector("#booking-date").value.trim(),
      };

      submitButton.disabled = true;
      submitButton.textContent = "Отправка...";

      emailjs.send("service_5r0p5ha", "template_3bs995n", formData).then(
        (response) => {
          submitButton.textContent = "Отправлено!";
          form.reset();

          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        },
        (error) => {
          submitButton.textContent = "Ошибка!";
          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        }
      );
    });

  // Валидация формы для получения меню
  const kitchenFormValidation = new JustValidate(".kitchen-form", {
    validateBeforeSubmitting: true,
    errorFieldCssClass: "input-error",
    successFieldCssClass: "input-success",
    errorLabelCssClass: "error-label",
  });

  kitchenFormValidation
    .addField("#kitchen-name", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите ваше имя",
      },
    ])
    .addField("#kitchen-phone", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите телефон",
      },
      {
        validator: (value) => {
          return !value.includes("_"); // Проверка, что маска заполнена полностью
        },
        errorMessage: "Пожалуйста, введите корректный номер телефона",
      },
    ])
    .onSuccess((event) => {
      const form = event.target;
      const submitButton = form.querySelector('button[type="submit"]');

      const formData = {
        name: document.querySelector("#kitchen-name").value.trim(),
        phone: document.querySelector("#kitchen-phone").value.trim(),
      };

      submitButton.disabled = true;
      submitButton.textContent = "Отправка...";

      emailjs.send("service_5r0p5ha", "template_3bs995n", formData).then(
        (response) => {
          submitButton.textContent = "Отправлено!";
          form.reset();

          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        },
        (error) => {
          submitButton.textContent = "Ошибка!";
          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        }
      );
    });

  // Валидация формы обратной связи
  const contactFormValidation = new JustValidate(".contact-form", {
    validateBeforeSubmitting: true,
    errorFieldCssClass: "input-error",
    successFieldCssClass: "input-success",
    errorLabelCssClass: "error-label",
  });

  contactFormValidation
    .addField("#contact-name", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите ваше имя",
      },
    ])
    .addField("#contact-phone", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите телефон",
      },
      {
        validator: (value) => {
          return !value.includes("_"); // Проверка, что маска заполнена полностью
        },
        errorMessage: "Пожалуйста, введите корректный номер телефона",
      },
    ])
    .addField("#contact-message", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите сообщение",
      },
    ])
    .onSuccess((event) => {
      const form = event.target;
      const submitButton = form.querySelector('button[type="submit"]');

      const formData = {
        name: document.querySelector("#contact-name").value.trim(),
        phone: document.querySelector("#contact-phone").value.trim(),
        message: document.querySelector("#contact-message").value.trim(),
      };

      submitButton.disabled = true;
      submitButton.textContent = "Отправка...";

      emailjs.send("service_5r0p5ha", "template_3bs995n", formData).then(
        (response) => {
          submitButton.textContent = "Отправлено!";
          form.reset();

          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        },
        (error) => {
          submitButton.textContent = "Ошибка!";
          setTimeout(() => {
            submitButton.textContent = "Отправить";
            submitButton.disabled = false;
          }, 3000);
        }
      );
    });
});
