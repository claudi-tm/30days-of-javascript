// num 1
var firstName = "Claudio";
var lastName = "Tomas";
var country = "Mozambique";
var age = 19;
var isMarried = false;
var year = new Date().getFullYear();

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
// num 2
console.log(typeof("10") == typeof(10));
// num 3
console.log(parseInt("9.8") == 10)
// num 5
console.log(4 > 3)
// done 6 and 5
// num 7
/*What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
console.log("What is the year today?\nAnswer: ", new Date().getFullYear());
console.log("What is the month todas as a number?\nAnswer: ", new Date().getMonth());
console.log("what is the date today?\nAnswer: ", new Date().getDate());
console.log("What is the day todas as a number?\nAnswer: ", new Date().getDay());
console.log("What is the hours now?\nAnswer: ", new Date().getHours());
console.log("What is the minutes now?\nAnswer: ", new Date().getMinutes());
console.log("Find out the numbers of seconds elapsed from Januarty 1, 1970 to now.", new Date().getTime());
