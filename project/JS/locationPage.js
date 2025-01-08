// 지도 부분

const moveCurrnet = () => {
  // 위치 정보를 얻기 위해 Geolocation API 사용
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // 사용자의 현재 위치 가져오기
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 지도 생성
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(lat, lon), // 현재 위치로 지도의 중심 설정
          zoom: 17, // 초기 줌 레벨 설정
          minZoom: 7, // 최소 줌 레벨
          zoomControl: true, // 줌 컨트롤 표시 여부
          zoomControlOptions: {
            // 줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT,
          },
        });

        // 현재 위치에 마커 표시
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lon),
          map: map,
        });

        // 마커에 정보창 추가
        const infoWindow = new naver.maps.InfoWindow({
          content: '<div class="nowlocation">현재 위치</div>',
        });

        naver.maps.Event.addListener(marker, "click", function () {
          infoWindow.open(map, marker);
        });
        // 원하는 위치에 마커표시
        naver.maps.Event.addListener(map, "click", function (e) {
          marker.setPosition(e.coord);
          map.panTo(e.coord);
          addAddress("이동한 위치 주소");
        });
        addAddress("현재 위치 주소");
      },
      function (error) {
        let errorMessage = "";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "위치 정보를 허용해야 합니다. 위치 서비스 권한을 부여해 주세요.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage =
              "위치 정보를 사용할 수 없습니다. 네트워크 상태나 GPS 신호를 확인해 주세요.";
            break;
          case error.TIMEOUT:
            errorMessage =
              "위치 정보를 가져오는데 시간이 너무 걸렸습니다. 다시 시도해 주세요.";
            break;
          default:
            errorMessage = "알 수 없는 오류가 발생했습니다.";
            break;
        }
        alert(errorMessage);
      }
    );
  } else {
    alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
  }
};

//@@@이거 2개써도 되나??
window.onload = () => {
  moveCurrnet(); //현재위치 보여주는 지도
  addMenuBox();
};

//주소-좌표 변환 객체를 생성
function changeInputtext() {
  new daum.Postcode({
    oncomplete: function (data) {
      var addr = data.address; // 최종 주소 변수

      // 주소 정보를 해당 필드에 넣는다.
      addAddress(addr);
    },
  }).open();
}

// 현재위치 버튼 클릭시 현재위치로 이동
document.getElementById("showMap").addEventListener("click", function (e) {
  e.preventDefault();
  moveCurrnet();
  addAddress("현재 위치 주소");
});

// 검색창에 검색한 주소 넣기
const addAddress = (address) => {
  document.getElementById("address").value = address;
};

// 지도에 마커를 표시하는 함수
function insertAddress(address, latitude, longitude) {
  addAddress(address);
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(latitude, longitude),
    map: map,
    title: address,
  });
}

// 주소 검색 이벤트(엔터)
// document.getElementById("address").addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     // Enter 키 눌렀을 때
//     searchAddressToCoordinate(document.getElementById("address").value);
//   }
// });
// 주소 검색 이벤트(검색버튼)
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  searchAddressToCoordinate(document.getElementById("address").value);
});

// 지도를 이동시키는 함수
function moveMap(lat, lng) {
  var center = new naver.maps.LatLng(lat, lng);
  map.panTo(center);
  map.setZoom(17);
}
// 지도 부분 끝

//음식 종류 박스 넣기
//div를 만들어 추가하는 함수
const addMenuBox = () => {
  const dropMenuGroup = document.getElementById("foodtypeList");
  for (let i = 0; i < data.length; i++) {
    //div 요소 만들고 class를 줌
    const divs = document.createElement("div");
    divs.className = "menuBox";

    //해당 요소를 누르면 함수 실행되도록
    divs.addEventListener("click", readyalert);

    divs.innerHTML = `<div class="textBox">${data[i].name}</div>
    <div class="imgBox"><img src=${data[i].url} alt=${data[i].name} /><div>`;

    //div 요소도 부모 밑에 넣음
    dropMenuGroup.appendChild(divs);
  }
};

//구글앱에 넣을 데이터
const data = [
  { id: 1, name: "전체보기", url: "../image/category-01.png" },
  { id: 2, name: "1인분", url: "../image/category-onedish.png" },
  { id: 3, name: "프렌차이즈", url: "../image/category-10.png" },
  { id: 4, name: "치킨", url: "../image/category-02.png" },
  { id: 5, name: "양식/피자", url: "../image/category-03.png" },
  { id: 6, name: "중국집", url: "../image/category-04.png" },
  { id: 7, name: "한식", url: "../image/category-05.png" },
  { id: 8, name: "일식/돈까스", url: "../image/category-06.png" },
  { id: 9, name: "족발/보쌈", url: "../image/category-07.png" },
  { id: 10, name: "야식", url: "../image/category-08.png" },
  { id: 11, name: "분식", url: "../image/category-09.png" },
  { id: 12, name: "카페/디저트", url: "../image/category-11.png" },
  {
    id: 13,
    name: "편의점/마트",
    url: "../image/category-convenience-store.png",
  },
];

//준비중 함수
const readyalert = () => {
  alert("기능 준비중입니다.");
};

// 스크롤시 카테고리 메뉴들이 생기도록
window.addEventListener("scroll", () => {
  const winTop = window.scrollY;
  if (winTop >= 100) {
    document.getElementById("foodtypeList").classList.add("revealed");
  }
});
