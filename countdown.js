// Implement a function countdownGenerator() that takes in a number x and returns a 
// function that counts down when it is called (see starter code below).

const countdownGenerator = function (x) {
  let countdownStart = x;

  return function() {
    let countdownBeforeDecrement = countdownStart;
    countdownStart--;
    if (countdownBeforeDecrement > 0) {
      console.log("T-minus " + countdownBeforeDecrement + "...");
    } else if (countdownBeforeDecrement === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
  }
};

const countdown = countdownGenerator(5);
countdown(); // T-minus 5...
countdown(); // T-minus 4...
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!