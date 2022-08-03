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