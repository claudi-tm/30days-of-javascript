const students = [
	["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
	["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

//const students_object = {...students};
//OR
const students_object2 = {};
//const students_object = Object.assign({}, students);
//OR
const students_object = Object.assign(students_object2, students);
console.log(students_object)