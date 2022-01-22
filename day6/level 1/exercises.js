// num 1
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
let i = 0;
/*while (i < 10){
    //console.log(countries[i]);
    //i++;
}*/

// num 2
do {
    console.log(i);
    console.log(countries[i]);
    i++;
} while (i < 10);

// num 4
console.log("Num 4");
let string = "#";
for (let i = 1; i <= 7; i++) {
    console.log(string.repeat(i));
}

// num 5
console.log("Num 5");
for (let num = 0; num <= 10; num++) {
    console.log(`${num} x ${num} = ${num * num}`);
}

// num 6
console.log("Num 6");
console.log("i\t i^2\ti^3");
for (let num = 0; num <= 10; num++) {
    console.log(`${num}\t ${num ** 2}\t ${num ** 3}`);
}

// num 7
console.log("Num 7");
for (let num = 0; num <= 100; num++) {
    if (num % 2 == 0) {
        console.log(num);
    }
}

// num 8
console.log("Num 8");
for (let num = 0; num <= 100; num++) {
    if (num % 2 != 0) {
        console.log(num);
    }
}

// num 9
console.log("Num 9");
let divisores;
for (let num = 0; num <= 100; num++) {
    divisores = 0;
    for (let num2 = 1; num2 <= 100; num2++) {
        if (num > 1) {
            if (num % num2 == 0) {
                divisores++;
            }
        }
    }
    if (divisores == 2) console.log(num);
}

// num 10
console.log("Num 10");
let sum = 0;
for (let num = 0; num <= 100; num++) {
    sum += num;
}
console.log("The sum of all numbers from 0 to 100 is ", sum);

// num 11
console.log("Num 11");
let sum_of_evens = 0;
let sum_of_odds = 0;
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        sum_of_evens += num;
    } else {
        sum_of_odds += num;
    }
}
console.log(
    `The sum of all evens is ${sum_of_evens}. And the sum of all odds is ${sum_of_odds}`
);

// num 12
console.log("Num 12");
let array = [sum_of_evens, sum_of_odds];
console.log(array);

// num 13
console.log("Num 13");
let array2 = Array(5);
for (let count = 0; count < 5; count++) {
    array2[count] = Math.random();
}
console.log(array2);

// num 14
let array3 = Array(5);
let number;
console.log("Num 14");
for (let x = 0; x < 5; x++) {
    number = Math.floor(Math.random() * 10);
    while (array3.includes(number)) {
        number = Math.floor(Math.random() * 10);
    }
    array3[x] = number;
    console.log(number, " adicionado");
}
console.log(array3);

// num 15
console.log("Num 15");
let charCode;
let string2 = "";
for (let x = 0; x < 5; x++){
    charCode = Math.floor(Math.random() * 127);
    string2 = string2.concat(String.fromCharCode(charCode));
}
console.log(string2);

