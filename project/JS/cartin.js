const cartarr = JSON.parse(window.localStorage.getItem("cart")) || [];

window.onload = () => {
  searchedLocation();
  numbercart();
  menucreate(cartarr);
};
const loginBtn = document.querySelector(".loginicon");
loginBtn.addEventListener("click", function () {
  readyalert();
});
// 준비중 함수
const readyalert = () => {
  Swal.fire({
    icon: "info",
    title: "로그인기능은 준비중입니다.",
  });
};

const searchedLocation = () => {
  // 값 불러오기

  var loadedName = window.localStorage.getItem("name");
  if (loadedName) {
    addAddress(loadedName);
  } else {
    addAddress("주소를 입력해주세요");
  }
};

// 검색창에 검색한 주소 넣기
const addAddress = (address) => {
  document.getElementById("adressbox").innerText = address;
};

// 여기까지 헤더

console.log(cartarr);
function numbercart() {
  document.querySelector(".circlenum").innerText = `${cartarr.length}`;
}

// 담긴 메뉴 만들어지는 곳
function menucreate(data) {
  if (data) {
    const mainwrap = document.querySelector(".main-wrap");
    mainwrap.innerHTML = "";
    data.map((item, index) => {
      const numbering = Number(item.price * item.cnt).toLocaleString();
      mainwrap.innerHTML += ` <div class="box">
        <img
        class = "boximg"
          src="${item.image}"
          alt="burger"
        />
        <div class="box-napr">
          <div class="box-prna">이름 : ${item.name}</div>
          <div class="box-prna">가격 : ${numbering}원</div>
        </div>
        <div class="number">
          <img onclick = "plus(${index})" class = "plus" src="../image/addicon.png" alt="plus" />
          <span class = "cnt${item.name}">${item.cnt}</span>
          <img onclick = "minus(${index})" class = "minus" src="../image/removeicon.png" alt="minus" />
        </div>
      </div>`;
    });
    mainwrap.innerHTML += `<div class="btnbox">
    <span onclick = "reset()">장바구니 비우기</span>
    <span onclick = "checkOut()">결제하기</span>
  </div>`;
  } else {
    const mainwrap = document.querySelector(".main-wrap");
    mainwrap.innerHTML = `<img class = "tung1" src = "../image/tung.png" alt = "tung" />`;
  }
}
function plus(i) {
  cartarr[i].cnt += 1;

  window.localStorage.setItem("cart", JSON.stringify(cartarr));

  const data = JSON.parse(window.localStorage.getItem("cart"));
  menucreate(data);
}
function minus(i) {
  if (cartarr[i].cnt > 1) cartarr[i].cnt -= 1;
  window.localStorage.setItem("cart", JSON.stringify(cartarr));

  const data = JSON.parse(window.localStorage.getItem("cart"));
  menucreate(data);
}

function reset() {
  localStorage.removeItem("cart");
  const data = JSON.parse(window.localStorage.getItem("cart"));
  menucreate(data);
}

function checkOut() {
  let price = 0;
  cartarr.forEach((item) => {
    for (let j = 0; j < item.cnt; j++) {
      price += Number(item.price);
    }
  });
  Swal.fire({
    title: `총합 ${price}원 결제할까요?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "취소",
    confirmButtonText: "결제",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "미구현 기능입니다.",
        icon: "error",
        draggable: true,
      });
    }
  });
}
