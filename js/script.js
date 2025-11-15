let menuBtn = document.getElementById("open-mobile-menu-btn");
let closeBtn = document.getElementById("close-mobile-menu-btn");
let content = document.getElementById("content-container");
let mobileContainer = document.getElementById("mobile-menu-container");
let footerContainer = document.getElementById("footer");
let disNone = document.querySelectorAll(".none");
// open mobile menu function
menuBtn.addEventListener("click", function () {
  mobileContainer.style.display = "flex";
  content.style.display = "none";
  disNone.forEach(function (ele) {
    ele.style.display = "none";
  });
  footerContainer.style.display = "none";
});
// close mobile menu function
closeBtn.addEventListener("click", function () {
  mobileContainer.style.display = "none";
  content.style.display = "block";
  disNone.forEach(function (ele) {
    ele.style.display = "flex";
  });
  footerContainer.style.display = "block";
});

// first 4 swipers
var swiper = new Swiper(".cleaning-service-swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// rating swiper
var swiper = new Swiper(".rating-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// another services swiper
var swiper = new Swiper(".another-services-swiper", {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});
// cleaning carpet swiper in second page
var swiper = new Swiper(".second-swiper-carpet-page", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// another services swiper in carpet page
var swiper = new Swiper(".another-services-swiper-sec-page", {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});
