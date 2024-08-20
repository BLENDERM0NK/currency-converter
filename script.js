const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const apikey = "44bfb828117aff145a9295ca";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

async function fetchCurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);
        console.log(currencies)
        populateDropdowns(currencies);
    } catch (error) {
        document.getElementById('errorMessage').innerText = 'Error fetching currency data';
    }
}

function populateDropdowns(currencies) {
    currencies.forEach(currency => {
        // console.log(currency)
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.innerText = currency;
        fromCurrency.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.innerText = currency;
        toCurrency.appendChild(optionTo);
    });
}

fetchCurrencies();

document.getElementById('convertButton').addEventListener('click', async () => {
    const amount = document.getElementById('amount').value;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const conversionApiUrl = `https://v6.exchangerate-api.com/v6/${apikey}/pair/${from}/${to}`;

    try {
        const response = await fetch(conversionApiUrl);
        const data = await response.json();
        const rate = data.conversion_rate;
        const convertedAmount = amount * rate;
        document.getElementById('convertedAmount').innerText = `Converted Amount: ${convertedAmount} ${to}`;
    } catch (error) {
        document.getElementById('errorMessage').innerText = 'Error performing conversion';
    }
});