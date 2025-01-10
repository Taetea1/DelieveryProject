
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


// swiper
const container = document.querySelector('.swiper-container'); //스와이프 카드용 변수
const cards = document.querySelectorAll('.swiper-wrapper');
const swipetext = document.querySelectorAll('.swiper-text');
const swipebtn = document.querySelectorAll('.swiper-btn');

cards.forEach((card, index) => {
    if (index === 0) {
        card.classList.add('no-after');
        swipetext[index].style.display = 'inline'; // 첫 번째 카드만 텍스트 표시
        swipebtn[index].style.opacity = '1';
    } else {
        card.classList.remove('no-after');
        swipetext[index].style.display = 'none'; // 나머지 카드들은 텍스트 숨김
    }
});

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // 클릭된 카드에 'no-after' 클래스를 추가하여 ::after 투명도 변경
        card.classList.add('no-after');
        swipetext[index].style.display = 'inline'
        swipebtn[index].style.opacity = '1';
        // 각 카드의 transform 값을 설정
        if (index === 0) {
            cards[0].style.transform = "translateX(-50%)scale(1.2)";
            cards[1].style.transform = "translateX(100%)";
            cards[2].style.transform = "translateX(250%)";
            cards[3].style.transform = "translateX(400%)";
        }
        if (index === 1) {
            cards[0].style.transform = "translateX(-200%)";
            cards[1].style.transform = "translateX(-50%)scale(1.2)";
            cards[2].style.transform = "translateX(100%)";
            cards[3].style.transform = "translateX(250%)";
        }
        if (index === 2) {
            cards[0].style.transform = "translateX(-350%)";
            cards[1].style.transform = "translateX(-200%)";
            cards[2].style.transform = "translateX(-50%)scale(1.2)";
            cards[3].style.transform = "translateX(100%)";
        }
        if (index === 3) {
            cards[0].style.transform = "translateX(-550%)";
            cards[1].style.transform = "translateX(-350%)";
            cards[2].style.transform = "translateX(-200%)";
            cards[3].style.transform = "translateX(-50%)scale(1.2)";
        }

        // 클릭된 카드 이외의 다른 카드들에서 'no-after' 클래스를 제거하여 다시 보이게 함
        for (let i = 0; i < cards.length; i++) {
            if (i !== index) {
                cards[i].classList.remove('no-after');
                swipetext[i].style.display = 'none';
                swipebtn[i].style.opacity = '0.2'
            }
        }
    });
});
//btn에도 적용
swipebtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // 클릭된 카드에 'no-after' 클래스를 추가하여 ::after 투명도 변경
        cards[index].classList.add('no-after');
        swipebtn[index].style.opacity = '1';
        swipetext[index].style.display = 'inline'
        // 각 카드의 transform 값을 설정
        if (index === 0) {
            cards[0].style.transform = "translateX(-50%)scale(1.2)";
            cards[1].style.transform = "translateX(100%)";
            cards[2].style.transform = "translateX(250%)";
            cards[3].style.transform = "translateX(400%)";
        }
        if (index === 1) {
            cards[0].style.transform = "translateX(-200%)";
            cards[1].style.transform = "translateX(-50%)scale(1.2)";
            cards[2].style.transform = "translateX(100%)";
            cards[3].style.transform = "translateX(250%)";
        }
        if (index === 2) {
            cards[0].style.transform = "translateX(-350%)";
            cards[1].style.transform = "translateX(-200%)";
            cards[2].style.transform = "translateX(-50%)scale(1.2)";
            cards[3].style.transform = "translateX(100%)";
        }
        if (index === 3) {
            cards[0].style.transform = "translateX(-550%)";
            cards[1].style.transform = "translateX(-350%)";
            cards[2].style.transform = "translateX(-200%)";
            cards[3].style.transform = "translateX(-50%)scale(1.2)";
        }

        // 클릭된 카드 이외의 다른 카드들에서 'no-after' 클래스를 제거하여 다시 보이게 함
        for (let i = 0; i < cards.length; i++) {
            if (i !== index) {
                cards[i].classList.remove('no-after');
                swipetext[i].style.display = 'none';
                swipebtn[i].style.opacity = '0.2'
            }
        }
    });
});

const searchicon = document.querySelector(".sip-searchicon")

searchicon.addEventListener("click", () => {
    const inputtext = document.querySelector(".sip-input").value

    
})