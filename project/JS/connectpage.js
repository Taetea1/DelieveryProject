
let firstpage = false;
let lastpage = false;

if(firstpage){
    fixedimg()
}
else if(lastpage){
    fixedimg()
}
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
})

