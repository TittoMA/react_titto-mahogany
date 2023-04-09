export default function convertCurrency(amount, fromCurrency, toCurrency) {
  let convertedAmount;
  return new Promise((resolve, reject) => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        convertedAmount = amount * data.rates[toCurrency];
        resolve(convertedAmount);
      });
  });
}
