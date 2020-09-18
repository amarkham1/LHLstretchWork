const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const luhn = (number) => {
  let numberSplit = number.toString().split("");
  let checkDigit = Number(numberSplit.pop());
  let processed = numberSplit
    .map((digit, index) => {
      if (index % 2 === 1) {
        let doubled = digit * 2;
        if (doubled >= 10) {
          return 1 + Number(doubled % 10);
        } else {
          return doubled;
        }
      } else {
        return digit;
      }
    })
  let total = sum(processed);
  return total % 10 === checkDigit;
};

function sum(numberArray) {
  if (numberArray.length === 1) {
    return Number(numberArray);
  } else {
    let first = Number(numberArray.shift());
    return first + sum(numberArray);
  }
}

assertEqual(luhn(79927398717), true);
assertEqual(luhn(79927398770), true);