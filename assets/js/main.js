
(function($) {
  "use strict";
  
  // Testimonials carousel (uses the Owl Carousel library)
   $(".owl-carousel").owlCarousel({
    
     margin:10,
    
   
       autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });

 // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
 

})(jQuery);