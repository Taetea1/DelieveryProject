window.onload = () => {
    menuCreate(menulist1Data)
    searchedLocation();
      //검색했던 위치 넣기(아직 테스트 안 해봄)
}
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
// function changeInputtext() {
//     new daum.Postcode({
//       oncomplete: function (data) {
//         var addr = data.address; // 최종 주소 변수
  
//         // 주소 정보를 해당 필드에 넣는다.
//         addAddress(addr);
//       },
//     }).open();
//   }
  // 검색창에 검색한 주소 넣기
const addAddress = (address) => {
    document.getElementById("adressbox").innerText = address;
};
// data.js 파일에 저장되어 있는 데이터 배열 호출
import { menulist1Data } from './shoppingcartdata.js';
import { menulist2Data } from './shoppingcartdata.js';
import { menulist3Data } from './shoppingcartdata.js';
import { menulist4Data } from './shoppingcartdata.js';
import { menulist5Data } from './shoppingcartdata.js';
import { menulist6Data } from './shoppingcartdata.js';




function menuCreate(menuData){
    const menubox = document.querySelector(".menu-box")
    menubox.innerHTML = '';

    menuData.forEach(menu => {
        menubox.innerHTML += `
        <li class = "menu-box-box">
            <img class = "menu-img" src = "${menu.image}" alt = "menuimg"/>
            <div class = "menu-text menu-name">${menu.name}</div><div class = "menu-text menu-price">${menu.price}원</div>
             <div class = "menu-middle">${menu.description}</div>
        </li>`
        ;
    })
    
}

document.querySelector(".menu-box").addEventListener("click", (event) => { //menu-box가 클릭을 받으면
    const menu = event.target.closest('.menu-box-box'); //타겟변경 해당하는 menu-box-box로
    if (menu) {
        const menuimage = menu.querySelector(".menu-img").src;
        const menuname = menu.querySelector(".menu-name").textContent;
        const menuprice = menu.querySelector(".menu-price").textContent;
        const menumiddle = menu.querySelector(".menu-middle").textContent;
        const detailsmenu = document.querySelector(".Detailed-menu");

        // 메뉴 상세 정보를 표시
        detailsmenu.innerHTML = `
                <div class = "Detailed-menu-title">메뉴상세</div>
                <div><img class="Detailed-menu-img" src="${menuimage}" /></div>
                <div class="Detailed-menu-name">${menuname}</div>
                <div class="Detailed-menu-middle">${menumiddle}</div>
                <div class="Detailed-menu-price">
                    <span class="Detailed-menu-text">가격</span>
                    <span class="Detailed-menu-text">${menuprice}</span>
                </div>
                <div class="Detailed-menu-box">추가메뉴 기능 텍스트 여기부터</div>
                <div class="Detailed-menu-cart">
                    <div class="Detailed-menu-cartbtn">담기</div>
                </div>
        `;
        detailsmenu.style.display = "block";
    }
});
document.addEventListener("click", (event) => {
    const detailsmenu = document.querySelector(".Detailed-menu");
    if (!event.target.closest(".Detailed-menu") && !event.target.closest(".menu-box-box")) {
        detailsmenu.style.display = "none";
    }
});
const menubtn = document.querySelectorAll(".menu-btn");

menubtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const btnText = btn.textContent;
    
    if (btnText === "추천메뉴") {
        menuCreate(menulist1Data)
    } else if (btnText === "오리지널스&맥시멈") {
        menuCreate(menulist2Data)
    } else if (btnText === "프리미엄") {
        menuCreate(menulist3Data)
    } else if (btnText === "와퍼&주니어") {
        menuCreate(menulist4Data)
    } else if (btnText === "치킨&슈림프버거") {
        menuCreate(menulist5Data)
    } else if (btnText === "올데이킹&킹모닝 사이드") {
        menuCreate(menulist6Data)
    }
    menubtn.forEach(button => {
      button.classList.remove('menu-btn-toggle');
    });
    btn.classList.add('menu-btn-toggle');
  });
});



  