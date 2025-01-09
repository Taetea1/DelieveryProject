
let firstpage = false;
let lastpage = false;
let countnum = false;
let popupBtn = false;


window.scrollY
window.addEventListener("scroll", () => {
    const windowy = window.pageYOffset; //스크롤s- 위치
    console.log(windowy)
    let fixedimg = document.querySelector(".fixed-btn")

    if(windowy > 100){
        fixedimg.style. opacity = "1"
        console.log(popupBtn)
    }
    else if (windowy < 100){
        fixedimg.style. opacity = "0"
    }
    
    const spnum = [
        document.querySelector(".sp-count"),
        document.querySelector(".sp-count1"),
        document.querySelector(".sp-count2"),
        document.querySelector(".sp-count3"),
        document.querySelector(".sp-count4"),
    ]
    if(windowy > 1100 && !countnum){
        countnumber(spnum[0], 0, 3, 2000);
        countnumber(spnum[1], 0, 8, 1700);
        countnumber(spnum[2], 0, 0, 1500);
        countnumber(spnum[3], 0, 7, 2000);
        countnumber(spnum[4], 0, 5, 1700);
        countnum = true;
    }
})

// tartgetElement = 숫자를 표시할 위치, start = 시작시간 , end = 끝나는 시간, duration = 지속시간
function countnumber(targetElement, start, end, duration){ //숫자 카운트 애니메이션
    let startTime = null;
    function countduration(currentTime){
        if (!startTime) startTime = currentTime; //currentTime은 requestAnimationFrame에서 제공
        const progress = Math.min((currentTime - startTime) / duration, 1); //애니메이션 진행 정도 계산 chatgpt 제공
        const currentNumber = Math.floor(Math.random() * 10); //현재 숫자 계산
        targetElement.textContent = currentNumber;
        if (progress < 1) {
            requestAnimationFrame(countduration);
          }
        else {
            targetElement.textContent = end;
        }
    }
    requestAnimationFrame(countduration);
} 

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector(".commonpopup");
    const clickfixedbtn = document.querySelector(".fixed-btn");
    const bodywrap = document.querySelector(".backdrop")
    const clickapp = document.querySelector(".appdownload")

    clickfixedbtn.addEventListener("click", function(event) {
        if(popupBtn == false){
        popupBtn = true;
        popup.style.visibility = "visible"
        clickfixedbtn.style.display = "none"
        popup.style.opacity = "1"
        bodywrap.style.opacity = "1"
        bodywrap.style.visibility = "visible"
        event.stopPropagation(); 
        }
       
    });
    clickapp.addEventListener("click", function(event) {
        if(popupBtn == false){
        popupBtn = true;
        popup.style.visibility = "visible"
        clickfixedbtn.style.display = "none"
        popup.style.opacity = "1"
        bodywrap.style.opacity = "1"
        bodywrap.style.visibility = "visible"
        event.stopPropagation(); 
        }
       
    });

    document.addEventListener("click", function(event) {
        if (popupBtn == true) {
            popup.style.visibility = "hidden"
            clickfixedbtn.style.display = "block"
            popup.style.opacity = "0";
            bodywrap.style.opacity = "0";
            bodywrap.style.visibility = "hidden"
            popupBtn = false
            event.stopPropagation();
        }
    });
});



const textElements = [
    document.querySelector(".intro-headtext"), // 첫 번째 텍스트 요소
    document.querySelector(".class2"), // 두 번째 텍스트 요소
    document.querySelector(".class3")  // 세 번째 텍스트 요소
];

function adjustFontSize() {
    textElements.forEach(textElement => {
        let currentFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);

        // 화면 크기가 768px 이하일 때만 폰트 크기 줄이기
        if (window.innerWidth <= 768) {
            if (currentFontSize > 10) { // 최소 폰트 크기 설정
                currentFontSize -= 1; // 폰트 크기 줄이기
                textElement.style.fontSize = `${currentFontSize}px`;
            }
        }
    });
}

// swiper

// const container = document.querySelector('.swiper-container');
// const cards = document.querySelectorAll('.swiper-wrapper');

// cards.forEach((card, index) => {
//     card.addEventListener('click', () => {
    
//     const 
    
    
//     })
// })