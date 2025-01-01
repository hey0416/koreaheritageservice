document.querySelectorAll('.preview ul li button').forEach(button => {
    button.addEventListener('click', function () {
        const newBg = this.dataset.bg; // button의 data-bg 값 가져오기
        const bgElement = document.querySelector('.bg'); // .bg 요소 선택

        // .bg의 배경 이미지 변경
        bgElement.style.backgroundImage = `url(${newBg})`;
    });
});
