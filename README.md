# Sales Summary 1444

## Overview
This is a simple single-page application that fetches sales data from a CSV file, calculates the total sales, and displays it on the page. The page title is set to 'Sales Summary 1444', and the application uses Bootstrap 5 for styling.

## Setup and Installation
1. Clone the repository to your local machine.
2. Ensure you have a web server running to serve the files, as fetching local files via `fetch` requires a server.
3. Place the `data.csv` file in the root directory of the project.

## Usage
- Open `index.html` in a web browser.
- The application will automatically fetch the `data.csv` file, sum the sales column, and display the total sales amount on the page.

## Code Structure
- `index.html`: The main HTML file that sets up the page structure and includes Bootstrap for styling.
- `app.js`: Contains the JavaScript code that fetches the CSV file, processes the data, and updates the DOM with the total sales.
- `data.csv`: The CSV file containing sales data. It should have at least two columns, with the second column representing sales figures.

## Components and Functionality
- **Bootstrap 5**: Loaded via jsdelivr for responsive and modern styling.
- **JavaScript Fetch API**: Used to retrieve the CSV file asynchronously.
- **CSV Parsing**: The CSV data is split into rows and columns, and the sales figures are summed up.
- **Dynamic DOM Update**: The total sales are displayed dynamically in the `#total-sales` element.