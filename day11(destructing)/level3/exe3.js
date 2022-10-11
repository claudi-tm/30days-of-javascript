const student = {
	name: "David",
	age: 25,
	skills: {
		frontEnd: [
			{ skill: "HTML", level: 10 },
			{ skill: "CSS", level: 8 },
			{ skill: "JS", level: 8 },
			{ skill: "React", level: 9 },
		],
		backEnd: [
			{ skill: "Node", level: 7 },
			{ skill: "GraphQL", level: 8 },
		],
		dataBase: [{ skill: "MongoDB", level: 7.5 }],
		dataScience: ["Python", "R", "D3.js"],
	},
};

const student_copy = { ...student };
let bootstrap = {
	skill: "Bootstrap",
	level: 8,
};
let express = {
	skill: "Express",
	level: 9,
};
let sql = {
	skill: "SQL",
	level: 8,
};
let sql2 = {
	skill: "SQL",
};
student_copy.skills.frontEnd.push(bootstrap);
student_copy.skills.backEnd.push(express);
student_copy.skills.dataBase.push(sql);
student_copy.skills.dataScience.push(sql2.skill);
console.log(student_copy);
