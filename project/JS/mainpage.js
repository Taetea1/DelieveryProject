const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const container = [document.getElementsByClassName('containerFirst'),
                    document.getElementsByClassName('containerSecond'),
                    document.getElementsByClassName('containerThree'),
                    document.getElementsByClassName('containerFour')];
let page = 0; // 첫 페이지
const lastPage = container.length - 1; // 마지막 페이지

window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 5){
        page++;
    }else if(e.deltaY < 5){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage +1; // 마지막 페이지보다 더 넘어가지지 않도록
    }
    wrap.style.top = page * -100 + 'vh';
    const appDownload = document.getElementsByClassName('icon2')
    if(page >= 1){
        appDownload.style.display = "inline";
    }
},      {passive:false}); // 디폴트 기능 제거 - 스크롤
function scrollClick(scroll){
    if(scroll == '1')wrap.style.top = 0 + 'vh';
    else if(scroll == '2')wrap.style.top = -100 + 'vh';
    else if(scroll == '3')wrap.style.top = -200 + 'vh';
    else if(scroll == '4')wrap.style.top = -300 + 'vh';
}

function randomBackground(){ // 홈페이지 로딩 후 랜덤으로 배경 밑 헤드 텍스트 설정
const randomNumber = Math.floor(Math.random() * 4); // 0부터 9까지의 정수
const head = document.querySelector(".head")
const containerFirst = document.querySelector(".containerFirst")
const image = [
    '../image/image1white.png',
    '../image/easydelicius.png',
    '../image/ddeokbboggi.png',
    '../image/housebob.png'];
const image2 = [
    '../image/fooddeli.jpeg',
    '../image/chobab.jpeg',
    '../image/easydelic.jpeg',
    '../image/ddeok.jpeg'];
if(randomNumber == 0){  head.src = image[0]
    containerFirst.style.backgroundImage = `url(${image2[0]})`
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
}
else if(randomNumber == 1){  head.src = image[1]
    containerFirst.style.backgroundImage = `url(${image2[1]})`
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
}
else if(randomNumber == 2){  head.src = image[3]
    containerFirst.style.backgroundImage = `url(${image2[2]})`
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
}
else if(randomNumber == 3){  head.src = image[2]
    containerFirst.style.backgroundImage = `url(${image2[3]})`
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
};
    setTimeout(function() {
    scrollTo(0,0);
    containerFirst.style.transform = "scale(1)"
    ; // 원래 크기로 축소
}, 10);
} 
 window.onload = randomBackground()

 //창이 모두 로딩된 후에 배경 생성
 function store(item){ //store 앱 선택 시 기능 추가 
    if(item == 'app') alert("app store 다운로드")
    else if(item == 'google') alert("google sotre 다운로드")
 }

 