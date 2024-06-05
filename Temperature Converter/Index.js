// Get the input field element for temperature value
const myText = document.getElementById("myText");

// Get the submit button element
const mySubmit = document.getElementById("mySubmit");

// Get the element to display the conversion result
const resultElement = document.getElementById("resultElement");

// Get the radio button element for converting to Celsius
const toCelsius = document.getElementById("toCelsius");

// Get the radio button element for converting to Fahrenheit
const tofahrenheit = document.getElementById("tofahrenheit");

// Variable to hold the temperature value
let temp;

// Function to convert temperature based on selected unit
function convert() {
  // Check if the Fahrenheit radio button is checked
  if (tofahrenheit.checked) {
    // Get the input value and convert it to a number
    temp = Number(myText.value);
    // Convert the temperature to Fahrenheit
    temp = (temp * 9) / 5 + 32;
    // Display the converted temperature with the °F unit
    resultElement.textContent = temp + "°F";
  } else if (toCelsius.checked) {
    // Check if the Celsius radio button is checked
    // Get the input value and convert it to a number
    temp = Number(myText.value);
    // Convert the temperature to Celsius
    temp = (temp - 32) * (5 / 9);
    // Display the converted temperature with the °C unit, rounded to 1 decimal place
    resultElement.textContent = temp.toFixed(1) + "°C";
  } else {
    // If no radio button is selected, prompt the user to select a unit
    resultElement.textContent = "Select measurement units.";
  }
}

// The degree symbol (°) can be typed using (alt+0176).
