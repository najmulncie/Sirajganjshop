$(document).ready(function(){
    // jquery 01 slider
    $('.mobile_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow',

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
              }
            }
          ]

      });
});