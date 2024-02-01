/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js

****************************************************/

(function ($) {
  ("use strict");

  // Get Device width
  let device_width = window.innerWidth;

  var windowOn = $(window);


  ////////////////////////////////////////////////////
  // 02. Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  ////////////////////////////////////////////////////
  // 03. RTL Multi color Toggoler
  // settings append in body
  function bd_settings_append($x) {
    var settings = $("body");
    let dark;
    $x == true ? (dark = "d-block") : (dark = "d-none");
    var settings_html = `<div class="bd-theme-settings-area transition-3">
		<div class="bd-theme-wrapper">
		   <div class="bd-theme-header text-center">
			  <h4 class="bd-theme-header-title">Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="bd-theme-toggle mb-20 ${dark}" style="display:none">
			  <label class="bd-theme-toggle-main" for="bd-theme-toggler">
				 <span class="bd-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="bd-theme-toggler">
					<i class="bd-theme-toggle-slide"></i>
				 <span class="bd-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>



		   <!-- COLOR SETTINGS -->
		   <div class="bd-theme-settings">
			  <div class="bd-theme-settings-wrapper">
				 <div class="bd-theme-settings-open">
					<button class="bd-theme-settings-open-btn">
					   <span class="bd-theme-settings-gear">
						  <i class="fal fa-cog"></i>
					   </span>
					   <span class="bd-theme-settings-close">
						  <i class="fal fa-times"></i>
					   </span>
					</button>
				 </div>
         
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="bd-theme-color-item bd-color-active">
             <button class="bd-theme-color-btn bd-color-settings-btn d-none" data-color-default="#bca045" type="button" data-color="#bca045"></button>
						  <button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#bca045"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="bd-theme-color-item bd-color-active">
						  <button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#cece00"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="bd-theme-color-item bd-color-active">
						  <button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#d7552d"></button>
					   </div>

             </div>
					<div class="col">
					   <div class="bd-theme-color-item bd-color-active">
						  <button class="bd-theme-color-btn bd-color-settings-btn" type="button" data-color="#5261b3"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="bd-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="bd-color-setings-input" value="#0b3d2c">
				 <label id="bd-theme-color-label" for="bd-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;

    settings.append(settings_html);
  }
  bd_settings_append(false); // if want to enable dark light mode then send "true";

  // settings open btn
  $(".bd-theme-settings-open-btn").on("click", function () {
    $(".bd-theme-settings-area").toggleClass("settings-opened");
  });

  // rtl settings
  function bd_rtl_settings() {
    $("#bd-dir-toggler").on("change", function () {
      toggle_rtl();
      window.location.reload();
    });

    // set toggle theme scheme
    function bd_set_scheme(bd_dir) {
      localStorage.setItem("bd_dir", bd_dir);
      document.documentElement.setAttribute("dir", bd_dir);

      if (bd_dir === "rtl") {
        var list = $("[href='assets/css/bootstrap.min.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
      } else {
        var list = $("[href='assets/css/bootstrap.min.css']");
        $(list).attr("href", "assets/css/bootstrap.min.css");
      }
    }

    // toogle theme scheme
    function toggle_rtl() {
      if (localStorage.getItem("bd_dir") === "rtl") {
        bd_set_scheme("ltr");
        var list = $("[href='assets/css/bootstrap.rtl.css']");
        $(list).attr("href", "assets/css/bootstrap.min.css");
      } else {
        bd_set_scheme("rtl");
        var list = $("[href='assets/css/bootstrap.min.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
      }
    }

    // set the first theme scheme
    function bd_init_dir() {
      if (localStorage.getItem("bd_dir") === "rtl") {
        bd_set_scheme("rtl");
        var list = $("[href='assets/css/bootstrap.min.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
        document.getElementById("bd-dir-toggler").checked = true;
      } else {
        bd_set_scheme("ltr");
        document.getElementById("bd-dir-toggler").checked = false;
        var list = $("[href='assets/css/bootstrap.min.css']");
        $(list).attr("href", "assets/css/bootstrap.min.css");
      }
    }
    bd_init_dir();
  }
  if ($("#bd-dir-toggler").length > 0) {
    bd_rtl_settings();
  }

  var bd_rtl = localStorage.getItem("bd_dir");
  let rtl_setting = bd_rtl == "rtl" ? true : false;

  // dark light mode toggler
  function bd_theme_toggler() {
    $("#bd-theme-toggler").on("change", function () {
      toggleTheme();
    });

    // set toggle theme scheme
    function bd_set_scheme(bd_theme) {
      localStorage.setItem("kd_theme_scheme", bd_theme);
      document.documentElement.setAttribute("bd-theme", bd_theme);
    }

    // toogle theme scheme
    function toggleTheme() {
      if (localStorage.getItem("kd_theme_scheme") === "bd-theme-dark") {
        bd_set_scheme("bd-theme-light");
      } else {
        bd_set_scheme("bd-theme-dark");
      }
    }

    // set the first theme scheme
    function bd_init_theme() {
      if (localStorage.getItem("kd_theme_scheme") === "bd-theme-dark") {
        bd_set_scheme("bd-theme-dark");
        document.getElementById("bd-theme-toggler").checked = true;
      } else {
        bd_set_scheme("bd-theme-light");
        document.getElementById("bd-theme-toggler").checked = false;
      }
    }
    bd_init_theme();
  }
  if ($("#bd-theme-toggler").length > 0) {
    bd_theme_toggler();
  }

  // color settings
  function bd_color_settings() {
    // set color scheme
    function bd_set_color(ryl_color_scheme) {
      localStorage.setItem("ryl_color_scheme", ryl_color_scheme);
      document
        .querySelector(":root")
        .style.setProperty("--clr-theme-1", ryl_color_scheme);
      document.getElementById("bd-color-setings-input").value =
        ryl_color_scheme;
      document.getElementById("bd-theme-color-label").style.backgroundColor =
        ryl_color_scheme;
    }

    // set color
    function bd_set_input() {
      var color = localStorage.getItem("ryl_color_scheme");
      document.getElementById("bd-color-setings-input").value = color;
      document.getElementById("bd-theme-color-label").style.backgroundColor =
        color;
    }
    bd_set_input();

    function bd_init_color() {
      var defaultColor = $(".bd-color-settings-btn").attr("data-color-default");
      var setColor = localStorage.getItem("ryl_color_scheme");

      if (setColor != null) {
      } else {
        setColor = defaultColor;
      }

      if (defaultColor !== setColor) {
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", setColor);
        document.getElementById("bd-color-setings-input").value = setColor;
        document.getElementById("bd-theme-color-label").style.backgroundColor =
          setColor;
        bd_set_color(setColor);
      } else {
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", defaultColor);
        document.getElementById("bd-color-setings-input").value = defaultColor;
        document.getElementById("bd-theme-color-label").style.backgroundColor =
          defaultColor;
        bd_set_color(defaultColor);
      }
    }
    bd_init_color();

    let themeButtons = document.querySelectorAll(".bd-color-settings-btn");

    themeButtons.forEach((color) => {
      color.addEventListener("click", () => {
        let datacolor = color.getAttribute("data-color");
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", datacolor);
        document.getElementById("bd-theme-color-label").style.backgroundColor =
          datacolor;
        bd_set_color(datacolor);
      });
    });

    const colorInput = document.querySelector("#bd-color-setings-input");
    const colorVariable = "--clr-theme-1";

    colorInput.addEventListener("change", function (e) {
      var clr = e.target.value;
      document.documentElement.style.setProperty(colorVariable, clr);
      bd_set_color(clr);
      bd_set_check(clr);
    });

    function bd_set_check(clr) {
      const arr = Array.from(document.querySelectorAll("[data-color]"));

      var a = localStorage.getItem("ryl_color_scheme");

      let test = arr
        .map((color) => {
          let datacolor = color.getAttribute("data-color");

          return datacolor;
        })
        .filter((color) => color == a);

      var arrLength = test.length;

      if (arrLength == 0) {
        $(".bd-color-active").removeClass("active");
      } else {
        $(".bd-color-active").addClass("active");
      }
    }

    function bd_check_color() {
      var a = localStorage.getItem("ryl_color_scheme");

      var list = $(`[data-color="${a}"]`);

      list
        .parent()
        .addClass("active")
        .parent()
        .siblings()
        .find(".bd-color-active")
        .removeClass("active");
    }
    bd_check_color();

    $(".bd-color-active").on("click", function () {
      $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".bd-color-active")
        .removeClass("active");
    });
  }
  if (
    $(".bd-color-settings-btn").length > 0 &&
    $("#bd-color-setings-input").length > 0 &&
    $("#bd-theme-color-label").length > 0
  ) {
    bd_color_settings();
  }

  ////////////////////////////////////////////////////
  //03. Sticky Header Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky");
    } else {
      $("#header-sticky").addClass("sticky");
    }
  });

  /////////////////////////////
  // 04. Jquery Appear radial circle-progress
  if (typeof $.fn.knob != "undefined") {
    $(".knob").each(function () {
      var $this = $(this),
        knobVal = $this.attr("data-rel");

      $this.knob({
        draw: function () {
          $(this.i).val(this.cv + "%");
        },
      });

      $this.appear(
        function () {
          $({
            value: 0,
          }).animate(
            {
              value: knobVal,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.val(Math.ceil(this.value)).trigger("change");
              },
            }
          );
        },
        {
          accX: 0,
          accY: -150,
        }
      );
    });
  }

  ///////////////////////////////
  // 05. Wow Js progress
  new WOW().init();
  ///////////////////////////////

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  //////////////////////////////
  //06. search form for header
  $(".fm-search").on("click", function () {
    $(".search_wrap.layouts_search.inited").addClass("search_opened");
  });
  $(".search_close.trx_addons_icon-delete").on("click", function () {
    $(".search_wrap.layouts_search.inited").removeClass("search_opened");
  });

  ////////////////////////////////////////////////////
  // 07. Data Background Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
  $("[data-bg-color").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  ////////////////////////////////////////////////////
  // 08. Nice Select Js
  $(".fm-landing-filter-option-wrapper select").niceSelect();

  ////////////////////////////////////////////////////
  // 09. Cart Plus Minus Js
  $(".cart-plus-minus").append(
    '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
  );
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  ///////////////////////////////
  //10. range slider activation
  $("#fm-slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#fm-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });

  ////////////////////////////////
  //11.  musk-img
  $("[data-mask").each(function () {
    $(this).css(
      "-webkit-mask-image",
      "url( " + $(this).attr("data-mask") + "  )"
    );
    $(this).css("mask-image", "url( " + $(this).attr("data-mask") + "  )");
  });

  ////////////////////////////////////////////////////
  // 12. slider__active Slider Js
  if (jQuery(".fm-slider-active").length > 0) {
    let sliderActive1 = ".fm-slider-active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      parallex: true,
      speed: 1000,
      freeMode: false,
      grabCursor: true,
      parallax: true,
      loop: true,
      effect: "fade",
      paginationClickable: true,

      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".fm-slider-main-slide-pagination",
        clickable: true,
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  ////////////////////////////////////////////////////
  // 05. slider__active Slider Js
  /* ===============================  Swiper slider  =============================== */

  if (jQuery(".fm-slider-active").length > 0) {
    let sliderActive1 = ".cm-slider-active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      parallex: true,
      speed: 1000,
      freeMode: false,
      grabCursor: true,
      parallax: true,
      loop: true,
      effect: "fade",
      paginationClickable: true,

      autoplay: {
        delay: 7000,
      },
      pagination: {
        el: ".fm-slider-main-slide-pagination",
        clickable: true,
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  ////////////////////////////////////////////////////
  // 13. Masonary Js
  $(".gallery-grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".gallery-grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  ////////////////////////////////////////////////////////
  //  14. Sidebar
  $(".fm-header-bar-1").on("click", function () {
    $(".overlay").addClass("visible-overlay");
    $(".fm-header-sidebar-area").addClass("header-sidebar-visible");
  });
  $(".fm-header-sidebar-action a, .overlay").on("click", function () {
    $(".overlay").removeClass("visible-overlay");
    $(".fm-header-sidebar-area").removeClass("header-sidebar-visible");
  });

  //////////////////////////////////////////////////////
  // 15. blog-slider
  var fmProjectFilmsActive = new Swiper(".fm-movie-slider-active", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: ".fm-movie-next",
      prevEl: ".fm-movie-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".fm-movie-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
    },
  });

  //////////////////////////////////////////////////////
  // 16. portfolio-slider
  var fmProjectVideo2Active = new Swiper(".fm-project-video2-active", {
    direction: "horizontal",
    loop: true,
    speed: 1500,
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    mousewheel: true,
    mousewheelControl: true,
    keyboard: true,
    navigation: {
      nextEl: ".fm-film-testimonial-next",
      prevEl: ".fm-film-testimonial-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  });

  //////////////////////////////////////////////////////
  // 17. collections slider
  $(".brand-active").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow:5,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Enable looping
    infinite: true,
  });
  

  //////////////////////////////////////////////////////
  // 18. portfolio-details-active
  var gallerySlider2 = new Swiper(".portfolio-slider-active", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    observeParents: true,
    observer: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: "auto",
      },
      992: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      576: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      0: {
        slidesPerView: "auto",
      },
    },
  });

  //////////////////////////////////////////////////////
  // 19. Landing slider 01
  var fmLandingTrendingSliderActive = new Swiper(
    ".fm-landing-trending-slider-active",
    {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 4,
      centeredSlides: false,
      navigation: {
        nextEl: ".fm-landing-trending-next",
        prevEl: ".fm-landing-trending-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    }
  );

  //////////////////////////////////////////////////////
  // 20. Landing  slider 02
  var fmLandingPremiumSliderActive = new Swiper(
    ".fm-landing-premium-slider-active",
    {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 5,
      centeredSlides: false,
      navigation: {
        nextEl: ".fm-landing-premium-next",
        prevEl: ".fm-landing-premium-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    }
  );

  //////////////////////////////////////////////////////
  // 21. Landing  slider 03
  var fmLandingGenreSliderActive = new Swiper(
    ".fm-landing-genre-slider-active",
    {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 6,
      centeredSlides: false,
      navigation: {
        nextEl: ".fm-landing-genre-next",
        prevEl: ".fm-landing-genre-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    }
  );

  //////////////////////////////////////////////////////
  // 22. blog activation
  var swiper = new Swiper(".blog-active", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    observer: true,
    observeParents: true,
    rtl: rtl_setting,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".blog-slider-button-next",
      prevEl: ".blog-slider-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

  //////////////////////////////////////////////////////
  // 23. Shop details activation
  var swiper = new Swiper(".related-film-active", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    observer: true,
    observeParents: true,
    rtl: rtl_setting,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".film-slider-button-next",
      prevEl: ".film-slider-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });

  ///////////////////////////////////

  /*--------------------------------------
        Team Active
    ---------------------------------------*/
  $(document).on("mouseover", ".fm-team-item", function () {
    $(this).addClass("active");
    $(".fm-team-item").removeClass("active");
    $(this).addClass("active");
  });

  //////////////////////////////////////////////////////
  // 24. Featured activation
  var swiper = new Swiper(".featured-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    centeredSlides: true,
    observeParents: true,
    observer: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".product-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".featured-slider-button-next",
      prevEl: ".featured-slider-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  ////////////////////////////////////////////////
  // home-5-slide

  // fm-sliderfull-active

  if (jQuery(".fm-sliderfull-active").length > 0) {
    let fmSliderFullactive = ".fm-sliderfull-active";
    let fmSliderFullInit1 = new Swiper(fmSliderFullactive, {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 30,
      parallax: true,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".fm-sliderfull-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".fm-sliderfull-next",
        prevEl: ".fm-sliderfull-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(fmSliderFullactive + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(fmSliderFullactive, fmSliderFullInit1);
  }

  //////////////////////////////////////////////////////
  // 25. Text scroll activation
  let featured__scroll = new Swiper(".text-scroll", {
    allowTouchMove: false,
    loop: true,
    freemode: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    speed: 15000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  //////////////////////////////////////////////////////
  // 26. Testimonial activation
  var swiper = new Swiper(".testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    observeParents: true,
    observer: true,
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  // . Testimonial activation 2
  var swiper = new Swiper(".testimonial-active-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    observeParents: true,
    observer: true,
    navigation: {
      nextEl: ".fm-slider-next",
      prevEl: ".fm-slider-prev",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    // Responsive breakpoints
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  /////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  // . certificate activation
  var swiper = new Swiper(".certificate-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    observeParents: true,
    observer: true,
    navigation: {
      nextEl: ".fm-slider-next",
      prevEl: ".fm-slider-prev",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    // Responsive breakpoints
    breakpoints: {
      450: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  /////////////////////////////////////////////////////

  // 27 Landing slider 04
  var mySwiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  var mySwiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
  var mySwiper3 = new Swiper(".mySwiper3", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  var mySwiper4 = new Swiper(".mySwiper4", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

  /////////////////////////////////////////////////////
  // 09. Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          // $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
          //   e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          // }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });
  ////////////////////////
  // menu-slide

  /////////////////////////////////////////////
  // Gsap Animation Start

  // gsap plugin resister
  gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Home 6 Hero Animation
  let homeStratup = gsap.timeline();

  // Charchater Come long Animation
  let hero6_title = document.querySelector(".hero__six_anim .hero__title-6");
  let hero6_desc = document.querySelector(".hero__six_anim span");

  let hero6_button = document.querySelector(".hero__six_anim a");
  let hero6_image = document.querySelector(".hero__right-6 img");

  gsap.set(hero6_image, {
    opacity: 0,
    y: 50,
  });
  gsap.set(hero6_button, {
    opacity: 0,
    y: 50,
  });

  let split_hero6_title = new SplitText(hero6_title, {
    type: "chars",
  });
  let split_hero6_desc = new SplitText(hero6_desc, {
    type: "chars words",
  });

  homeStratup.from(
    split_hero6_desc.words,
    {
      duration: 1,
      x: 50,
      autoAlpha: 0,
      stagger: 0.05,
    },
    "-=1"
  );

  homeStratup.from(split_hero6_title.chars, {
    duration: 1,
    x: 70,
    autoAlpha: 0,
    stagger: 0.2,
  });

  homeStratup.to(
    hero6_button,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=1.5"
  );

  homeStratup.to(
    hero6_image,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=1"
  );

  /////////////////////////////////////////////////////
  // 03.  Hero Animation home-02
  let homeCreative = gsap.timeline();

  // Charc Come long Animation
  let telling = document.querySelector(".fm-sec-title .telling");
  let story = document.querySelector(".fm-sec-title .story");
  let heroContent = document.querySelector(".fm-hero-content .animate_content");

  let split_creative = new SplitText(telling, {
    type: "chars",
  });
  let split_solution = new SplitText(story, {
    type: "chars",
  });
  let split_herocontent = new SplitText(heroContent, {
    type: "chars words",
  });

  homeCreative.from(split_creative.chars, {
    duration: 1,
    x: 70,
    autoAlpha: 0,
    stagger: 0.1,
  });
  homeCreative.from(
    split_solution.chars,
    {
      duration: 1,
      x: 70,
      autoAlpha: 0,
      stagger: 0.1,
    },
    "-=1"
  );
  homeCreative.from(
    split_herocontent.words,
    {
      duration: 1,
      x: 60,
      autoAlpha: 0,
      stagger: 0.03,
    },
    "-=1"
  );

  ///////////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  //  device
  if (device_width > 100) {
    /////////////////////////////////////////////////////
    // 05. All Sec Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");
    splitTitleLines.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
      });
      gsap.set(splitTextLine, {
        perspective: 400,
      });
      itemSplitted.split({
        type: "lines",
      });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    /////////////////////////////////////////////////////
    // 06.  3-item------fadeUP-----same-time
    gsap.set(".all__item-fade ", {
      y: 50,
      opacity: 0,
    });

    const fadeArray = gsap.utils.toArray(".all__item-fade ");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=150",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
        stagger: {
          each: 0.3,
        },
      });
    });

    /////////////////////////////////////////////////////////
    //07. Paragraph Animation
    let textIntoView = $(".p-text");
    gsap.utils.toArray(textIntoView).forEach(function (elem) {
      const innerSplit = new SplitText(elem, {
        type: "lines",
        linesClass: "text-line",
      });
      const outerSplit = new SplitText(elem, {
        type: "lines",
        linesClass: "text-mask",
      });

      const splitTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          scrub: false,
          pin: false,
          start: "top 90%",
          end: "bottom 0%",
        },
        onComplete: () => {
          outerSplit.revert(), innerSplit.revert();
        },
      });

      splitTimeline
        .to(innerSplit.lines, {
          duration: 1.1,
          autoAlpha: 1,
          y: 0,
          ease: "Power4.easeOut",
          stagger: 0.2,
        })
        .to(
          elem,
          {
            duration: 0,
            autoAlpha: 1,
          },
          "<"
        );
    });

    //////////////////////////////////////////////////
    //08. Fade In Bottom Animation |  bdFadeBottom
    gsap.set(".bdFadeBottom", {
      y: 30,
      opacity: 0,
    });

    if (device_width < 1023) {
      const fadeArray = gsap.utils.toArray(".bdFadeBottom");
      fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
          },
        });
        fadeTl.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
        });
      });
    } else {
      gsap.to(".bdFadeBottom", {
        scrollTrigger: {
          trigger: ".bdFadeBottom",
          start: "top center+=300",
          markers: false,
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        stagger: {
          each: 0.2,
        },
      });
    }
  }

  /////////////////////////////////////////////////////
  // 09. fade-bottom
  gsap.set(".fade_bottom", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom", {
      scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top bottom-=100",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////
  // 10. fade-bottom-2
  gsap.set(".fade_bottom_2", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_2");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom_2", {
      scrollTrigger: {
        trigger: ".fade_bottom_2",
        start: "top bottom-=100",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////
  // . fade-bottom-3
  gsap.set(".fade_bottom_3", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_3");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom_3", {
      scrollTrigger: {
        trigger: ".fade_bottom_3",
        start: "top center+=300",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // . fade-bottom-4
  gsap.set(".fade_bottom_4", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_4");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom_4", {
      scrollTrigger: {
        trigger: ".fade_bottom_4",
        start: "top center+=300",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  // . fade-bottom-5
  gsap.set(".fade_bottom_5", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_5");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom_5", {
      scrollTrigger: {
        trigger: ".fade_bottom_5",
        start: "top center+=300",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // . fade-bottom-6
  gsap.set(".fade_bottom_6", {
    y: 30,
    opacity: 0,
  });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_6");
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade_bottom_6", {
      scrollTrigger: {
        trigger: ".fade_bottom_6",
        start: "top center+=300",
        markers: false,
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });
  }

  /////////////////////////////////////////////////////

  //11.  fade Animation (fade-on-by-on) smooth
  let fade_animation = gsap.utils.toArray(".fade_animation .fade__anim-item");
  if (device_width < 1023) {
    fade_animation.forEach((item, i) => {
      gsap.set(item, {
        opacity: 0,
        y: 60,
      });
      let featured2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=150",
        },
      });
      featured2Timeline.to(item, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    });
  } else {
    gsap.set(".fade_animation .fade__anim-item", {
      opacity: 0,
      y: 40,
    });
    gsap.to(".fade_animation .fade__anim-item", {
      scrollTrigger: {
        trigger: ".fade_animation",
        start: "top bottom-=150",
      },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.3,
    });
  }
  //////////////////////////////////////////////////////
  // 12. Accordion-fix JS
  // ScrollTrigger.create({
  //   trigger: ".bd-accordion-fix",
  //   start: "top top",
  //   end: "+=50",
  //   pin: true,
  //   pinSpacing: "margin",
  // });

  if ($(".bd-accordion-fix").length > 0) {
    ScrollTrigger.create({
      trigger: ".bd-accordion-fix",
      start: "top top",
      end: "+=50",
      pin: true,
      pinSpacing: "margin",
    });
  }

  // 13. nav-tab fix js
  ScrollTrigger.create({
    trigger: ".bd-nav-tabs-fix",
    start: "top top",
    end: "+=50",
    pin: true,
    pinSpacing: "margin",
  });

  ////////////////////////////////////////
  // 13. Fade right | together all-item | smooth & fast
  gsap.set(".team__animation .team__item", {
    x: 50,
    opacity: 0,
  });

  if (device_width < 1023) {
    const teamItem = gsap.utils.toArray(".team__animation .team__item");
    teamItem.forEach((teamItem, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: teamItem,
          start: "top center+=200",
        },
      });
      blogTl.to(teamItem, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".team__animation .team__item", {
      scrollTrigger: {
        trigger: ".team__animation .team__item",
        start: "top center+=300",
        markers: false,
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3,
      },
    });
  }

  ///////////////////////////////////
  // 14. fade_up
  gsap.set(".bdFadeUp", {
    y: 30,
    opacity: 0,
  });
  const fadeArray = gsap.utils.toArray(".bdFadeUp");
  fadeArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=150",
      },
    });
    fadeTl.to(item, {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
    });
  });

  ////////////////////////////////////

  // 15. Fade Left
  gsap.set(".fade__item_left", {
    x: -50,
    opacity: 0,
  });

  const fadeLeftArray = gsap.utils.toArray(".fade__item_left");
  fadeLeftArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center+=200",
      },
    });
    fadeTl.to(item, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      delay: 0.5,
      stagger: {
        each: 0.3,
      },
    });
  });

  ///////////////////////////////////
  // 16. Fade left | tow item together | smooth & fast
  gsap.set(".fade__two-item-left", {
    x: -50,
    opacity: 0,
  });
  if (device_width < 1023) {
    const fade__lefta = gsap.utils.toArray(".fade__two-item-left");
    fade__lefta.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  } else {
    gsap.to(".fade__two-item-left", {
      scrollTrigger: {
        trigger: ".fade__two-item-left",
        start: "top center+=300",
        markers: false,
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.5,
      },
    });
  }
  ///////////////////////////////////////
  // 17. Fade Right
  gsap.set(".fade__item_right", {
    x: 50,
    opacity: 0,
  });

  const fadeRightArray = gsap.utils.toArray(".fade__item_right");
  fadeRightArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=100",
      },
    });
    fadeTl.to(item, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      delay: 0.5,
      stagger: {
        each: 0.3,
      },
    });
  });

  /////////////////////////////////////////////////////
  // 18. pricing-fade fade-left | smooth
  let animation__pricing = gsap.utils.toArray(
    ".animation__pricing .service__item-2"
  );
  gsap.set(animation__pricing, {
    opacity: 0,
    x: -30,
  });

  if (animation__pricing) {
    if (device_width < 1023) {
      animation__pricing.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false,
          },
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4,
          },
        });
      });
    } else {
      gsap.to(".animation__pricing .service__item-2", {
        scrollTrigger: {
          trigger: ".animation__pricing",
          start: "top center+=200",
          markers: false,
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4,
        },
      });
    }
  }

  // 19. Tilt Img JS
  let tilt = document.querySelectorAll(".img-tilt");
  if (tilt) {
    VanillaTilt.init(document.querySelectorAll(".img-tilt"), {
      max: 15,
      speed: 3000,
    });
  }

  /////////////////////////////////////////////////////
  // 20. blog  Animation | 3-item fade-left all together
  let service__items_3 = gsap.utils.toArray(".blog__animation-wrapper");
  let service__items_heading = gsap.utils.toArray(
    ".blog__animation-wrapper .fm-blog-thumb"
  );
  let service__items_content = gsap.utils.toArray(
    ".blog__animation-wrapper .blog__content"
  );

  service__items_3.forEach((service_item, i) => {
    gsap.set([service__items_heading[i], service__items_content[i]], {
      x: -30,
      opacity: 0,
    });

    let service3_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: service_item,
        start: "top center+=200",
        markers: false,
      },
    });

    service3_timeline.to(service__items_heading[i], {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2,
      },
    });
    service3_timeline.to(
      service__items_content[i],
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
        stagger: {
          each: 0.2,
        },
      },
      "-=1"
    );
  });

  /////////////////////////////////////////////////////
  // 21. Button Move Animation parallax-animation
  const all_btns = gsap.utils.toArray(".btn_wrapper");
  if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn_wrapper");
  } else {
    var all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const all_btn_cirlce = gsap.utils.toArray(".btn__item-move");
  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });

    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 50);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  //////////////////////////////////////////////////
  // 22. All Buttons Bounce
  let arr1 = gsap.utils.toArray("#btn_wrapper");
  let arr2 = gsap.utils.toArray(".btn_wrapper");
  const all_buttons = arr1.concat(arr2);

  all_buttons.forEach((btn) => {
    if (!btn.classList.contains("")) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      });
    }
  });

  /////////////////////////////////////////////////////
  ///////////////////////////////////
  // 16. Fade left | tow item together | smooth & fast
  gsap.set(".fade__two-item-left2", {
    x: -50,
    opacity: 0,
  });
  if (device_width < 1023) {
    const fade__lefta = gsap.utils.toArray(".fade__two-item-left2");
    fade__lefta.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=50",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8,
      });
    });
  } else {
    gsap.to(".fade__two-item-left2", {
      scrollTrigger: {
        trigger: ".fade__two-item-left2",
        start: "top bottom-=50",
        markers: false,
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 0.8,
      stagger: {
        each: 0.2,
      },
    });
  }
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////
  // 23. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  /////////////////////////////////////////////////////
})(jQuery);




$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".wrap1, .input11").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});

// ===========clock==========
let hour = document.querySelector(".hour")
let minute = document.querySelector(".min")
let second = document.querySelector(".sec")
let digital = document.querySelector(".time")

setInterval(() => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hr_rotate = 30*hr + min/2;
    let min_rotate = 6*min;
    let sec_rotate = 6*sec;

    hour.style.transform = `rotate(${hr_rotate}deg)`
    minute.style.transform = `rotate(${min_rotate}deg)`
    second.style.transform = `rotate(${sec_rotate}deg)`

    digital.innerHTML = `${hr}` + ":" + `${min}` + ":" + `${sec}`;
}, 1000);





$(document ).ready(function() {
  var x = 0.5;
  var y = 0.5;
  var maxRotation = 18; 
  var perspective = 1000;
  
  $(document).mousemove(function(event){
    var pos = [event.pageX / document.body.clientWidth, event.pageY / document.body.clientHeight];
    for (var i=0;i < pos.length;i++) {
      if (pos[i]<0) {
        pos[i] = 0;
      }
      if (pos[i]>1) {
        pos[i] = 1;
      }
    }
    pos[0] = Math.round(((pos[0]*2)-1)*maxRotation);
    pos[1] = Math.round(((pos[1]*-2)+1)*maxRotation);
  $(".glance").css("transform", "perspective(" + perspective + ") rotateX("+pos[1]+"deg) rotateY("+pos[0]+"deg)");
  $(".glance").css("-webkit-transform", "perspective(" + perspective +    ") rotateX("+pos[1]+"deg) rotateY("+pos[0]+"deg)");
  });
});



    // product Gallery and Zoom

    // activation carousel plugin
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 20,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
          0: {
              slidesPerView: 3,
          },
          992: {
              slidesPerView: 4,
          },
      }
  });
  var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      thumbs: {
          swiper: galleryThumbs
      },
  });
  // change carousel item height
  // gallery-top
  let productCarouselTopWidth = $('.gallery-top').outerWidth();
  $('.gallery-top').css('height', productCarouselTopWidth);

  // gallery-thumbs
  let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
  $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

  // activation zoom plugin
  var $easyzoom = $('.easyzoom').easyZoom();