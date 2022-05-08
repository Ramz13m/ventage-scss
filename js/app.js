document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".header__nav-list");
  const modalButton = document.querySelector(".header__nav-burger-icon");
  const heartIcon = document.querySelector(".header__nav-heart-icon-logo");

  modalButton.addEventListener("click", () => {
    list.classList.toggle("active");
  })

  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("header__icon-bg");
  });

  // NUMBERS ANIMATION

  

})