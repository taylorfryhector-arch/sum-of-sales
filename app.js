document.addEventListener('DOMContentLoaded', () => {
    const currencyPicker = document.getElementById('currency-picker');
    const totalSalesElement = document.getElementById('total-sales');
    const totalCurrencyElement = document.getElementById('total-currency');

    let totalSales = 500; // Assume this is calculated from data.csv
    const rates = {
        "USD": 1,
        "EUR": 0.85,
        "GBP": 0.75
    };

    function updateTotalSales() {
        const selectedCurrency = currencyPicker.value;
        const conversionRate = rates[selectedCurrency];
        const convertedTotal = totalSales * conversionRate;
        totalSalesElement.textContent = convertedTotal.toFixed(2);
        totalCurrencyElement.textContent = selectedCurrency;
    }

    currencyPicker.addEventListener('change', updateTotalSales);

    // Initialize with default currency
    updateTotalSales();
});