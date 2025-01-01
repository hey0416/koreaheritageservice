document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        once: false
    });

    // 공지사항 탭 클릭 시 클래스 변경
    $('.notice_go .notice .notice_gal article .title .tap h3').click(function () {
        $(this).closest('article').addClass('on').siblings('article').removeClass('on');
    });

    // 조건 드롭다운 토글
    $('.condition > div').click(function () {
        $(this).find('.dropdown').slideToggle();
        $(this).find('i').toggleClass('fa-sort-down fa-sort-up');
    });

    // 카테고리 드롭다운 토글
    $('.txt_box .category > div').click(function () {
        $(this).find('.dropdown').slideToggle();
        $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    });



    //메인배너 왼쪽
    let swiper1 = new Swiper(".banner_left", {
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "button.next",
            prevEl: "button.prev",
        },
        speed: 1500,
        loop: true,

    });

    //메인배너 오른쪽
    let swiper2 = new Swiper(".banner_right", {
        centeredSlides: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "button.next",
            prevEl: "button.prev",
        },
        speed: 1500,
        loop: true,

    });

});


