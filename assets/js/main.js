/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log(navToggle);
  });
}
/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.style.transition = "all 1s";
    navMenu.classList.remove("show-menu");
    console.log(navClose);
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");
  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
      console.log(mainImg);
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
/*=============== SWIPER PRODUCTS ===============*/
var swiperCategories = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/*=============== PRODUCTS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});

// Ommouse out and over
var over = new Image();
over.src = "/assets/img/product-8-1.jpg";
var out = new Image();
out.src = "assets/img/product-8-2.jpg";

function imgOver() {
  var img = document.getElementById("details");
  img.src = over.src;
  img.style.cursor = "pointer";
  img.style.transition = "all .5s";
}

function imgOut() {
  var img = document.getElementById("details");
  img.src = out.src;
  img.style.cursor = "pointer";
  img.style.transition = "all .5s";
}
