(()=>{var __webpack_modules__={761:()=>{const calc=document.querySelector(".calc"),result=document.querySelector(".calc__result"),operator=document.querySelectorAll(".operator"),dot=document.querySelector(".dot__btn");calc.addEventListener("click",(function(event){if(!event.target.classList.contains("calc__btn"))return;const value=event.target.innerText;if(event.target.classList.contains("operator")&&""==result.value)result.value="";else switch(value){case"C":result.innerText="";break;case"=":result.innerText=eval(result.innerText);break;default:result.innerText+=value}console.log(result.value)})),dot.addEventListener("click",(function(){""==result.value&&(result.value="0")}))},305:()=>{const e=document.querySelector(".work"),t=document.querySelector(".break"),n=document.querySelector(".start"),r=document.querySelector(".stop"),c=document.querySelector(".reset"),i=document.querySelector(".bell"),a=document.querySelector(".plus"),o=document.querySelector(".minus");document.querySelector(".pomodoro");let s,l,u=document.querySelector(".minutes"),d=document.querySelector(".seconds"),_=24,p=4;breakCount=0,window.onload=()=>{u.innerHTML=25,d.innerHTML="00",e.classList.add("active")},a.addEventListener("click",(function(){u.innerHTML++,e.classList.contains("active")?_=u.innerHTML-1:p=u.innerHTML-1,l&&(_=u.innerHTML-1,p=u.innerHTML-1)})),o.addEventListener("click",(function(){u.innerHTML<0?u.innerHTML=0:u.innerHTML--,e.classList.contains("active")?_=u.innerHTML-1:p=u.innerHTML-1,l&&(_=u.innerHTML,p=u.innerHTML)})),n.addEventListener("click",(()=>{clearInterval(l),(d.innerHTML="00")&&(s=59),l=setInterval(timerFunction,1e3)})),r.addEventListener("click",(function(){"resume"===r.innerHTML?r.innerHTML="stop":r.innerHTML="resume",l?(clearInterval(l),l=null):l=setInterval(timerFunction,1e3)})),timerFunction=()=>{t.classList.contains("active")?(u.innerHTML=p,d.innerHTML=s,0===p&&"00"===s&&(t.classList.remove("active"),e.classList.add("active"))):(u.innerHTML=_,d.innerHTML=s),s-=1,0===s&&(_-=1,_<0&&(breakCount%2==0?(_=p,breakCount++,e.classList.remove("active"),t.classList.add("active")):(_=24,breakCount++,t.classList.remove("active"),e.classList.add("active"))),s=59),s<10&&(s="0"+s),0===_&&"01"===s&&i.play()},e.addEventListener("click",(function(){clearInterval(l),u.innerHTML=25,t.classList.remove("active"),e.classList.add("active")})),t.addEventListener("click",(function(){clearInterval(l),u.innerHTML=5,e.classList.remove("active"),t.classList.add("active")})),c.addEventListener("click",(function(){clearInterval(l),d.innerHTML="00",e.classList.contains("active")?u.innerHTML=25:u.innerHTML=5}))},785:()=>{let e=0;const t=document.querySelector(".left"),n=document.querySelector(".right"),r=document.querySelector(".slider");n.addEventListener("click",(function(){t.removeAttribute("disabled"),t.classList.remove("disabled"),e+=960,e>=1920&&(n.setAttribute("disabled","disabled"),n.classList.add("disabled")),r.style.left=-e+"px"})),t.addEventListener("click",(function(){n.removeAttribute("disabled"),n.classList.remove("disabled"),e-=960,e<=0&&(e=0,t.setAttribute("disabled","disabled"),t.classList.add("disabled")),r.style.left=-e+"px"}))},51:()=>{const e=document.querySelector(".weather"),t=(document.querySelector(".app__settings"),document.querySelector(".info__city")),n=document.querySelector(".weather__input"),r=document.querySelector(".btn__location"),c=document.querySelector(".icon"),i=document.querySelector(".arrow");let a,o="cb1f29a34529ad52510702f3b767c7d6";function s(){fetch(a).then((n=>n.json().then((n=>function(n){if("404"==n.cod)t.innerHTML="Город не найден",t.style.color="red";else{let t=n.name,r=n.sys.country,{description:i,id:a}=n.weather[0],o=n.main.temp;document.querySelector(".number").innerText=Math.floor(o),document.querySelector(".weather__type").innerText=i,document.querySelector(".location").innerText=`${t}, ${r}`,800==a?c.src="https://cdn-icons-png.flaticon.com/512/1163/1163713.png":a>=200&&a<=232?c.src="https://cdn-icons-png.flaticon.com/512/1163/1163683.png":a>=300&&a<=321||a>=500&&a<=531?c.src="https://cdn-icons-png.flaticon.com/512/1163/1163677.png":a>=600&&a<=622?c.src="https://cdn-icons-png.flaticon.com/512/1163/1163705.png":a>=801&&a<=804?c.src="https://cdn-icons-png.flaticon.com/512/1163/1163685.png":a>=701&&a<=781&&(c.src="https://cdn-icons-png.flaticon.com/512/1163/1163724.png"),e.classList.add("active")}}(n)))))}function l(e){const{latitude:t,longitude:n}=e.coords;a=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&lang=ru&units=metric&appid=${o}`,s()}city=n.value,n.addEventListener("keyup",(function(e){("Enter"===e.key||13===e.keyCode&&""!==n.value)&&function(e){a=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=ru&units=metric&appid=${o}`,s()}(n.value)})),r.addEventListener("click",(()=>{navigator.geolocation.getCurrentPosition(l)})),i.addEventListener("click",(()=>{e.classList.remove("active")}))}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{"use strict";__webpack_require__(785),__webpack_require__(761),__webpack_require__(305),__webpack_require__(51)})()})();