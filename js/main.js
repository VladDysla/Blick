"use strict";

// document.addEventListener('DOMContentLoaded', function () {
//   const menuBtn = document.querySelector('.menu__btn');
//   const menuList = document.querySelector('.menu__list');

//   menuBtn.addEventListener('click', function () {
//     menuList.classList.toggle('show');
//   });
// });

//BURGER

$(document).ready(function () {
  $(".header__btn").click(function (event) {
    $(".header__btn, .menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".menu a").click(function () {
    $(".header__btn, .menu").removeClass("active"); // Закриваємо меню
    $("body").removeClass("lock"); // Відновлюємо прокрутку сторінки
  });
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


const directionsSwiper = new Swiper('.directions-swiper', {
  loop: true, // Зациклення слайдів
  slidesPerView: 3, // Скільки слайдів відображається одночасно
  spaceBetween: 20, // Відступи між слайдами
  breakpoints: {
    320: {
      slidesPerView: 1, // 1 слайд на маленьких екранах
    },
     630: {
      slidesPerView: 2, // 2 слайда на середніх екранах
    },
    1024: {
      slidesPerView: 3, // 3 слайда на великих екранах
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.teachers-swiper', {
    loop: true, // Зациклення слайдів
    slidesPerView: 3, // Скільки слайдів відображається одночасно
    spaceBetween: 20, // Відступи між слайдами
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 слайд на маленьких екранах
      },
       630: {
        slidesPerView: 2, // 2 слайда на середніх екранах
      },
      1024: {
        slidesPerView: 3, // 3 слайда на великих екранах
      },
    },
  });
});
