const getArguments = () => {
  let inputArg = process.argv[2];

  if (!inputArg) {
    console.log("Please provide an argument!");
    process.exit();
  }

  return inputArg;
}

const obfuscate = function(password) {
  let obfuscatedPassword = "";

  for (let i = 0; i < password.length; i++) {
    if (password[i] === 'a') {
      obfuscatedPassword += '4';
    } else if (password[i] === 'e') {
      obfuscatedPassword += '3';
    } else if (password[i] === 'o') {
      obfuscatedPassword += '0';
    } else if (password[i] === 'l') {
      obfuscatedPassword += '1';
    } else {
      obfuscatedPassword += password[i];
    }
  }

  return obfuscatedPassword;
}

let passwordToObfuscate = getArguments();
console.log(obfuscate(passwordToObfuscate));


// Unit testing:

const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log("------Unit Tests-------");

assertEqual(obfuscate("hello"), "h3110");
assertEqual(obfuscate("didnt pick"), "didnt pick");
assertEqual(obfuscate("password"), "p4ssw0rd");
assertEqual(obfuscate(""), "");
assertEqual(obfuscate("abracadabra"), "4br4c4d4br4");
assertEqual(obfuscate("audaciously"), "4ud4ci0us1y");