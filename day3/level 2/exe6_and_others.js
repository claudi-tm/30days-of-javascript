//num 6
//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
var y2 = 10, y1 = 2, x1 = 2, x2 = 6;
var scope = (y2 - y1)/(x2 - x1)
console.log(scope);

// num 8
var result;
while (true){
    var x = Math.floor(Math.random() * -10);
    result = x**2 + 6*x + 9;
    if (result == 0){
        break;
    }
}
console.log(result, x);// what makes result = 0 is x = -3

// num 10
if ("claudio".trim().length > 7){
    console.log("Ur name is long");
} else {
    console.log("Ur name is short");
}

// num 11
let firsrt_name = "Claudio";
let last_name = "Tomas";

if (firsrt_name.length > last_name.length){
    console.log(`Your first name, ${firsrt_name} is longer than your last name, ${last_name}`);
} else if (last_name.length > firsrt_name.length ){
    console.log(`Your last ${last_name} name is longer than your first name, ${firsrt_name}`);
}

// num 13
let born_year = 2002;
let actual_year = new Date().getFullYear();
let age = actual_year - born_year;
if (age >= 18){
    console.log(` Your are ${age}. Your are old enough to drive.`.trim())
} else {
    let years_left = 18 - age;
    if (years_left > 1) console.log(`Your are ${age}. Your will be allowed to drive after ${years_left} years`);
    if (years_left == 1) console.log(`Your are ${age}. Your will be allowed to drive after ${years_left} year`);
    
}

// num 14

// num 15
let year = new Date().getFullYear();
let month = new Date().getMonth() > 0 ? new Date().getMonth + 1 : "0" + (new Date().getMonth() + 1);
let day = new Date().getDate();
console.log(`${year}-${month}-${day}`);
console.log(`${day}/${month}/${year}`);
console.log(`${day}-${month}-${year}`);