const convertBtn = document.getElementById('covert-btn');
const inputAmount = document.getElementById('input-amount');
const currencySelector = document.getElementById('select-currency');
const inputConverted = document.getElementById('input-converted');

let currency = currencySelector.value

currencySelector.addEventListener('change', currencyValue)

const currencyValue = function () {
    currency = this.value;
}
