# Currency Converter

This project is a simple currency converter application built using HTML, CSS, and JavaScript. It allows users to convert an amount from one currency to another using real-time exchange rates from the ExchangeRate API.

## Features

- **Real-time Currency Data**: The application fetches the latest currency exchange rates using the ExchangeRate API.
- **Dynamic Dropdowns**: The currency options in the dropdown menus are populated dynamically based on the available currencies from the API.
- **Conversion Calculation**: The application calculates the converted amount based on the user's input and selected currencies.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/BLENDERM0NK/currency-converter.git
2. Navigate to the project directory:
   ```bash
   cd currency-converter
## Usage

1. Open the `index.html` file in your web browser.

2. Enter the amount you want to convert in the "Amount" input field.

3. Select the currency you want to convert from using the "From" dropdown menu.

4. Select the currency you want to convert to using the "To" dropdown menu.

5. Click the "Convert" button to see the converted amount displayed on the screen.
## API Usage

The project uses the [ExchangeRate API](https://www.exchangerate-api.com/) to fetch the latest exchange rates.

### Important Notes:

- Replace the placeholder API key in the `script.js` file with your own API key:
  ```javascript
  const apikey = "your_api_key_here";
## Error Handling

- If there is an issue fetching currency data from the API, an error message will be displayed to the user.
- If there is an issue performing the currency conversion, an error message will be shown.

