window.onload = () => {
  searchedLocation();
};
//작아졌을때 셀렉트
function changeMenuFromSelect(selectElement) {
  const selectedValue = selectElement.value; // 셀렉트 박스에서 선택된 값
  changeMenu(selectedValue.replace("#", "")); // 'changeMenu' 함수에 ID 값 전달 (값에서 '#'을 제외한)
}
// 셀렉트 메뉴 활성화
function updateselect(type) {
  const menuSelect = document.getElementById("menuSelect");
  menuSelect.value = `#${type}`;
}

//검색했던 위치 넣기
const searchedLocation = () => {
  // 값 불러오기

  var loadedName = window.localStorage.getItem("name");
  if (loadedName) {
    addAddress(loadedName);
  } else {
    addAddress("주소를 입력해주세요");
  }
};

//주소텍스트변경
function changeInputtext() {
  new daum.Postcode({
    oncomplete: function (data) {
      var addr = data.address; // 최종 주소 변수

      // 주소 정보를 해당 필드에 넣는다.
      addAddress(addr);
    },
  }).open();
}
// 검색창에 검색한 주소 넣기
const addAddress = (address) => {
  document.getElementById("adressbox").innerText = address;
};
// 지도 부분 끝

// 메뉴 시작
const marker = document.querySelector(".marker");
const sections = document.querySelectorAll("section");
const menus = document.querySelectorAll(".nav_menu > li > a");

// 메뉴 상단 스크롤하면 맨 위에 고정되도록(페이지구조가 완전히 로드되었을때 실행)
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("nav");
  var navOffsetTop = nav.offsetTop;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= navOffsetTop) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
});

//marker의 길이, 위치 설정
function setMarker(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}
//메뉴 항목을 가운데로 이동시키는 함수
function centerMenuItem(menu) {
  const navBox = menu.closest(".nav-box");
  const menuWidth = menu.offsetWidth;
  const containerWidth = navBox.offsetWidth;

  // 메뉴를 가운데로 정렬할 위치 계산
  const targetLeft =
    menu.getBoundingClientRect().left - navBox.getBoundingClientRect().left;

  const scrollPosition = targetLeft - containerWidth / 2 + menuWidth / 2;

  // 가로 스크롤을 가운데로 이동
  navBox.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
}
// 메뉴 클릭 시 해당하는 섹션으로 스크롤 이동 및 스타일 변경
// 메뉴 항목 클릭 시
menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 클릭 동작(링크 이동) 방지

    // 클릭된 메뉴의 href 속성에서 id 가져오기
    const targetId = menu.getAttribute("href").substring(1); // '#'을 제외한 id값

    // changeMenu 호출하여 메뉴 활성화 및 마커 이동
    changeMenu(targetId);
  });
});
// 해더 클릭시 변환 함수
const changeMenu = (type) => {
  rt_type = type;
  const sectionBox = document.getElementById("sectionBox");

  // sectionBox 초기화
  sectionBox.innerHTML = "";

  // 데이터 처리
  const selectedCategory = rt_data.find((category) => category.id === rt_type);

  if (selectedCategory) {
    const sectionHTML = `<section id="${selectedCategory.id}" class="common">
    <h3 class="card-list-title">${selectedCategory.type}</h3>
    <div class="card-box">`;

    const restaurantHTML = selectedCategory.rt
      .map(
        (restaurant) => `
      <div class="card">
        <div class="logo-box">
        <div class="cardindex">${
          restaurant.menutype ? restaurant.menutype : ""
        }</div>
          <div class="time">${restaurant.time}</div>
          <img src="${restaurant.logo}" class="logoImg" />
        </div>
        <div class="cardtext">
          <div class="cardTitle">${restaurant.name}</div>
          <span class="review">
            <img src="../image/star.png" alt="review" class="reviewImg" />
            <span>${restaurant.star}</span>
          </span>
          <div class="textWrap">
            <div class="titleWrap">
              <div class="title">리뷰</div>
              <div class = "cardReview">${restaurant.review}</div>
            </div>
            <div class="bar">|</div>
            <div class="titleWrap">
              <div class="title">사장님 댓글</div>
              <div class="cardBoss">${restaurant.boss}</div>
            </div>
          </div>
          <div class="happyCoupon">${restaurant.coupon}</div>
        </div>
      </div>
    `
      )
      .join("");

    sectionBox.innerHTML += sectionHTML + restaurantHTML + `</div></section>`;
  } else {
    console.log("해당 카테고리가 없습니다.");
  }
  // 메뉴 활성화 및 마커 위치 변경
  updateMenuAndMarker(type);
  updateselect(type);
};

// 카드 선택하면 이미지, 이름, 보스, 리뷰 받아서 스토리지 저장받고 페이지 이동
document
  .querySelector("#sectionBox")
  .addEventListener("click", (cardSelect) => {
    const selectcard = cardSelect.target.closest(".card");
    if (selectcard) {
      const cardname = selectcard.querySelector(".cardTitle").textContent;
      const cardimg = selectcard.querySelector(".logoImg").src;
      const cardBoss = selectcard.querySelector(".cardBoss").textContent;
      const cardReview = selectcard.querySelector(".cardReview").textContent;
      const cardindex = selectcard.querySelector(".cardindex").textContent;

      window.localStorage.setItem("cardname", cardname);
      window.localStorage.setItem("cardimg", cardimg);
      window.localStorage.setItem("cardBoss", cardBoss);
      window.localStorage.setItem("cardReview", cardReview);
      window.localStorage.setItem("cardindex", cardindex);

      window.location.href = "./shoppingcartpage.html";
    }
  });

// 메뉴 활성화 및 마커 이동
function updateMenuAndMarker(type) {
  const menus = document.querySelectorAll(".nav_menu > li > a");
  const targetMenu = document.querySelector(
    `.nav_menu > li > a[href='#${type}']`
  );

  // 메뉴 활성화
  if (targetMenu) {
    menus.forEach((menu) => menu.classList.remove("nav_menu-foused"));
    targetMenu.classList.add("nav_menu-foused");

    // 마커 이동
    setMarker(targetMenu);

    // 메뉴 항목을 가운데로 이동
    centerMenuItem(targetMenu);
  }
}

// URL에서 해시 값을 추출하고 changeMenu 함수를 호출하는 함수
function handleHashChange() {
  const hash = window.location.hash.slice(1); // '#'을 제외한 해시 값
  if (hash) {
    changeMenu(hash);
  } else {
    changeMenu("all"); // 해시가 없을 경우 기본값으로 'all' 사용
  }
}

// 페이지 로드 시 실행
window.addEventListener("load", handleHashChange);

// URL 해시가 변경될 때마다 실행
window.addEventListener("hashchange", handleHashChange);

// 쿠폰 스와이퍼
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  loop: true, // 루프 기능
  autoplay: {
    delay: 3000, // 3초마다 자동 재생
  },
  watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
});

// 준비중 함수
const readyalert = (name) => {
  if (name === "") {
    alert("기능 준비중입니다.");
  } else {
    alert(`${name}기능 준비중입니다.`);
  }
};
const sAlert = (txt) => {
  Swal.fire({
    title: "쿠폰 ",
    text: "쿠폰을 다운받으시겠어요?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "네",
    cancelButtonText: "아니요",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "받았습니다!",
        text: "My쿠폰함에서 확인해주세요",
        icon: "success",
      });
    }
  });
};

const rt_data = [
  {
    type: "1인분",
    id: "two",
    img: "../image/solo.png",
    rt: [
      {
        menutype: "Mcdonalds",
        time: "22~37분",
        name: "맥도날드-연세대점",
        star: "4.7",
        review: "5,526",
        coupon: "8,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/1인분/맥도날드.jpg",
      },
      {
        time: "24~39분",
        name: "혼밥대왕-홍대점",
        star: "4.9",
        review: "7,364",
        coupon: "3,000원 이상 배달",
        boss: "6,751",
        logo: "../image/orderlogo/1인분/와이스타브.jpg",
      },
      {
        time: "25~40분",
        name: "노브랜드버거-신촌점",
        star: "4.8",
        review: "744",
        coupon: "9,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/1인분/노브랜드버거.jpg",
      },
      {
        time: "22~37분",
        name: "와이스타브-공덕본점",
        star: "4.9",
        review: "143",
        coupon: "5,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/1인분/혼밥대왕.jpg",
      },
    ],
  },
  {
    type: "패스트푸드",
    id: "three",
    img: "../image/fran.png",
    rt: [
      {
        time: "24~39분",
        name: "도미노피자-마포점",
        star: "4.7",
        review: "1,185",
        coupon: "21,900원 이상 배달",
        boss: "5",
        logo: "../image/orderlogo/프랜차이즈/도미노.jpg",
      },
      {
        menutype: "Burgerking",
        time: "24~39분",
        name: "버거킹-신촌1점",
        star: "4.7",
        review: "3,467",
        coupon: "12,000원 이상 배달",
        boss: "84",
        logo: "../image/orderlogo/프랜차이즈/버거킹.jpg",
      },
      {
        time: "33~48분",
        name: "디디치킨-대흥점",
        star: "4.9",
        review: "2,896",
        coupon: "16,000원 이상 배달",
        boss: "909",
        logo: "../image/orderlogo/프랜차이즈/디디치킨.jpg",
      },
      {
        menutype: "Pizzahut",
        time: "21~36분",
        name: "피자헛-신수점",
        star: "4.9",
        review: "960",
        coupon: "18,900원 이상 배달",
        boss: "959",
        logo: "../image/orderlogo/프랜차이즈/피자헛.jpg",
      },
      {
        time: "25~40분",
        name: "삼첩분식-서울은평점",
        star: "4.9",
        review: "3,251",
        coupon: "16,000원 이상 배달",
        boss: "620",
        logo: "../image/orderlogo/프랜차이즈/삼첩분식.jpg",
      },
      {
        time: "24~39분",
        name: "훌랄라참숯치킨-응암이마트점",
        star: "5.0",
        review: "7",
        coupon: "19,900원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/프랜차이즈/훌랄라.jpg",
      },
    ],
  },
  {
    type: "치킨",
    id: "four",
    img: "../image/chicken.png",
    rt: [
      {
        time: "24~39분",
        name: "후라이드참잘하는집-공덕점 ",
        star: "4.7",
        review: "3,859",
        coupon: "13,000원 이상 배달",
        boss: "3,854",
        logo: "../image/orderlogo/치킨/후참.jpg",
      },
      {
        time: "34~49분",
        name: "BHC-이대역점",
        star: "4.7",
        review: "4,600",
        coupon: "18,000원 이상 배달",
        boss: "1,121",
        logo: "../image/orderlogo/치킨/bhc.jpg",
      },
      {
        time: "20~35분",
        name: "그램치킨-마포직영점",
        star: "4.9",
        review: "1,458",
        coupon: "5,000원 이상 배달",
        boss: "1,469",
        logo: "../image/orderlogo/치킨/그램치킨.jpg",
      },
      {
        time: "40~55분",
        name: "바른치킨-공덕파크자이점",
        star: "4.8",
        review: "931",
        coupon: "15,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/치킨/바른.jpg",
      },
    ],
  },
  {
    type: "피자",
    id: "five",
    img: "../image/pizzaicon.png",
    rt: [
      {
        time: "44~59분",
        name: "7번가피자-신촌마포점",
        star: "5.0",
        review: "6,003",
        coupon: "17,900원 이상 배달",
        boss: "3,410",
        logo: "../image/7번가피자.jpg",
      },
      {
        time: "24~39분",
        name: "피자보이시나-신촌점",
        star: "5.0",
        review: "5,119",
        coupon: "15,000원 이상 배달",
        boss: "4,719",
        logo: "../image/orderlogo/피자/피자&양식/피자보이시나.jpg",
      },
      {
        time: "24~39분",
        name: "도미노피자-마포점",
        star: "4.7",
        review: "1,185",
        coupon: "21,900원 이상 배달",
        boss: "5",
        logo: "../image/orderlogo/피자/피자&양식/도미노.jpg",
      },
      {
        time: "45~60분",
        name: "써브웨이-홍익대점",
        star: "0",
        review: "0",
        coupon: "17,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/피자/피자&양식/서브웨이.jpg",
      },
    ],
  },
  {
    type: "중식",
    id: "six",
    img: "../image/chiicon.png",
    rt: [
      {
        time: "24~39분",
        name: "공시우육면",
        star: "4.8",
        review: "473",
        coupon: "13,500원 이상 배달",
        boss: "46",
        logo: "../image/orderlogo/중국집/육시우육면.jpg",
      },
      {
        time: "24~39분",
        name: "중국성-공덕점",
        star: "4.7",
        review: "5,762",
        coupon: "9,000원 이상 배달",
        boss: "3,512",
        logo: "../image/orderlogo/중국집/중국성.jpg",
      },
      {
        time: "24~39분",
        name: "춘리마라탕-신촌점",
        star: "5.0",
        review: "1,587",
        coupon: "12,900원 이상 배달",
        boss: "1,325",
        logo: "../image/orderlogo/중국집/춘리마라탕.jpg",
      },
      {
        time: "24~39분",
        name: "가화만사성",
        star: "4.7",
        review: "31,615",
        coupon: "14,000원 이상 배달",
        boss: "40",
        logo: "../image/orderlogo/중국집/가햐만사성.jpg",
      },
    ],
  },
  {
    type: "찜·탕·찌개",
    id: "seven",
    img: "../image/hanicon.png",
    rt: [
      {
        time: "24~39분",
        name: "디디찜엔닭-대흥점",
        star: "4.7",
        review: "76",
        coupon: "16,000원 이상 배달",
        boss: "10",
        logo: "../image/orderlogo/한식/디디찜앤닭.jpg",
      },
      {
        time: "24~39분",
        name: "기떡찜-성산점",
        star: "4.5",
        review: "42",
        coupon: "16,900원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/한식/기떡찜.jpg",
      },
      {
        time: "24~39분",
        name: "반찬가게슈퍼키친-마포프레스티지자이점",
        star: "4.6",
        review: "19",
        coupon: "16,000원 이상 배달",
        boss: "18",
        logo: "../image/orderlogo/한식/슈퍼키친.jpg",
      },
      {
        time: "24~39분",
        name: "유가네닭갈비-홍대2호점",
        star: "4.6",
        review: "277",
        coupon: "15,000원 이상 배달",
        boss: "152",
        logo: "../image/orderlogo/한식/유가네.jpg",
      },
    ],
  },
  {
    type: "돈까스·회·일식",
    id: "eight",
    img: "../image/japicon.png",
    rt: [
      {
        time: "24~39분",
        name: "벚꽃스시-망원점",
        star: "4.9",
        review: "11,768",
        coupon: "14,900원 이상 배달",
        boss: "3,714",
        logo: "../image/orderlogo/일식/벛꽃스시.jpg",
      },
      {
        time: "38~53분",
        name: "벚꽃스시&사시미-산곡점",
        star: "4.9",
        review: "259",
        coupon: "14,900원 이상 배달",
        boss: "259",
        logo: "../image/orderlogo/일식/벛꽃사시미.jpg",
      },
      {
        time: "20~35분",
        name: "육회바른연어-홍대점",
        star: "4.9",
        review: "4,975",
        coupon: "13,900원 이상 배달",
        boss: "1,774",
        logo: "../image/orderlogo/일식/육회랑연어랑.jpg",
      },
      {
        time: "26~41분",
        name: "갈라파라멘",
        star: "5.0",
        review: "365",
        coupon: "12,900원 이상 배달",
        boss: "7",
        logo: "../image/orderlogo/일식/갈라파라멘.jpg",
      },
    ],
  },
  {
    type: "족발·보쌈",
    id: "nine",
    img: "../image/pigicon.png",
    rt: [
      {
        time: "19~34분",
        name: "귀한족발-홍대서교점",
        star: "5.0",
        review: "928",
        coupon: "11,000원 이상 배달",
        boss: "833",
        logo: "../image/orderlogo/족발/보쌈/귀족.jpg",
      },
      {
        time: "24~39분",
        name: "구구족-이대점",
        star: "4.9",
        review: "9,341",
        coupon: "19,900원 이상 배달",
        boss: "6,890",
        logo: "../image/orderlogo/족발/보쌈/구구족.png",
      },
      {
        time: "24~39분",
        name: "싸움의고수-신촌점",
        star: "4.6",
        review: "1,496",
        coupon: "11,700원 이상 배달",
        boss: "412",
        logo: "../image/orderlogo/족발/보쌈/싸움의고수.jpg",
      },
      {
        time: "24~39분",
        name: "원할머니보쌈-홍대역점",
        star: "4.6",
        review: "1,168",
        coupon: "27,000원 이상 배달",
        boss: "398",
        logo: "../image/orderlogo/족발/보쌈/원할머니보쌈.jpg",
      },
    ],
  },
  {
    type: "야식",
    id: "ten",
    img: "../image/nighticon.png",
    rt: [
      {
        time: "24~39분",
        name: "파스타예요-마포신촌본점",
        star: "4.9",
        review: "902",
        coupon: "9,900원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/야식/파스타예요.jpg",
      },
      {
        time: "24~39분",
        name: "빵위에치즈 피자-마포점",
        star: "5.0",
        review: "5,974",
        coupon: "15,900원 이상 배달",
        boss: "5,957",
        logo: "../image/orderlogo/야식/빵위에치즈.jpg",
      },
      {
        time: "24~39분",
        name: "윤이불닭발-홍대직영점",
        star: "4.9",
        review: "179",
        coupon: "9,900원 이상 배달",
        boss: "78",
        logo: "../image/orderlogo/야식/윤이불닭발.jpg",
      },
      {
        time: "24~39분",
        name: "숯미남숯불치킨&찜닭에미친남자",
        star: "4.9",
        review: "1,292",
        coupon: "5,000원 이상 배달",
        boss: "5",
        logo: "../image/orderlogo/야식/숯미남.jpg",
      },
    ],
  },
  {
    type: "분식",
    id: "eleven",
    img: "../image/gimbobicon.png",
    rt: [
      {
        time: "34~49분",
        name: "동대문엽기떡볶이-신촌점",
        star: "4.8",
        review: "1,594",
        coupon: "14,000원 이상 배달",
        boss: "79",
        logo: "../image/orderlogo/분식/동대문엽기.jpg",
      },
      {
        time: "24~39분",
        name: "김가네-동교동삼거리점",
        star: "4.9",
        review: "893",
        coupon: "15,000원 이상 배달",
        boss: "673",
        logo: "../image/orderlogo/분식/김가네.jpg",
      },
      {
        time: "24~39분",
        name: "옐로우캔-홍대직영점",
        star: "4.7",
        review: "37",
        coupon: "10,000원 이상 배달",
        boss: "0",
        logo: "../image/orderlogo/분식/Yellowcan.jpg",
      },
      {
        time: "24~39분",
        name: "뽁떡떡볶이-공덕점",
        star: "4.9",
        review: "299",
        coupon: "6,100원 이상 배달",
        boss: "266",
        logo: "../image/orderlogo/분식/뽁떡.jpg",
      },
    ],
  },
  {
    type: "카페·디저트",
    id: "twelve",
    img: "../image/cafeicon.png",
    rt: [
      {
        time: "24~39분",
        name: "뚜레쥬르-공덕해링턴점",
        star: "4.9",
        review: "5,009",
        coupon: "12,000원 이상 배달",
        boss: "3,388",
        logo: "../image/orderlogo/카페/디저트/뚜레주르.jpg",
      },
      {
        time: "22~37분",
        name: "구스카토커피-마포대흥점",
        star: "5.0",
        review: "1,393",
        coupon: "9,900원 이상 배달",
        boss: "1,392",
        logo: "../image/orderlogo/카페/디저트/guscato.jpg",
      },
      {
        time: "18~33분",
        name: "백억커피-홍대점",
        star: "4.9",
        review: "341",
        coupon: "7,900원 이상 배달",
        boss: "247",
        logo: "../image/orderlogo/카페/디저트/백억커피.jpg",
      },
      {
        time: "17~32분",
        name: "설빙-서울신촌점",
        star: "4.9",
        review: "1,333",
        coupon: "13,000원 이상 배달",
        boss: "1,135",
        logo: "../image/orderlogo/카페/디저트/설빙.jpg",
      },
    ],
  },
];
