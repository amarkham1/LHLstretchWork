const sortFn = (a, b) => a.name === b.name ? b.age - a.age : a.name > b.name;

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex", age: 10 },
  { id: 6, name: "charlie", age: 80},
  { id: 7, name: "charlie", age: 90}
];

console.log(students.sort(sortFn));