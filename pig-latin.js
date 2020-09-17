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

const pigLatin = function(string) {
  if (string.length === 0) {
    return "";
  } else if (string.length === 1) {
    return string + "ay";
  }

  let latinizedString = "";

  for (let i = 1; i < string.length; i++) {
    latinizedString += string[i];
  }
  latinizedString += string[0] + "ay";
  return latinizedString;
}

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  pigLatin(args[i]);
}
              
assertEqual(pigLatin("hello"), "ellohay");
assertEqual(pigLatin("h"), "hay");
assertEqual(pigLatin(""), "");
assertEqual(pigLatin("12"), "21ay");

                                                     