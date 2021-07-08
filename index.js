const convertBtn = document.getElementById('covert-btn');
const inputAmount = document.getElementById('input-amount');
const currencySelector = document.getElementById('select-currency');
const inputConverted = document.getElementById('input-converted');

let currency = currencySelector.value

currencySelector.addEventListener('change', currencyValue)

const currencyValue = function () {
    currency = this.value;
}

function currencyExchange(exchangeRate) {
    const userInput = inputAmount.value;
    if (currency === 'eur') {
        inputConverted.value = (userInput * exchangeRate).toFixed(2);
    } else if (currency === 'chf') {
        inputConverted.value = (userInput * exchangeRate).toFixed(2);
    } else if (currency === 'usd') {
        inputConverted.value = (userInput * exchangeRate).toFixed(2);
    }
}

async function getCurrency() {
    let response = await fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`);
    let json = await response.json();
    let outcome = await json.rates[0].mid
    const exchangeRate = outcome;

    currencyExchange(exchangeRate)
}
