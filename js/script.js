$(function () {
  $("#header .header_inner").addClass(
    "scroll border-soild border-bottom-line color-bg-01"
  );
  $("#header .gnb .txt").addClass("color-txt-normal");
  $("#header .gnb .txt").removeClass("white-always");

  $("#footer")
    .find(".info button")
    .click(function () {
      $(".txt_box").slideToggle();
      $(this).toggleClass("show");
    });

  $("#top_btn button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  var $win = $(window);
  var scrolltop = $(document).scrollTop();

  $win.scroll(function () {
    var nowScroll = $win.scrollTop();
    if (nowScroll == 0) {
      $("#aside").hide();
      $("#top_btn").hide();
    } else {
      $("#aside").show();
      $("#top_btn").show();
    }
  });

  $(".select_box p").click(function () {
    $(".select_box p").removeClass("click");
    $(this).addClass("click");
  });

  $(".toast").toast({
    animation: true,
    delay: 2500,
  });

  $(".modal").on("shown.bs.modal", function (e) {
    e.preventDefault();
  });

  if (localStorage.getItem("tooltipClosed") === "true") {
    $(".toolTip").hide();
  }

  $(".toolTip").click(function () {
    $(this).hide();
    localStorage.setItem("tooltipClosed", "true");
  });

  var navMenu = new Swiper(".type_header>div", {
    slidesPerView: "auto",
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true,
  });
  var $navTitle = $(".type_header .swiper-slide");
  $navTitle.click(function () {
    var target = $(this);
    $navTitle.removeClass("on");
    target.addClass("on");
    muCenter(target);
  });

  // 클릭요소 중앙정렬
  function muCenter(target) {
    var snbwrap = $(".type_header .swiper-wrapper");
    var targetPos = target.position();
    var boxWidth = $(".type_header").width();
    var wrapWidth = 0;
    snbwrap.find(".swiper-slide").each(function () {
      wrapWidth += $(this).outerWidth();
    });

    var selectTargetPos = targetPos.left + target.outerWidth() / 2;
    var pos;
    if (selectTargetPos <= boxWidth / 2) {
      pos = 0;
    } else if (wrapWidth - selectTargetPos <= boxWidth / 2) {
      pos = wrapWidth - boxWidth;
    } else {
      pos = targetPos.left - boxWidth / 2 + target.outerWidth() / 2;
    }

    if (wrapWidth > boxWidth) {
      setTimeout(function () {
        snbwrap.css({
          transform: "translate3d(" + pos * -1 + "px, 0, 0)",
          "transition-duration": "500ms",
        });
      }, 200);
    }
  }

  $("#orderLink").click(function (event) {
    event.preventDefault();
    var popupWidth = 420;
    var popupHeight = 640;
    var popupX = (window.innerWidth - popupWidth) / 2;
    var popupY = (window.innerHeight - popupHeight) / 2;
    var url = $(this).attr("href");
    var popupX = window.screenX + (window.innerWidth - popupWidth) / 2;
    var popupY = window.screenY + (window.innerHeight - popupHeight) / 2;
    popupWindow = window.open(
      url,
      "",
      "status=no, location=no, height=" +
        popupHeight +
        ", width=" +
        popupWidth +
        ", left=" +
        popupX +
        ", top=" +
        popupY
    );
  });
});
