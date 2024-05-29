var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Default slides per view for mobile
  spaceBetween: 10, // Default space between slides for mobile
  grabCursor: true,
  loop: true, // Enable looping
  autoplay: {
    // Enable autoplay
    delay: 3000, // Time between slides in ms (3 seconds in this case)
    disableOnInteraction: false, // Autoplay won't stop after user interactions
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When the window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
