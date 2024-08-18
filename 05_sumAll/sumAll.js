const sumAll = function (int1, int2) {
  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return "ERROR";
  }
  let low = Math.min(int1, int2)
  let high = Math.max(int1, int2)
  let sum = 0
  for (let i = low; i < high + 1; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
