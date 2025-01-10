// window.onload = () => {
//   searchedLocation();
// };

// 지도 부분

//검색했던 위치 넣기(아직 테스트 안 해봄)
// const searchedLocation = () => {
//   // 값 불러오기

//   var loadedName = localStorage.getItem("name");
//   if (loadedName) {
//     addAddress(loadedName);
//   } else {
//     addAddress("주소 없음");
//   }
// };

//주소-좌표 변환 객체를 생성
function changeInputtext() {
  new daum.Postcode({
    oncomplete: function (data) {
      var addr = data.address; // 최종 주소 변수

      // 주소 정보를 해당 필드에 넣는다.
      document.getElementById("address").value = addr;
    },
  }).open();
}

// 현재위치 버튼 클릭시 현재위치로 텍스트 변경(이거 사용하니까 maker가 안 나옴)
// document.getElementById("showMap").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.getElementById("address").value = "현재 위치 주소";
// });

// 검색창에 검색한 주소 넣기
const addAddress = (address) => {
  document.getElementById("address").value = address;
  localStorage.setItem("name", address);
};
// 주소 검색 이벤트(검색버튼)
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  searchAddressToCoordinate(document.getElementById("address").value);
});
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
//스크롤 위치에 따라 해당하는 menu의 색깔과 마커가 달라짐
window.addEventListener("scroll", () => {
  //현재 영역의 id
  let currentId = "";

  sections.forEach((section) => {
    //각 section의 top 위치
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;

    //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }

    // 해당 메뉴에 marker 이동시켜주기
    menus.forEach((menu) => {
      menu.classList.remove("nav_menu-foused");
      const href = menu.getAttribute("href").substring(1); //substring으로 #제거
      if (href === currentId) {
        //현재 있는 영역의 id와 메뉴의 링크주소가 일치할때
        menu.classList.add("nav_menu-foused");
        setMarker(menu);
        centerMenuItem(menu); // 메뉴 항목을 가운데로 이동
      }
    });
  });
});

// 카드들 나타나는 효과
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".hidesection");

    elements.forEach(function (element) {
      var top_of_element = element.offsetTop;
      var bottom_of_window = window.scrollY + window.innerHeight;

      if (bottom_of_window > top_of_element) {
        element.style.transition = "opacity 1s, margin-top 1.2s";
        element.style.opacity = "1";
        element.style.marginTop = "0px";
      }
    });
  });
});

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
