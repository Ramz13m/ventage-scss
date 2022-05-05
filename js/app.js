document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".header__nav-list");
  const modalButton = document.querySelector(".header__nav-burger-icon");

  modalButton.addEventListener("click", () => {
    list.classList.toggle("active");
  })

})