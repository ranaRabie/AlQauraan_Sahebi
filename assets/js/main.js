function initiateAnimation() {
  AOS.init({
    easing: "ease-in-out-sine",
    duration: 800,
  });
}
// Preloader
$(window).on("load", function () {
  $(".loading").fadeOut(2000);
});
// Sticky Menu
var counters = true;
$(window).on("scroll",function () {
  if ($(window).scrollTop() > 0) {
    $(".main-nav ").addClass("sticky-menu").animate(
      {
        top: 0,
      },
      4000
    );
  } else {
    $(".main-nav ").removeClass("sticky-menu").animate(
      {
        top: 0,
      },
      4000
    );
  }


  try{
    var hT = $('#counters-blk').offset().top,
    hH = $('#counters-blk').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && counters == true){
      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
      counters = false;
    }
  }catch{

  }
  
});
// smooth scroll spy to section
// $('.main-nav .nav-link ').on("click",function(e){
//   //prevent the page from refreshing
//   e.preventDefault();
//   //set the top offset animation and speed
//   $('html, body').animate({
//     scrollTop: ($($(this).attr('href')).offset().top - 110)
// }, 500);
// $(".navbar-collapse").removeClass("show");
// $(".navbar-toggler").addClass("collapsed").attr("aria-expanded","false");
// });



let rtl = !1;
if ($("body").css("direction") == "rtl") {
  rtl = !0;
}
(function ($) {

  "use strict";
  initiateAnimation();
  $(".navbar-toggler").on("click", function () {

    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
    } else {
      $(this).attr("aria-expanded", "false");
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('.values-slider , .committee-slider').owlCarousel({
    dots: true,
    nav: false,
   rtl:rtl,
    
   slideBy:1,
    items: 5,
     
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      575: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      992: {
        items: 4,
        nav: false,
      }
    }
  });
  $('.tes-carousel').owlCarousel({
    dots: true,
    nav: false,
   rtl:rtl,
    
   slideBy:1,
    items: 1,
  });


 $('.vid-poster').on('click', function(){
    let vidWrapper = $(this).closest('.vid-wrapper');
    let vidElement = vidWrapper.find('video');
    vidElement.trigger('play');
    $('video').not(vidElement).trigger('pause');
 });
 $('video').on('pause', function(){
    $(this).closest('.vid-wrapper').removeClass('vid-play');
 });
 $('video').on('play', function(){
    $(this).closest('.vid-wrapper').addClass('vid-play');
 });

})(jQuery);