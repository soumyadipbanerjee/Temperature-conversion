function convertTemp() {
    // Retrieve user inputs
    let inputTemp = document.getElementById("tempInput").value;
    let inputUnit = document.getElementById("unitInput").value;
    let outputUnit = document.getElementById("unitOutput").value;
    let outputTemp;
  
    // Validate input temperature
    if (isNaN(inputTemp)) {
      document.getElementById("output").innerHTML = "Please enter a valid number.";
      return;
    }
  
    // Perform temperature conversion
    if (inputUnit === "Celsius") {
      if (outputUnit === "Fahrenheit") {
        outputTemp = (inputTemp * 9/5) + 32;
      } else if (outputUnit === "Kelvin") {
        outputTemp = parseFloat(inputTemp) + 273.15;
      } else {
        outputTemp = parseFloat(inputTemp);
      }
    } else if (inputUnit === "Fahrenheit") {
      if (outputUnit === "Celsius") {
        outputTemp = (inputTemp - 32) * 5/9;
      } else if (outputUnit === "Kelvin") {
        outputTemp = (inputTemp - 32) * 5/9 + 273.15;
      } else {
        outputTemp = parseFloat(inputTemp);
      }
    } else if (inputUnit === "Kelvin") {
      if (outputUnit === "Celsius") {
        outputTemp = parseFloat(inputTemp) - 273.15;
      } else if (outputUnit === "Fahrenheit") {
        outputTemp = (parseFloat(inputTemp) - 273.15) * 9/5 + 32;
      } else {
        outputTemp = parseFloat(inputTemp);
      }
    }
  
    // Display converted temperature and unit
    document.getElementById("output").innerHTML = "Converted temperature: " + outputTemp.toFixed(2) + " " + outputUnit;
  }
  