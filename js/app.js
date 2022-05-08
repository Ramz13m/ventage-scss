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

  // NUMBERS ANIMATION jquery

  var a = 0;
$(window).scroll(function() {

  var oTop = $('.info-num__item').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.info-num__anime-num').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

  

})