$(document).ready(function () {

  console.log("app initiated");

  $('.tab-testimonial-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: '0px',
        }
      }
    ]
  });

  $('.news-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: '0px',
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: '0px',
        }
      }
    ]
  });
});