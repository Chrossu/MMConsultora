// Smooth Scrolling
$('a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 40
      },
      1200
    );
  }
});

// Slick carousel
$(document).ready(function () {
  $('.autoplay').slick({
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
  });
});
