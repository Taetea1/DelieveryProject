window.onload = () => {
    menuCreate(menulist1Data)
}

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
            <div class = "menu-text">${menu.name}</div><div class = "menu-text">${menu.price}원</div>
        </li>`
        ;
    })
    
}



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