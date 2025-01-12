// 공통으로 사용되는 함수들



//swiper 무한 loop
const swiperSlides = document.querySelectorAll('.swiper1');

swiperSlides.forEach(function (element, index) {
    element.classList.add("swiper-" + index);
    let swiper = new Swiper(".swiper-" + index, {
      autoplay: {
            delay: 1,
            desableOnInteraction: false,
      },
      speed: 3500,
      loop: true,
      slidesPerView: "auto",
      freemode: true,      
    });
});
// coupon
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  loop: false, // 루프 기능
  // autoplay: {
  //   delay: 3500, // 3초마다 자동 재생
  // },
  watchOverflow: true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
});