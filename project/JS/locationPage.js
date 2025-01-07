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
              "위치 정보를 가져오는 데 시간이 너무 걸렸습니다. 다시 시도해 주세요.";
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
window.onload = () => {
  moveCurrnet(); //현재위치 보여주는 지도
};
document.getElementById("showMap").addEventListener("click", function (e) {
  e.preventDefault();

  moveCurrnet();
});

// 음식 종류 박스 넣기
// let open = false;
// let count = 0;
//list를 만들어 추가하는 함수
// window.addEventListener('scroll', () => {
// 	//스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
// 	if (count < data.length) {
// 		const dropdownGroup = document.getElementById('foodtypeList');
// 		//만약 메뉴의 자식이 없다면 실행
// 		// if (dropdownGroup.children.length <= 0) {

// 		for (let i = 0; i < data.length; i++) {
// 			//li 요소 만들고 class를 줌
// 			const lists = document.createElement('li');
// 			lists.className = 'list';

// 			//li 요소 밑에 넣을 img요소 만들어 이미지 넣음
// 			const img = document.createElement('img');
// 			img.src = data[i].url;
// 			img.alt = data[i].name;

// 			//li 요소 밑에 넣을 div요소 만들어 이름 넣음
// 			const names = document.createElement('div');
// 			names.innerText = data[i].name;

// 			//li 요소 밑에 이미지, 이름 넣음
// 			lists.appendChild(img);
// 			lists.appendChild(names);

// 			//해당 요소를 누르면 함수 실행되도록
// 			lists.addEventListener('click', readyalert);

// 			//li 요소도 부모 밑에 넣음
// 			dropdownGroup.appendChild(lists);
// 			count++;
// 		}
// 	}

// });

// //구글앱에 넣을 데이터
// const data = [
// 	{ id: 1, name: '전체보기', url: '../image/youtube.png' },
// 	{ id: 2, name: '1인분', url: '../image/youtube.png' },
// 	{ id: 3, name: '프렌차이즈', url: '../image/youtube.png' },
// 	{ id: 4, name: '치킨', url: '../image/youtube.png' },
// 	{ id: 5, name: '양식/피자', url: '../image/youtube.png' },
// 	{ id: 6, name: '중국집', url: '../image/youtube.png' },
// 	{ id: 7, name: '한식', url: '../image/youtube.png' },
// 	{ id: 8, name: '일식/돈까스', url: '../image/youtube.png' },
// 	{ id: 9, name: '족발/보쌈', url: '../image/youtube.png' },
// 	{ id: 10, name: '야식', url: '../image/youtube.png' },
// 	{ id: 12, name: '분식', url: '../image/youtube.png' },
// 	{ id: 13, name: '카페/디저트', url: '../image/youtube.png' },
// 	{ id: 14, name: '편의점/마트', url: '../image/youtube.png' },
// ];

// //준비중 함수
// const readyalert = () => {
// 	alert('기능 준비중입니다.');

// }
