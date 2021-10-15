



const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,

    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.benefits__pagination',
        clickable: true,
    },
});