const wrap = document.getElementsByClassName("wrap")[0]; // 보일 영역
const container = [
  document.getElementsByClassName("containerFirst"),
  document.getElementsByClassName("containerSecond"),
  document.getElementsByClassName("containerThree"),
  document.getElementsByClassName("containerFour"),
];
let page = 0; // 첫 페이지
const lastPage = container.length - 1; // 마지막 페이지
const footer = container.length;

let open = false; //메뉴 보이기
window.addEventListener(
  "wheel",
  (e) => {
    //조건 ( 스크롤 했을 때)
    e.preventDefault(); //preventDefault 메서드
    if (e.deltaY > 40) {
      page++;
    } else if (e.deltaY < 40) {
      page--;
    }
    if (page < 0) {
      page = 0;
    } else if (page > lastPage) {
      page = lastPage + 1; // 마지막 페이지보다 더 넘어가지지 않도록
    }
    scrollvh();
    wrap.style.top = page * -100 + "vh";
  },
  { passive: false }
); // 디폴트 기능 제거 - 스크롤
function scrollClick(scroll) {
  if (scroll == "1") wrap.style.top = 0 + "vh",page = 0, scrollvh();
  else if (scroll == "2") wrap.style.top = -100 + "vh",page = 1, scrollvh();
  else if (scroll == "3") wrap.style.top = -200 + "vh",page = 2, scrollvh();
  else if (scroll == "4") wrap.style.top = -300 + "vh",page = 3, scrollvh();
}

function randomBackground() {
  // 홈페이지 로딩 후 랜덤으로 배경 밑 헤드 텍스트 설정
  const randomNumber = Math.floor(Math.random() * 4); // 0부터 9까지의 정수
  const head = document.querySelector(".head");
  const containerFirst = document.querySelector(".containerFirst");
  const image = [
    "../image/image1white.png",
    "../image/easydelicius.png",
    "../image/ddeokbboggi.png",
    "../image/housebob.png",
  ];
  const image2 = [
    "../image/fooddeli.jpeg",
    "../image/chobab.jpeg",
    "../image/easydelic.jpeg",
    "../image/ddeok.jpeg",
  ];
  if (randomNumber == 0) {
    head.src = image[0];
    containerFirst.style.backgroundImage = `url(${image2[0]})`;
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
  } else if (randomNumber == 1) {
    head.src = image[1];
    containerFirst.style.backgroundImage = `url(${image2[1]})`;
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
  } else if (randomNumber == 2) {
    head.src = image[3];
    containerFirst.style.backgroundImage = `url(${image2[2]})`;
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
  } else if (randomNumber == 3) {
    head.src = image[2];
    containerFirst.style.backgroundImage = `url(${image2[3]})`;
    containerFirst.style.transform = "scale(1.5)";
    containerFirst.style.transition = "transform 1.5s ease-out";
  }
  setTimeout(function () {
    scrollTo(0, 0);
    containerFirst.style.transform = "scale(1)"; // 원래 크기로 축소
  }, 100);
}
window.onload = randomBackground();

//창이 모두 로딩된 후에 배경 생성
function store(item) {
  //store 앱 선택 시 기능 추가
  if (item == "app") alert("app store 다운로드");
  else if (item == "google") alert("google store 다운로드");
}
function scrollvh() {
  // 페이지 별 메뉴 등장 or 없애기
  // const bodywrap = document.documentElement.scrollTop || document.body.scrollTop;
  const appDownload = document.getElementsByClassName("icon2")[0];
  const upicon = document.querySelector(".upicon");
  const imgB = document.getElementsByClassName("imgB")[0];
  const imgB2 = document.getElementsByClassName("imgB2")[0];
  const imgB3 = document.getElementsByClassName("imgB3")[0];
   
    if (page >= 1) {
    appDownload.style.display = "inline";
    upicon.style.display = "inline"
    }
    else {
    appDownload.style.display = "none"; // 숨기기
    upicon.style.display = "none"
    };

    if (page === 1) {
        imgB.style.right = "30%" 
        imgB.style.opacity = "1"
        imgB.style.transition = "opacity 1s ease-in-out,right 1s ease-in-out"
    }
    else if (page !== 1) {
      imgB.style.opacity = "0"
      imgB.style.transition = "opacity 1s ease-in-out"
    }

    if (page === 2) {
      console.log("2")
      imgB2.style.right = "30%" 
      imgB2.style.opacity = "1"
      imgB2.style.transition = "opacity 1s ease-in-out,right 1s ease-in-out"
    }
    else if(page !== 2){
      imgB2.style.opacity = "0"
      imgB2.style.transition = "opacity 1s ease-in-out"
    }

    if (page === 3) {
      console.log("2")
      imgB3.style.right = "45%" 
      imgB3.style.opacity = "1"
      imgB3.style.transition = "opacity 1s ease-in-out,right 1s ease-in-out"
    }
    else if(page !== 2){
      imgB3.style.opacity = "0"
      imgB3.style.transition = "opacity 1s ease-in-out"
    }
    

    const footerDropdown = document.querySelector(".dropdown") //position:fixd 
    const footerDot = document.querySelector(".Navibar")
    const footerNavibar = document.querySelector(".dot")
    const footerScroll = document.querySelector(".scroll")

    if (footer <= page){  //마지막 페이지에서 사라지게
        footerDropdown.style.transition = "opacity 1s ease"
        footerDropdown.style.opacity = "0"
        footerDot.style.transition = "opacity 1s ease"
        footerDot.style.opacity = "0"
        footerNavibar.style.transition = "opacity 1s ease"
        footerNavibar.style.opacity = "0"
        footerScroll.style.transition = "opacity 1s ease"
        footerScroll.style.opacity = "0"
    }
    else{
        footerDropdown.style.transition = "opacity 1s ease"
        footerDot.style.transition = "opacity 1s ease"
        footerNavibar.style.transition = "opacity 1s ease"
        footerScroll.style.transition = "opacity 1s ease"
        footerDropdown.style.opacity = "1"
        footerDot.style.opacity = "1"
        footerNavibar.style.opacity = "1"
        footerScroll.style.opacity = "1"
    }
} //scrollvh() end

const riderBtn = document.querySelector(".rider"); // 메뉴 아이콘 선택
riderBtn.addEventListener("click", () => {
  //rider 메뉴 클릭시 우측 등장
  
  console.log("1");
  const dropdown = document.querySelector(".dropdown");

  console.log(dropdown.style.right);
  if (open === false) {
    dropdown.style.right = "-10px";
    dropdown.style.transition = "right 0.5s ease-in-out";
    event.stopPropagation();
  } else if (open === true) {
    dropdown.style.right = "-170px";
    dropdown.style.transition = "right 0.5s ease-in-out";
    event.stopPropagation();
  }
  open = !open;
  console.log(riderBtn);
});
