const fromCurrency = document.querySelector('.from select');    //from select option 
const toCurrency = document.querySelector('.to select');    // to select option
const fromImage = document.querySelector('.from img');  // from image img src link
const toImage = document.querySelector('.to img');  // to image img src link
const amountInput = document.querySelector("input");    // currency value input field
const resultMsg = document.querySelector(".msg span");   // display message of converted currency value
const convertBtn = document.querySelector('.convert');  // select the convert button


const Country = {
    USD:'US',
    INR:'IN',
    EUR:'FR',
    AUD:'AU'
};

const exchangeRates = {
    // exchange rate stored compared to 1 USD
    USD: 1,
    INR: 85,
    EUR: 0.91,
    AUD: 1.51
};


// update flag function to change flag image dynamically upon selection
const updateFlag = (countryName, image) => {
    let currency = countryName.value;
    let countryCode = Country[currency] || 'US';
    image.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// need to add event listener to make changes upon selection from the dropdown select menu
// event listener for 'select' tag dropdown menu is 'change'
fromCurrency.addEventListener('change', () => {
    updateFlag(fromCurrency, fromImage);    // called when the dropdown menu selected
});

toCurrency.addEventListener('change', () => {
    updateFlag(toCurrency, toImage);    // called when the dropdown menu selected
});


// inital state of the flags (from/to) when webpage loads
updateFlag(fromCurrency, fromImage);
updateFlag(toCurrency, toImage);


const currencyConverter = () => {
    let currencyFrom = fromCurrency.value; 
    let currencyTo = toCurrency.value;

    // even if amountInput stores input
    // but when amountInput.value is taken it returns a string
    // so we use parse to convert it to float/decimal
    let amount = parseFloat(amountInput.value);
    
    // amount input validation checking 
    if(isNaN(amount) || amount <= 0){
        resultMsg.textContent = 'Please enter a valid number ⚠️';
        return;
    }
    let usdAmount = amount/exchangeRates[currencyFrom]; // convert the amount as per usd
    let convertAmount = usdAmount * exchangeRates[currencyTo];    // main result after conversion
    resultMsg.textContent = `${amount} ${currencyFrom} = ${convertAmount.toFixed(2)} ${currencyTo}`;
}


convertBtn.addEventListener('click', (event) => {
    // now by default the button follows type = submit
    // so upon submission it will display the result and immediately reload because its a submission form's default behaviour
    // so we need to prevent it
    event.preventDefault(); // prevent the page from reloading clicking the button
                            // event is the object of the button clicking event
    currencyConverter();
});








