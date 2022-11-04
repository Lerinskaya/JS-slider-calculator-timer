const weather = document.querySelector('.weather'),
    inputPart = document.querySelector('.app__settings'),
    infoText = document.querySelector('.info__city'),
    input = document.querySelector('.weather__input'),
    btnLocation = document.querySelector('.btn__location'),
    weatherIcon = document.querySelector('.icon'),
    btnBack = document.querySelector('.arrow');

let apiKey = 'cb1f29a34529ad52510702f3b767c7d6';
let api;
city = input.value;
function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    fetchApi();
}

function fetchApi() {
    fetch(api).then(response => response.json().then(result => weatherDetails(result)));
}

input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13 && input.value !== '') {
        requestApi(input.value);
    }
});

btnLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(myPosition);
});

function myPosition(position) {
    const { latitude, longitude } = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${apiKey}`;
    fetchApi();
}

function weatherDetails(data) {
    if (data.cod == '404') {
        infoText.innerHTML = 'Город не найден';
        infoText.style.color = 'red';
    } else {
        let city = data.name;
        let country = data.sys.country;
        let { description, id } = data.weather[0];
        let temp = data.main.temp;
        document.querySelector('.number').innerText = Math.floor(temp);
        document.querySelector('.weather__type').innerText = description;
        document.querySelector('.location').innerText = `${city}, ${country}`;

        if (id == 800) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163713.png';
        } else if (id >= 200 && id <= 232) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163683.png';
        } else if (id >= 300 && id <= 321 || id >= 500 && id <= 531) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163677.png';
        } else if (id >= 600 && id <= 622) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163705.png';
        } else if (id >= 801 && id <= 804) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163685.png';
        } else if (id >= 701 && id <= 781) {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/1163/1163724.png';

        }
        weather.classList.add('active');
    }
}
btnBack.addEventListener('click', () => {
    weather.classList.remove('active');
});