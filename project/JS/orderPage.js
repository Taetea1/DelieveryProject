window.onload = () => {
  // searchedLocation();
};

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

// 현재위치 버튼 클릭시 현재위치로 텍스트 변경
document.getElementById("showMap").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("address").value = "현재 위치 주소";
});

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
