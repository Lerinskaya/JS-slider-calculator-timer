const workMode = document.querySelector('.work'),
    breakMode = document.querySelector('.break'),
    start = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop'),
    reset = document.querySelector('.reset'),
    bell = document.querySelector('.bell'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus');

let workTime = 2;
let breakTime = 1;

let secondsValue;
let interval;

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let workMinutes = workTime - 1;
let breakMinutes = breakTime - 1;

breakCount = 0;

window.onload = () => {
    minutes.innerHTML = workTime;
    seconds.innerHTML = '00';

    workMode.classList.add('active');
};

plus.addEventListener('click', function () {
    minutes.innerHTML++;
    if (workMode.classList.contains('active')) {
        workMinutes = minutes.innerHTML - 1;
    } else {
        breakMinutes = minutes.innerHTML;
    }
});

minus.addEventListener('click', function () {
    minutes.innerHTML--;
    if (workMode.classList.contains('active')) {
        workMinutes = minutes.innerHTML - 1;
    } else {
        breakMinutes = minutes.innerHTML;
    }
});

start.addEventListener('click', () => {
    clearInterval(interval);
    if (seconds.innerHTML = '00') {
        secondsValue = 59
    };

    interval = setInterval(timerFunction, 1000);
});

stopBtn.addEventListener('click', function () {
    clearInterval(interval);
    interval = null;
});

timerFunction = () => {
    minutes.innerHTML = workMinutes;
    seconds.innerHTML = secondsValue;

    secondsValue = secondsValue - 1;

    if (secondsValue === 0) {
        workMinutes = workMinutes - 1;
        if (workMinutes < 0) {
            if (breakCount % 2 === 0) {
                workMinutes = breakMinutes;
                breakCount++
                workMode.classList.remove('active');
                breakMode.classList.add('active');
            } else {
                workMinutes = workTime - 1;
                breakCount++
                breakMode.classList.remove('active');
                workMode.classList.add('active');
            }
        }
        secondsValue = 59;
    }
    if (secondsValue < 10) {
        secondsValue = '0' + secondsValue;
    }
    // if (workMinutes === 0 && secondsValue === '01') {
    //     bell.play();
    // }
}


workMode.addEventListener('click', function () {
    clearInterval(interval);
    minutes.innerHTML = workTime;
    breakMode.classList.remove('active');
    workMode.classList.add('active');
});

breakMode.addEventListener('click', function () {
    clearInterval(interval);
    minutes.innerHTML = breakTime;
    workMode.classList.remove('active');
    breakMode.classList.add('active');
});

reset.addEventListener('click', function () {
    clearInterval(interval);
    minutes.innerHTML = workTime;
    seconds.innerHTML = '00';
});