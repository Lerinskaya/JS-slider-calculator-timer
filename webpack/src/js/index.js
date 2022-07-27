import "../css/style.scss";
let offset = 0;
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

right.addEventListener('click', function () {
    left.removeAttribute('disabled');
    left.classList.remove("disabled");
    offset += 960;
    if (offset === 1920) {
        right.setAttribute('disabled', 'disabled');
        right.classList.add("disabled");
    }
    console.log("click");
    slider.style.left = -offset + 'px';
});
left.addEventListener('click', function () {
    right.removeAttribute('disabled');
    right.classList.remove("disabled");
    offset -= 960;
    if (offset <= 0) {
        offset = 0;
        left.setAttribute('disabled', 'disabled');
        left.classList.add("disabled");
    }
    slider.style.left = -offset + 'px';
});



