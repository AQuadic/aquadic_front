$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    stagePadding: 50,
    loop: false,

    margin: 100,
    nav: true,
    responsiveClass: false,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
