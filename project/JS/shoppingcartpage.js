window.onload = () => {
    
    searchedLocation();
      //검색했던 위치 넣기(아직 테스트 안 해봄)
    getloaded();
    menuCreate(menulist1Data)
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
function detailsmenuclick(menu){
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

document.addEventListener("click", (event) => {
    const detailsmenu = document.querySelector(".Detailed-menu");
    if (!event.target.closest(".Detailed-menu") && !event.target.closest(".menu-box-box")) {
        detailsmenu.style.display = "none";
    }
});
document.addEventListener("click", (event) => {
    const menu = event.target.closest('.menu-box-box'); //타겟변경 해당하는 menu-box-box로
    if(menu){
        detailsmenuclick(menu)
    }
    const btn = event.target.closest(".menu-btn");
    if (btn) {
      const menuname = [1,2,3,4,5,6];
  
      if (btnText === menuname[0]) {
        menuCreate(menulist1Data);
      } else if (btnText === menuname[1]) {
        menuCreate(menulist2Data);
      } else if (btnText === menuname[2]) {
        menuCreate(menulist3Data);
      } else if (btnText === menuname[3]) {
        menuCreate(menulist4Data);
      } else if (btnText === menuname[4]) {
        menuCreate(menulist5Data);
      } else if (btnText === menuname[5]) {
        menuCreate(menulist6Data);
      }
  
      // 버튼 활성화 상태 업데이트
      document.querySelectorAll(".menu-btn").forEach(button => {
        button.classList.remove("menu-btn-toggle");
      });
      btn.classList.add("menu-btn-toggle");
    }
    
  });



function getloaded(){
    const cardName = window.localStorage.getItem("cardname")
    const cardimg = window.localStorage.getItem("cardimg")
    const cardBoss = window.localStorage.getItem("cardBoss")
    const cardReview = window.localStorage.getItem("cardReview")
    // 메뉴이름은 여기에
    const menuname = ["추천메뉴","오리지널스&맥시멈","프리미엄","와퍼&주니어","치킨&슈림프버거","올데이킹&킹모닝 사이드"]
    const wrapwrap = document.querySelector(".wrapwrap")
    wrapwrap.innerHTML = ''
    wrapwrap.innerHTML = `
    <div class = "banner-box">
                <div class = "banner-box-box">
                    <div class = "banner-img-box"><img class = "banner-img" src = "${cardimg}" alt = "tag"/></div>
                    <div class = "banner-text">${cardName}</div>
                    <div class = "banner-small-text"><span>리뷰 ${cardReview}</span> | 사장님 댓글 ${cardBoss}</div>
                    <div class = "banner-small-text1">배달의 민족에서 빠르고 편리하게 주문하세요</div>
                </div>
            </div>
            <div class = "menu-container">
                <div class = "menu-box-btn">
                    <div class = "menu-btn menu-btn-toggle" >${menuname[0]}</div><div class = "menu-btn">${menuname[1]}</div><div class = "menu-btn">${menuname[2]}</div><div class = "menu-btn">${menuname[3]}</div>
                    <div class = "menu-btn">${menuname[4]}</div><div class = "menu-btn">${menuname[5]}</div>
                </div>
                <ul class = "menu-box">
                </ul>
            </div>`
}


