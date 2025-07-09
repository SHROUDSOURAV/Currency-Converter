const fromCurrency = document.querySelector('.from select');    
const toCurrency = document.querySelector('.to select');    
const fromImage = document.querySelector('.from img');  
const toImage = document.querySelector('.to img');  
const amountInput = document.querySelector("input");    
const resultMsg = document.querySelector(".msg span");  
const convertBtn = document.querySelector('.convert');  


const Country = {
    USD:'US',
    INR:'IN',
    EUR:'FR',
    AUD:'AU'
};

const exchangeRates = {
    
    USD: 1,
    INR: 85,
    EUR: 0.91,
    AUD: 1.51
};



const updateFlag = (countryName, image) => {
    let currency = countryName.value;
    let countryCode = Country[currency] || 'US';
    image.src = `https:
}



fromCurrency.addEventListener('change', () => {
    updateFlag(fromCurrency, fromImage);    
});

toCurrency.addEventListener('change', () => {
    updateFlag(toCurrency, toImage);    
});



updateFlag(fromCurrency, fromImage);
updateFlag(toCurrency, toImage);


const currencyConverter = () => {
    let currencyFrom = fromCurrency.value; 
    let currencyTo = toCurrency.value;

    
    
    
    let amount = parseFloat(amountInput.value);
    
    
    if(isNaN(amount) || amount <= 0){
        resultMsg.textContent = 'Please enter a valid number ⚠️';
        return;
    }
    let usdAmount = amount/exchangeRates[currencyFrom]; 
    let convertAmount = usdAmount * exchangeRates[currencyTo];    
    resultMsg.textContent = `${amount} ${currencyFrom} = ${convertAmount.toFixed(2)} ${currencyTo}`;
}


convertBtn.addEventListener('click', (event) => {
    
    
    
    event.preventDefault(); 
                            
    currencyConverter();
});








