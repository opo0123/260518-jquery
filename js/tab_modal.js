$(function () {
  // 탭메뉴
  $(".tabmenu > li > a").click(function () {
    // console.log(this); // 공지사항, 갤러리 각각 클릭
    $(this).parent().addClass("active").siblings().removeClass();
  });

  // 모달 열기
  $(".notice li:first-child").click(function () {
    // $(".modal").addClass("active");
    $(".modal").show()
  });

  // 모달 닫기
  $(".modal-btn").click(function () {
    // $(".modal").removeClass("active");
    $(".modal").hide()
  });
});
