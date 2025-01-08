
let firstpage = false;
let lastpage = false;
let countnum = false;
let countnum1 = false;
let countnum2 = false;

window.addEventListener("scroll", (s) => {
    const windowy = window.pageYOffset; //스크롤 위치
    console.log(windowy)
    const fixedimg = document.querySelector(".fixed-btn")
    if(windowy > 100){
        fixedimg.style. opacity = "1"
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
        countnumber(spnum[0], 0, 3, 1700);
        countnumber(spnum[1], 0, 8, 1500);
        countnumber(spnum[2], 0, 0, 1300);
        countnumber(spnum[3], 0, 7, 1700);
        countnumber(spnum[4], 0, 5, 1500);
        console.log("test")
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