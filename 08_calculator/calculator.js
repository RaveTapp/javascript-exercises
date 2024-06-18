const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  let sumValue = 0;
  for(i = 0; i < array.length; i++){
    sumValue += array[i];
  }
  return sumValue;
};

const multiply = function(array) {
  if(array.length == 0) return 0;
  let multiplyValue = array[0];

  for(i = 1; i < array.length; i++){
    multiplyValue *= array[i];
  }
  return multiplyValue;
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
