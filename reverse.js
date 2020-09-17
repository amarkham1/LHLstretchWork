const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  let flag = true;
  if (Array.isArray(actual) || Array.isArray(expected)) {
    if (actual === undefined || expected === undefined) {
      flag = false;
    } else if (actual.length !== expected.length) {
      flag = false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        flag = false;
      }
    }
  } else {
    flag = (actual === expected);
  }
  
  if (flag) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const reverse = function(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i].toString();
  }
  return reversedString;
}

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  reverse(args[i]);
}
              
assertEqual(reverse("hello"), "olleh");
assertEqual(reverse(""), "");
assertEqual(reverse("12"), "21");

                                                     