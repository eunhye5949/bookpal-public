$(function () {
  $("#header .header_inner").removeClass(
    "scroll border-soild border-bottom-line color-bg-01"
  );
  $("#header .gnb .home p").addClass("color-btn-01");
  $("#header .gnb .home p").removeClass("white-always");
  $("#Mnavigation>li.home .txt").addClass("color-btn-01");
  $("#Mnavigation>li.home .txt").removeClass("color-txt-05");
  $("#header .gnb .txt").removeClass("color-txt-normal");
  $("#header .gnb .txt").addClass("white-always");

  var $win = $(window),
    $scrolltop = $(document).scrollTop(),
    $headerInner = $("#header .header_inner"),
    $visual = $("#visual");

  $headerInner.hover(function () {
    var nowScroll = $win.scrollTop();
    if (nowScroll == 0) {
      $(this).toggleClass("scroll border-soild border-bottom-line color-bg-01");
      $("#header .gnb .txt").toggleClass("white-always", "color-txt-normal");
    }
  });

  $win.scroll(function () {
    var nowScroll = $win.scrollTop();

    var scrollHeight = $(".app_banner").get(0).offsetHeight;

    if (!scrollHeight) {
      scrollHeight = 0;
    }

    if (scrollHeight >= nowScroll) {
      $("#header .header_inner").removeClass(
        "scroll border-soild border-bottom-line color-bg-01"
      );
      $("#header .gnb .txt").removeClass("color-txt-normal");
      $("#header .gnb .txt").addClass("white-always");
    } else {
      $("#header .header_inner").addClass(
        "scroll border-soild border-bottom-line color-bg-01"
      );
      $("#header .gnb .txt").addClass("color-txt-normal");
      $("#header .gnb .txt").removeClass("white-always");
    }
  });

  var bgSwiper = new Swiper("#visual .bg", {
    spaceBetween: 1,
    slidesPerView: 1,
    loop: true,
    effect: "fade",
  });

  var mainSwiper = new Swiper("#visual .banner", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    watchOverflow: true,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 0,
      stretch: 39,
      depth: 0,
      modifier: 1,
      slideShadows: false,
      scale: 0.7,
    },
    thumbs: {
      swiper: bgSwiper,
    },
    navigation: {
      nextEl: "#visual .swiper-button-next",
      prevEl: "#visual .swiper-button-prev",
    },
    pagination: {
      el: "#visual .swiper-pagination",
      clickable: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var keywordSwiper = new Swiper(".keyword .swiper", {
    slidesPerView: "auto",
    spaceBetween: 4,
    watchOverflow: true,
    freeMode: {
      enabled: false,
    },
  });

  var $appBanner = $(".app_banner");
  var closeTimeKey = "app_banner_closed_time";

  function adjustLayout() {
    return false;

    var nowScroll = $win.scrollTop();

    if ($win.width() <= 999) {
      $headerInner.animate({ top: "48px" }, 0);
      if ($appBanner.length > 0 && $appBanner.css("display") == "none") {
        $visual.animate({ "padding-top": "48px" }, 0);
        $headerInner.animate({ top: 0 }, 0);
      } else if ($appBanner.length > 0 && $appBanner.css("display") == "flex") {
        if (nowScroll == 0) {
          $headerInner.animate({ top: "48px" }, 0);
          $visual.animate({ "padding-top": "96px" }, 0);
        } else {
          $headerInner.animate({ top: 0 }, 0);
          $visual.animate({ "padding-top": "48px" }, 0);
        }
      }
    } else {
      $headerInner.animate({ top: 0 }, 0);
      $visual.animate({ "padding-top": "92px" }, 0);
    }
  }

  adjustLayout();

  $win.on("scroll resize", adjustLayout);

  // 닫기 버튼 클릭 시
  $(document).on("click", ".app_banner .close_btn", function () {
    $(".app_banner").hide();
    $headerInner.animate({ top: 0 }, 0);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    localStorage.setItem(closeTimeKey, today.getTime());
  });

  // 이전에 닫은 시간을 가져와서 현재 시간과 비교하여 배너를 표시할지 결정
  var closedTime = localStorage.getItem(closeTimeKey);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  if (closedTime && Number(closedTime) === today.getTime()) {
    $(".app_banner").hide();
    $headerInner.animate({ top: 0 }, 0);
  }
});
