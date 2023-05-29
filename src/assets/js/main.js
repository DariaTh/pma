$(document).ready(function(){

  console.log("app initiated");

  $('.tab-testimonial-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
  });

  $('.news-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  });
});