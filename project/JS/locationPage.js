window.onload = () => {
  moveCurrnet(); //현재위치 보여주는 지도
  addMenuBox();
};

// 페이지가 완전히 로드된 후 실행되는 함수
window.addEventListener("load", function () {
  // 1000ms 후에 로딩 화면을 숨기기
  setTimeout(function () {
    var loadDiv = document.getElementById("loadDiv");
    if (loadDiv) {
      loadDiv.style.display = "none"; // 로딩 화면 숨기기
    }
  }, 1000); // 1000ms 지연
});

// 준비중 함수
const readyalert = () => {
  Swal.fire({
    icon: "info",
    title: "로그인기능은 준비중입니다.",
  });
};

// 지도 부분
let map; // 전역 변수로 map 객체 관리
let currentMarker = null; // 전역 변수로 마커 관리

// 지도 생성 및 현재 위치로 이동
const moveCurrnet = () => {
  // 위치 정보를 얻기 위해 Geolocation API 사용
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 사용자의 현재 위치 가져오기
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // 지도 생성 (처음 한 번만 생성)
        if (!map) {
          map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(lat, lon), // 현재 위치로 지도의 중심 설정
            zoom: 17, // 초기 줌 레벨 설정
            minZoom: 7, // 최소 줌 레벨
            zoomControl: true, // 줌 컨트롤 표시
            zoomControlOptions: {
              position: naver.maps.Position.TOP_RIGHT,
            },
          });

          // 지도 클릭 시 마커를 찍고 주소를 받아오기
          naver.maps.Event.addListener(map, "click", (e) => {
            const latlng = e.coord; // 클릭한 좌표

            // 기존 마커가 있으면 삭제
            if (currentMarker) {
              currentMarker.setMap(null);
            }

            // 새로운 마커 생성
            currentMarker = new naver.maps.Marker({
              position: latlng, // 클릭한 위치에 마커 생성
              map: map, // 마커가 표시될 지도
              title: "클릭한 위치", // 마커의 제목
            });

            map.panTo(latlng); // 지도 이동

            // 클릭한 위치의 주소를 받아오기
            getAddressFromLatLng(latlng, addAddress);
          });
        } else {
          map.setCenter(new naver.maps.LatLng(lat, lon)); // 기존 지도 중심 재설정
        }

        // 현재 위치에 마커 표시 (기존 마커가 있으면 삭제 후 갱신)
        if (currentMarker) {
          currentMarker.setMap(null); // 이전 마커 제거
        }

        currentMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lon),
          map: map,
          title: "현재 위치",
        });

        // 현재 위치의 주소를 받아오기
        getAddressFromLatLng(new naver.maps.LatLng(lat, lon), addAddress);
      },
      (error) => {
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

// 현재 위치 버튼 클릭 시
document.getElementById("showMap").addEventListener("click", function (e) {
  e.preventDefault();
  moveCurrnet();
});

// 주소를 화면에 표시하고 로컬 스토리지에 저장
const addAddress = (address) => {
  document.getElementById("address").value = address;
  window.localStorage.setItem("name", address);
};

// 주소로부터 현재 위치를 얻어오기 (Reverse Geocoding)
const getAddressFromLatLng = (latlng, callback) => {
  naver.maps.Service.reverseGeocode(
    {
      location: latlng,
    },
    function (status, response) {
      if (status === naver.maps.Service.Status.OK) {
        const address = response.result.items[0].address; // 가장 가까운 주소
        callback(address);
      } else {
        callback("위치를 찾지 못했습니다.");
      }
    }
  );
};

// 주소 검색 창에서 주소 선택 시
const changeInputText = () => {
  new daum.Postcode({
    oncomplete: (data) => {
      const addr = data.address; // 선택한 주소
      // 주소로 네이버 지도 검색 및 표시
      searchAddressdaum(addr); // 주소로 좌표 검색하여 지도에 표시
    },
  }).open();
};

// 주소를 검색하여 지도에 표시하고 마커 생성(다음주소api에서 사용할 함수)
const searchAddressdaum = (address) => {
  naver.maps.Service.geocode(
    {
      query: address, // 검색할 주소
    },
    (status, response) => {
      // 응답 상태가 OK인 경우에만 처리
      if (
        status === naver.maps.Service.Status.OK &&
        response.v2.addresses.length > 0
      ) {
        const result = response.v2.addresses[0]; // 첫 번째 검색 결과
        const lat = result.y; // 위도
        const lng = result.x; // 경도

        // 좌표로 지도와 마커 표시
        const latlng = new naver.maps.LatLng(lat, lng);

        // 지도 중심을 검색된 위치로 이동 (기존 지도 객체 사용)
        if (map) {
          map.setCenter(latlng); // 기존 지도에서 중심만 변경
        } else {
          // 지도 객체가 없다면 새로 생성
          map = new naver.maps.Map("map", {
            center: latlng,
            zoom: 17,
          });
        }

        // 기존 마커가 있으면 삭제
        if (currentMarker) {
          currentMarker.setMap(null);
        }

        // 새 마커 생성
        currentMarker = new naver.maps.Marker({
          position: latlng, // 마커 위치
          map: map, // 마커가 표시될 지도
          title: address, // 마커의 타이틀
        });

        // 화면에 주소 표시
        addAddress(address);
      } else {
        alert("주소 검색에 실패했습니다.");
      }
    }
  );
};
// 지도 부분 끝

//음식 종류 박스 넣는 부분
// 스크롤시 카테고리 메뉴 생성
window.addEventListener("scroll", () => {
  const winTop = window.scrollY;
  if (winTop >= 100) {
    document.getElementById("foodtypeList").classList.add("revealed");
  }
});

//div를 만들어 추가하는 함수
const addMenuBox = () => {
  const dropMenuGroup = document.getElementById("foodtypeList");
  for (let i = 0; i < data.length; i++) {
    //div 요소 만들고 class를 줌
    const divs = document.createElement("div");
    divs.className = "menuBox";

    //div요소 밑에 요소 추가
    divs.innerHTML = `<a href=orderPage.html${data[i].path}>
    <div class="imgBox"><img src=${data[i].img} alt=${data[i].name} />
    </div></a>`;

    //div 요소도 부모 밑에 넣음
    dropMenuGroup.appendChild(divs);
  }
};

// 데이터
const data = [
  {
    id: 2,
    name: "1인분",
    url: "../image/category-onedish.png",
    path: "#two",
    type: "two",
    img: "../image/solo.png",
  },
  {
    id: 3,
    name: "프렌차이즈",
    url: "../image/category-10.png",
    path: "#three",
    type: "three",
    img: "../image/fran.png",
  },
  {
    id: 4,
    name: "치킨",
    url: "../image/category-02.png",
    path: "#four",
    type: "four",
    img: "../image/chicken.png",
  },
  {
    id: 5,
    name: "양식/피자",
    url: "../image/category-03.png",
    path: "#five",
    type: "five",
    img: "../image/pizzaicon.png",
  },
  {
    id: 6,
    name: "중국집",
    url: "../image/category-04.png",
    path: "#six",
    type: "six",
    img: "../image/chiicon.png",
  },
  {
    id: 7,
    name: "한식",
    url: "../image/category-05.png",
    path: "#seven",
    type: "seven",
    img: "../image/hanicon.png",
  },
  {
    id: 8,
    name: "일식/돈까스",
    url: "../image/category-06.png",
    path: "#eight",
    type: "eight",
    img: "../image/japicon.png",
  },
  {
    id: 9,
    name: "족발/보쌈",
    url: "../image/category-07.png",
    path: "#nine",
    type: "nine",
    img: "../image/pigicon.png",
  },
  {
    id: 10,
    name: "야식",
    url: "../image/category-08.png",
    path: "#ten",
    type: "ten",
    img: "../image/nighticon.png",
  },
  {
    id: 11,
    name: "분식",
    url: "../image/category-09.png",
    path: "#eleven",
    type: "eleven",
    img: "../image/gimbobicon.png",
  },
  {
    id: 12,
    name: "카페/디저트",
    url: "../image/category-11.png",
    path: "#twelve",
    type: "twelve",
    img: "../image/cafeicon.png",
  },
];
//음식 종류 박스 넣는 부분 끝
