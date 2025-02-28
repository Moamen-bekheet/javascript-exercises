const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(Arr) {
	return Arr.reduce((currentValue, nexValue) => currentValue+nexValue, 0)
};

const multiply = function(Arr) {
  return Arr.reduce((currentValue, nexValue) => currentValue*nexValue, 1)
};

const power = function(base,exponent) {
  if (exponent === 0){
    return 1;
  }
	return base*power(base,exponent-1);
};

const factorial = function(num) {
	if(num === 0){
    return 1
  }
  return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
