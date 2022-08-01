const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__result');
const operator = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot__btn');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc__btn')) return;
    const value = event.target.innerText;

    if (event.target.classList.contains('operator') && result.value == '') {
        result.value = '';
    } else

        switch (value) {
            case 'C':
                result.innerText = '';
                break;
            case '=':
                result.innerText = eval(result.innerText);
                break;

            default:
                result.innerText += value;
        }
    console.log(result.value)
});
dot.addEventListener('click', function () {
    if (result.value == '') {
        result.value = '0';
    }
});

// event.target.classList.contains('operator') &&






// operator.addEventListener('click', function () {
//     if (result.innerText = '') {
//         operator.setAttribute('disabled', 'disabled')
//         console.log('click')
//     }
// });
    // result.onkeypress = e => !(e.key === "." && ~result.value.indexOf("."))


// const div = document.createElement('div')
// div.classList.add('keyboard')
// document.querySelector('.calc').appendChild(div);
// document.addEventListener('keydown', event => {
//     if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
// })