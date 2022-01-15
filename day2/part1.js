// 1
var challenge = "30 Days Of JavaScript";

console.log(challenge);
// num3 
console.log(challenge.length);
// num 4
console.log(challenge.toUpperCase());
// num 5
console.log(challenge.toLowerCase());
// num 6
console.log(challenge.substring(0, 3));
// num 7
console.log(challenge.slice(3, challenge.length));
// num 8
if (challenge.includes("Script")){
    console.log("inclui")
}
// num 9
console.log(challenge.split(""))
// num 10
console.log(challenge.split(" "))
// num 11
var companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companys.split(","));
// num 12
console.log(challenge.replace("JavaScript", "Python"));
// num 13
console.log(challenge.charAt(15));
// num 14
console.log(challenge.charCodeAt("J"));
// num 15
console.log(challenge.indexOf("a"));
// num 16
console.log(challenge.lastIndexOf("a"));
// num 17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"));
// num 18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"));
// num 19
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
// num 20
console.log(" 30 Days OF JavaScript".trim());
// num 21
console.log(challenge.startsWith("30"));
// num 22 
console.log(challenge.endsWith("JavaScript"));
// num 23
console.log(challenge.match("a"));

// num 25 
console.log(challenge.repeat(2));