$(document).ready(function () {

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
  });

  if (window.innerWidth < 768) {
    $('.menu-item').click(function () {
      let dropMenu = $(this).find('.drop-menu');
      if (dropMenu.height() === 0) {
        dropMenu.animate({ 'max-height': '240px' }, 300);
      } else {
        dropMenu.animate({ 'max-height': '0' }, 300);
      }
    });
  }

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

  $('.leaders-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });


   // HubSpot chat
  var chatLink = document.getElementById('chat-link');

  chatLink.addEventListener('click', function (e) {
    e.preventDefault();

    // Open the HubSpot chat
    if (typeof (window.HubSpotConversations) !== 'undefined') {
      window.HubSpotConversations.widget.open();
    }
  });

  var startTradeBtn = document.getElementsByClassName('openChatBtn');

  Array.from(startTradeBtn).forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Open the HubSpot chat
      if (typeof (window.HubSpotConversations) !== 'undefined') {
        window.HubSpotConversations.widget.open();
      }
    });
  });


  // Exit popup
  var popup = document.getElementById('exitPopup');
  // Show the popup and overlay when the user tries to leave the page
  document.addEventListener('mouseleave', function (e) {
    const popupShown = localStorage.getItem('exitPopupShown');

    if (e.clientY < 0) {
      if (!popupShown) {
        console.log(popupShown)
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';

        localStorage.setItem('exitPopupShown', 'true');
      }
    }
  });

  var closeButton = document.getElementById('exitPopupClose');

  closeButton.addEventListener('click', function () {
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
  });

  var popupContent = document.getElementById('exitPopupContent');

  document.addEventListener('click', function (e) {
    if (!popupContent.contains(e.target)) {
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    }
  });

  var claimButton = document.getElementById('claimButton');
  const openAccountSection = document.getElementById("openAccount");

  claimButton.addEventListener('click', function (event) {
    event.preventDefault();
    openAccountSection.scrollIntoView();
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
  });

});

$('.testimonial-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});