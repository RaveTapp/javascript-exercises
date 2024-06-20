const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((result, num) => result * num);
};

const power = function(first, second) {
  let powerValue = first;
  for(i = 1; i < second; i++){
    powerValue *= first;
  }
  return powerValue;
};

const factorial = function(n) {
	factorialValue = 1;
  for(i = 2; i <= n; i++){
    factorialValue *= i;
  }
  return factorialValue;
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
