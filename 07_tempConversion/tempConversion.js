const ftoc = function(temperature) {
  let celsius = ((temperature-32)*(5/9)).toFixed(1);
  return parseFloat(celsius);
};

const ctof = function(temperature) {
  let Fahrenheit = (((9/5)*temperature)+32).toFixed(1);
  return parseFloat(Fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
