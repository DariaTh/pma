$(document).ready(function(){

  console.log("app initiated");

  $('.tab-testimonial-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    // centerMode: true,
  });

  $('.news-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  });
});