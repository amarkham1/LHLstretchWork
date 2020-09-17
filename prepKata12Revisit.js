const organizeInstructors = function(instructors) {
  let result = {};
  for (const courseOffer of instructors) {
    let course = courseOffer.course;
    let name = courseOffer.name;
    result[course] ? result[course].push(name) : result[course] = [name];
  }
  return result;
};


const data1 = [
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
];

const data2 = [
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
];


console.log(organizeInstructors(data1));
console.log(organizeInstructors(data2));