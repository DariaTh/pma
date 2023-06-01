$(document).ready(function () {

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});

  $('.menu-item').click(function () {
    let dropMenu = $(this).find('.drop-menu');
    if (dropMenu.height() === 0) {
      dropMenu.animate({ 'max-height': '220px' }, 300); 
    } else {
      dropMenu.animate({ 'max-height': '0' }, 300);
    }
  });

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