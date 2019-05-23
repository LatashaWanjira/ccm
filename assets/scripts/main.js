$(document).ready(function() {
  // Navbar background change on page scroll
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  // Toggle of Mobile sidebar
  $(".mobile-menu").click(function() {
    $("nav.sidebar").css({
      "left": "0",
      "transition": "left 0.5s"
    });
  });
  $(".close").click(function() {
    $("nav.sidebar").css({
      "left": "-40%",
      "transition": "left 0.5s"
    });
  });

  $(function() {
    $('.truncate').succinct({
      size: 100
    });
    $('.truncate-long').succinct({
      size: 240
    });
  });

  $(window).resize(function() {
    $('.backgrounds')[0].slick.refresh();
  });

  // Slick Carousel for Landing Page
  $('.backgrounds').slick({
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnDotsHover: false,
  });

  // Slick Carousel for Partners
  $('#partners .carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
