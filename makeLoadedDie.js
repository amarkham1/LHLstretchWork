function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

  return function() {
    let currentIndex = index % list.length;
    index++;
    return list[currentIndex];
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 
console.log(rollLoadedDie());   
console.log(rollLoadedDie());  // loops back to beginning of list
console.log(rollLoadedDie()); 
console.log(rollLoadedDie()); 