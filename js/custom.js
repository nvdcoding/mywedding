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
    var counter = 0;
    $(".wd_menu_btn").on("click", function (e) {
      if (counter == "0") {
        $(".wd_main_menu_wrapper").addClass("wd_main_menu_hide");
        $(this).children().removeAttr("class");
        $(this).children().attr("class", "fa fa-close");
        counter++;
      } else {
        $(".wd_main_menu_wrapper").removeClass("wd_main_menu_hide");
        $(this).children().removeAttr("class");
        $(this).children().attr("class", "fa fa-bars");
        counter--;
      }
    });

    // Menu js for Position fixed
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 500) {
        $(".wd_header_wrapper").addClass("menu_fixed animated fadeInDown");
      } else {
        $(".wd_header_wrapper").removeClass("menu_fixed animated fadeInDown");
      }
    });

    // Guest Slider Js
    $(".wd_guest_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 45,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Testimonial Slider Js
    $(".wd_testimonial_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    // Family Slider Js
    $(".wd_family_slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    // Gallery Slider js
    $(".wd_gallery_slider .owl-carousel").owlCarousel({
      animateOut: "fadeOut",
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
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
    $(".wd_single_index_menu_rsvp a").on("click", function (e) {
      $(".wd_single_index_menu_rsvp a").removeClass("active");
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
      var target = $(".wd_single_index_menu_rsvp a");
      if (windscroll >= 0) {
        $("[section-scroll]").each(function (i) {
          if ($(this).position().top <= windscroll + 83) {
            target.removeClass("active");
            target.eq(i).addClass("active");
          }
        });
      } else {
        target.removeClass("active");
        $(".wd_single_index_menu_rsvp a").addClass("active");
      }
    });

    // CountDown Js
    function time_elapsed(starttime) {
      var now = new Date();
      var start = new Date(starttime);
    
      var total = Date.parse(now) - Date.parse(start);
      var years = now.getFullYear() - start.getFullYear();
      var months = now.getMonth() - start.getMonth();
      var days = now.getDate() - start.getDate();
      if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Số ngày trong tháng trước
      }
      if (months < 0) {
        years--;
        months += 12;
      }
    
      return {
        total: total,
        years: years,
        months: months,
        days: days
      };
    }
    
    function run_clock(id, starttime) {
      var clock = document.getElementById(id);
    
      var years_span = clock.querySelector(".years");
      var months_span = clock.querySelector(".months");
      var days_span = clock.querySelector(".days");
    
      function update_clock() {
        var t = time_elapsed(starttime);
    
        years_span.innerHTML = t.years;
        months_span.innerHTML = t.months;
        days_span.innerHTML = t.days;
      }
    
      update_clock();
      var timeinterval = setInterval(update_clock, 1000);
    }
    
    // Định dạng starttime là năm-tháng-ngày (YYYY-MM-DD)
    var starttime = "2018-10-28T00:00:00+07:00"; // Ví dụ: ngày bắt đầu từ năm 2018
    
    run_clock("clockdiv", starttime);    

    // Contact Form Submition
    function checkRequire(formId, targetResp) {
      targetResp.html("");
      var email =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      var url =
        /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
      var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
      var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
      var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
      var google_plus =
        /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
      var check = 0;
      $("#er_msg").remove();
      var target = typeof formId == "object" ? $(formId) : $("#" + formId);
      target.find("input , textarea , select").each(function () {
        if ($(this).hasClass("require")) {
          if ($(this).val().trim() == "") {
            check = 1;
            $(this).focus();
            targetResp.html("You missed out some fields.");
            $(this).addClass("error");
            return false;
          } else {
            $(this).removeClass("error");
          }
        }
        if ($(this).val().trim() != "") {
          var valid = $(this).attr("data-valid");
          if (typeof valid != "undefined") {
            if (!eval(valid).test($(this).val().trim())) {
              $(this).addClass("error");
              $(this).focus();
              check = 1;
              targetResp.html($(this).attr("data-error"));
              return false;
            } else {
              $(this).removeClass("error");
            }
          }
        }
      });
      return check;
    }
    $(".submitForm").on("click", function () {
      var _this = $(this);
      var targetForm = _this.closest("form");
      var errroTarget = targetForm.find(".response");
      var check = checkRequire(targetForm, errroTarget);
      if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append("form_type", _this.attr("form-type"));
        $.ajax({
          method: "post",
          url: "ajax.php",
          data: formDetail,
          cache: false,
          contentType: false,
          processData: false,
        }).done(function (resp) {
          if (resp == 1) {
            targetForm.find("input").val("");
            targetForm.find("textarea").val("");
            errroTarget.html(
              '<p style="color:green;">Mail has been sent successfully.</p>'
            );
          } else {
            errroTarget.html(
              '<p style="color:red;">Something went wrong please try again latter.</p>'
            );
          }
        });
      }
    });
  });
})();

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}