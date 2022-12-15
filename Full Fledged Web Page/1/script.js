var galleryButtons = document.querySelectorAll(".gallery-btn");

galleryButtons[0].addEventListener("click", function () {
  if (this.classList.contains("active")) {
  } else {
    this.classList.add("active");
    galleryButtons[1].classList.remove("active");
    document.querySelector(".members-section1").classList.remove("hidden");
    document.querySelector(".members-section2").classList.add("hidden");
  }
});

galleryButtons[1].addEventListener("click", function () {
  if (this.classList.contains("active")) {
  } else {
    this.classList.add("active");
    galleryButtons[0].classList.remove("active");
    document.querySelector(".members-section2").classList.remove("hidden");
    document.querySelector(".members-section1").classList.add("hidden");
  }
});

// code for our swiper in awards section
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
