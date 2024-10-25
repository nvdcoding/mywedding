(function ($) {
  "use strict";

  // Preloader
  jQuery(window).on("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
  });

  // on ready function
  jQuery(document).ready(function ($) {
    var $this = $(window);

    // Back to Top js
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

    // Menu show Hide
    // Menu js for Position fixed
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 500) {
        $(".wd_header_wrapper").addClass("menu_fixed animated fadeInDown");
      } else {
        $(".wd_header_wrapper").removeClass("menu_fixed animated fadeInDown");
      }
    });

    // Magnific Popup js
    $(".popup-gallery").magnificPopup({
      delegate: ".ast_glr_overlay a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small></small>";
        },
      },
    });

    //Single page scroll js
    $(".wd_single_index_menu ul li a").on("click", function (e) {
      $(".wd_single_index_menu ul li").removeClass("active");
      $(this).parent().addClass("active");
      var target = $("[section-scroll=" + $(this).attr("href") + "]");
      e.preventDefault();
      var targetHeight = target.offset().top - parseInt("83", 10);
      $("html, body").animate(
        {
          scrollTop: targetHeight,
        },
        1000
      );
    });

    $(window).scroll(function () {
      var windscroll = $(window).scrollTop();
      var target = $(".wd_single_index_menu ul li");
      if (windscroll >= 0) {
        $("[section-scroll]").each(function (i) {
          if ($(this).position().top <= windscroll + 83) {
            target.removeClass("active");
            target.eq(i).addClass("active");
          }
        });
      } else {
        target.removeClass("active");
        $(".wd_single_index_menu ul li:first").addClass("active");
      }
    });

    //Single page scroll js
    $(".wd_single_index_menu_down ul li a").on("click", function (e) {
      $(".wd_single_index_menu_down ul li").removeClass("active");
      $(this).parent().addClass("active");
      var target = $("[section-scroll=" + $(this).attr("href") + "]");
      e.preventDefault();
      var targetHeight = target.offset().top - parseInt("83", 10);
      $("html, body").animate(
        {
          scrollTop: targetHeight,
        },
        1000
      );
    });

    $(window).scroll(function () {
      var windscroll = $(window).scrollTop();
      var target = $(".wd_single_index_menu_down ul li");
      if (windscroll >= 0) {
        $("[section-scroll]").each(function (i) {
          if ($(this).position().top <= windscroll + 83) {
            target.removeClass("active");
            target.eq(i).addClass("active");
          }
        });
      } else {
        target.removeClass("active");
        $(".wd_single_index_menu_down ul li:first").addClass("active");
      }
    });

    //Single page scroll js
  });
})();
document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.animate-text');
  textElements.forEach(textElement => {
      const text = textElement.textContent;
      textElement.innerHTML = '';
      text.split('').forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char; 
          span.style.animationDelay = `${index * 0.1}s`; 
          textElement.appendChild(span);
      });
  });
});
// aniamtion
const element = document.querySelector('.vibrate-1');

function startAnimation(e) {
  
  e.style.animation = 'vibrate-1 0.5s ease-in-out both';
  // Thay đổi animation sau 10 giây
  setTimeout(() => {
    e.style.animation = 'none'; // Dừng animation
    setTimeout(startAnimation, 5000); // Khởi động lại sau 100ms
  }, 5000); // 500ms là thời gian của animation
}

// Bắt đầu animation
element.forEach(e => {
startAnimation(e);
});