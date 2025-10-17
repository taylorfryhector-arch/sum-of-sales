document.addEventListener('DOMContentLoaded', function() {
    const salesData = [
        { product: 'Product A', sales: 150 },
        { product: 'Product B', sales: 200 },
        { product: 'Product C', sales: 150 }
    ];

    const tableBody = document.querySelector('#product-sales tbody');
    const totalSalesElement = document.getElementById('total-sales');

    let totalSales = 0;

    salesData.forEach(item => {
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const salesCell = document.createElement('td');

        productCell.textContent = item.product;
        salesCell.textContent = item.sales.toFixed(2);

        row.appendChild(productCell);
        row.appendChild(salesCell);
        tableBody.appendChild(row);

        totalSales += item.sales;
    });

    totalSalesElement.textContent = totalSales.toFixed(2);
});
