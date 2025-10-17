document.addEventListener('DOMContentLoaded', function() {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let totalSales = 0;
            rows.forEach(row => {
                const columns = row.split(',');
                const sales = parseFloat(columns[1]);
                if (!isNaN(sales)) {
                    totalSales += sales;
                }
            });
            document.getElementById('total-sales').textContent = totalSales.toFixed(2);
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
            document.getElementById('total-sales').textContent = 'Error loading data';
        });
});