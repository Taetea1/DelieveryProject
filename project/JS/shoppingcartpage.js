window.onload = () => {
    
    searchedLocation();
      //검색했던 위치 넣기(아직 테스트 안 해봄)
    getloaded();
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
import { storeMenus } from './shoppingcartdata.js';

//버튼 클릭시 메뉴 생성 (값은 데이터의 카테고리 값을 받음)
function menuCreate(categoryName){
    const menubox = document.querySelector(".menu-box")
    menubox.innerHTML = '';
    const menutype = savedCategory[categoryName]
    if(!menutype || menutype.length == 0){
            menubox.innerHTML = `<p>메뉴 데이터가 없어요<p>`
    }
    menutype.forEach(menu => {
        menubox.innerHTML += `
        <li class = "menu-box-box">
            <img class = "menu-img" src = "${menu.image}" alt = "menuimg"/>
            <div class = "menu-text menu-name">${menu.name}</div><div class = "menu-text menu-price">${menu.price}원</div>
             <div class = "menu-middle">${menu.description}</div>
        </li>`
        ;
    })
}
//각 메뉴의 상세정보를 표시
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
        const cartBtn = detailsmenu.querySelector('.Detailed-menu-cartbtn');
        cartBtn.addEventListener('click', function() {
            Unimplemented();
        });
}
function Unimplemented(){
    Swal.fire({
        icon: "error",
        // title: "준비중인 기능입니다.",
      });
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
      
    
});



function getloaded(){
    const cardName = window.localStorage.getItem("cardname")
    const cardimg = window.localStorage.getItem("cardimg")
    const cardBoss = window.localStorage.getItem("cardBoss")
    const cardReview = window.localStorage.getItem("cardReview")
    const cardindex = window.localStorage.getItem("cardindex") //이 값으로 어떤 가게인지 전달받음
    // 메뉴이름은 여기에
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

        </div>
        <ul class = "menu-box">
        </ul>
    </div>      `
    // 가게 데이터가 있으면 정보 넘겨주기
    if(cardindex === "Burgerking"){
        createMenuButtons(storeMenus.BurgerKing)
    }
    if(cardindex === "Pizzahut"){
        createMenuButtons(storeMenus.PizzaHut)
    }
    if(cardindex === "Mcdonalds"){
        createMenuButtons(storeMenus.McDonalds)
    }
    else if (cardindex == ''){
        createMenuButtons()
    }
}
let savedCategory; //전역 변수로 클릭된 가게 카테고리명 저장
let menuNames = []; //실험용

//초기에 가게에 따른 메뉴 버튼 나오게
function createMenuButtons(item) {
  const menuBoxBtn = document.querySelector(".menu-box-btn");
  if(!item){
    menuBoxBtn.innerHTML = `<p>가게 정보가 없어요</p>`
    return;
  }
  const menus = Object.keys(item)
  console.log("createMenuButtons", item);
  savedCategory = item;
  console.log(menus)
  if (menus.length > 0) {
    // 기존 버튼 초기화
    menuBoxBtn.innerHTML = '';

    // 새로운 버튼 생성
    menus.forEach((menuName, index) => {
      const menuBtn = document.createElement("div");
      menuBtn.className = "menu-btn";
      if (index === 0) {
        menuBtn.classList.add("menu-btn-toggle"); // 첫 번째 버튼 활성화
      }
      menuBtn.textContent = menuName;
      menuNames.push(menuName);
      console.log(menuNames);
      menuBtn.addEventListener("click", function() {
        menuCreate(menuName);  // 클릭한 카테고리 이름을 전달
        const btn = document.querySelectorAll(".menu-btn")
        btn.forEach(btn => {
            btn.classList.remove("menu-btn-toggle")
        })
        menuBtn.classList.add("menu-btn-toggle");
      });
      menuBoxBtn.appendChild(menuBtn);
    });
    menuCreate(menus[0])
  } 
}

// document.querySelectorAll(".menu-btn").forEach(button => {
//     button.classList.remove("menu-btn-toggle");
//   });
//   btn.classList.add("menu-btn-toggle");
// }