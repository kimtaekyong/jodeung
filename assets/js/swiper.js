var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    centeredSlides: true,
    loop: true, // 무한 반복
    autoplay: {
        delay: 2500,
    },
    speed: 1500,
});
