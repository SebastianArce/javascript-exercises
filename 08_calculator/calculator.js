const add = function(...args) {
  const initialValue = 0;
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(args) {
	const initialValue = 0;
  return args.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )
};

const multiply = function(args) {
  const initialValue = 1;
  return args.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  )
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
	let factorial = 0;
  if (num === 0) {
    return 1
  }
  while (num > 0) {
    if (factorial == 0) {
      factorial = num
    } else {
      factorial *= num
    }
    num -= 1
  }
  return factorial
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
