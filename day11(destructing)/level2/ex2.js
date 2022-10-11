// EXE 2

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

for (let {name, scores, skills, age} of users){
    // console.log("==============================")
    // console.log(`Name: ${name}\nScores: ${scores}\nSkills: ${skills}\nAge: ${age}`);
    // console.log("==============================")
}

for (let {name, ...rest} of users){
    //console.log("==============================")
    //console.log(`Name: ${name}\nScores: ${rest}`);
    //console.log("==============================")
}


let arr = new Array();
for (let {name, scores, skills} of users){
    if (skills.length < 2) arr.push(name)
}
console.log(arr)