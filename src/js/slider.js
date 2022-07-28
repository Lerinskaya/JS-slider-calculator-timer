<<<<<<< HEAD
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
=======
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
>>>>>>> 1194a92c042f7043cfa73b7d32a930b153bbbb70
});