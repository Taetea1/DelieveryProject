// 공통으로 사용되는 함수들



//swiper 무한 loop
const swiperSlides = document.querySelectorAll('.swiper');

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