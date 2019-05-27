$(document).ready(function() {
  // Navbar background change on page scroll
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  // Dropdown Toggle
  $('.navbar-links li').mouseover(function() {
    $('.dropdown-list', this).stop().slideDown(400, 'linear')
  })

  $('.navbar-links li').mouseout(function() {
    $('.dropdown-list', this).stop().slideUp(400, 'linear')
  })

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


  // Truncating Blog Text
  $(function() {
    $('.truncate').succinct({
      size: 100
    });
    $('.truncate-long').succinct({
      size: 240
    });
  });

  // Load More Button
  $('#myBtn').click(function() {
    $('#more').slideToggle();
  });

  // Slick Carousel for Landing Page
  $('.backgrounds').slick({
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    pauseOnDotsHover: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
    appendArrows: $(".button-container"),
    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false,
      }
    }]
  });

  // Slick Carousel for Partners
  $('#partners .carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    appendDots: $(".dots-container"),
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
