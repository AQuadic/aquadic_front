$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    stagePadding: 5,
    loop: false,

    margin: 5,
    nav: true,
    responsiveClass: true,
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
