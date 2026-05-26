$(function () {
  // 상품 더미 데이터
  const products = [
    {
      id: 1, // 상품 번호
      name: "러닝화", // 상품 이름
      price: 129000, // 상품 가격
      category: "shoes", // 상품 카테고리
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200", // 상품 이미지
    },
    {
      id: 2,
      name: "백팩",
      price: 89000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200",
    },
    {
      id: 3,
      name: "볼캡",
      price: 39000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200",
    },
    {
      id: 4,
      name: "스니커즈",
      price: 159000,
      category: "shoes",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200",
    },
    {
      id: 5,
      name: "크로스백",
      price: 99000,
      category: "bag",
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200",
    },
    {
      id: 6,
      name: "버킷햇",
      price: 45000,
      category: "cap",
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1200",
    },
  ];
  // 모바일 버튼 클릭 시
  $(".mobile-btn").click(() => {
    $(".mobile-menu").slideToggle();
  });

  // 화면 크기 변경 (반응형)
  $(window).resize(() => {
    // 브라우저가 768px 이상이면,
    if ($(window).width() > 768) {
      // 열린 모바일 메뉴 닫기
      $(".mobile-menu").slideUp();
    }
  });

  // 첫 페이지에 모든 상품 출력 (실행)
  renderProducts(products);

  // 상품 화면에 출력 (함수)
  function renderProducts(list) {
    // 기존 내용 초기화
    $(".product-wrap").empty();

    // 배열 데이터 하나씩 반복
    $.each(list, function (index, item) {
      // 상품 html 추가
      $(".product-wrap").append(`
        <div class="product">
        <!-- 이미지 -->
        <img src="${item.image}" alt="${item.name}" />
        <div class="product-content">
          <!-- 상품 이름 -->
          <h2>${item.name}</h2>
          <!-- 상품 가격 -->
          <p class="price">${item.price.toLocaleString()}원</p>
          <!-- 버튼 (영역) -->
          <div class="btn-wrap">
            <!-- 장바구니 -->
            <button class="cart-btn">장바구니</button>
            <button class="like-btn">❤</button></button>
          </div>
        </div>
      </div>`);
    });
  }

  // 좋아요 버튼 클릭 시
  $(".like-btn").click(function () {
    // console.log(this); 각각 찍힘
    $(this).toggleClass("active");
  });

  // 검색창 입력 필터링
  // keyup : 키보드를 눌렀다 뗄 때 실행
  $(".search-input").on("keyup", function () {
    // val() : 입력한 값 가져오기
    const inputValue = $(this).val().toLowerCase();

    // filter() : 조건에 맞는 요소만 걸러내는 메서드
    const filter = products.filter((item) =>
      item.name.toLowerCase().includes(inputValue),
    );
    renderProducts(filter);
  });

  // 탭버튼 클릭 이벤트
  $(".tab-btn").on("click", function () {
    // 초기화 (active 제거)
    $(".tab-btn").removeClass("active");

    // 클릭한 버튼만 active 추가
    $(this).addClass("active");

    // 클릭한 버튼의 data-category 가져오기
    const itemCategory = $(this).data("category");
    // category가 all이면 상품 모두 출력
    if (itemCategory === "all") {
      renderProducts(products);
    } else {
      // 선택한 category 상품만 출력
      const filter = products.filter((item) => item.category === itemCategory);
      renderProducts(filter);
    }
  });
});
