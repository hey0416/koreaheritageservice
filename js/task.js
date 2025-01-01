

$(function () {
    let swiper3 = new Swiper(".task_container", {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        // loop:true,
        speed: 800,
        navigation: {
            nextEl: ".pagination .pagination_r",
            prevEl: ".pagination .pagination_l",
        },
        initialSlide: 2,

    });


});