const convertToCelsius = function (fah) {

  let celcius = (fah - 32) * 5 / 9;
  celcius = Number.parseFloat(celcius.toFixed(1));
  return celcius;

};

const convertToFahrenheit = function (cel) {

  let fahrenheit = (cel * 9 / 5 + 32);
  fahrenheit = Number.parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;

};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
