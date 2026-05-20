$(function () {
  // 1. classList
  // $(".menu > li").hover(
  //   function () {
  //     $(this).find(".submenu").addClass("active");
  //   },

  //   function () {
  //     $(this).find(".submenu").removeClass("active");
  //   },
  // );

  // 1-2. toggleClass()
  //   $(".menu > li").hover(function () {
  //     $(this).find(".submenu").toggleClass("active");
  //   });

  // 2. slideDown / slideUp (전체 메뉴)
  //   $(".menu").hover(
  //     function () {
  //       $(".submenu").stop().slideDown(500);
  //     },
  //     function () {
  //       $(".submenu").stop().slideUp(500);
  //     },
  //   );

  // 2-2. slideToggle (전체 메뉴)
  //   $(".menu").hover(function () {
  //     $(".submenu").stop().slideToggle(500);
  //   });

  // 3. fadeToggle (전체 메뉴)
  //   $(".menu").hover(function () {
  //     $(".submenu").stop().fadeToggle(300);
  //   });

  // 4. 각 메뉴의 서브메뉴 slideToggle
  // $(".menu > li").hover(function () {
  //         $(this).find(".submenu").stop().slideToggle(500);
  //   });

  // 5. 전체 메뉴 + 헤더 배경
  // $(".menu").hover(function () {
  //   $(".submenu, .header-bg").stop().slideToggle(300);
  // });

  // 6. 각 서브 메뉴 + 헤더 배경
  $(".menu > li").hover(
    function () {
      $(this).find(".submenu").stop().slideDown(400);
      $(".header-bg").stop().slideDown(400);
    },
    function () {
      $(this).find(".submenu").stop().slideUp(400);
      $(".header-bg").stop().slideUp(400);
    },
  );
});
