// num 1
let array = Array();
// num 2
let array1 = [1, 2, 3, 4, 5, 6];
// num 3
console.log(array1.length);
// num 4
console.log(array1[0], array1[2], array1[array1.length - 1]);
// num 5 
let mixedDataTypes = [1, "cadu", true, 14.5, false, "my name"];
console.log(mixedDataTypes.length);
// num 6
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// num 7
console.log(companies);
// num 8
console.log(companies.length);
// num 9
console.log(companies[0], companies[3], companies[companies.length - 1]);
// num 13
let to_search = "F";
companies.includes(to_search) ? console.log(to_search) : console.log("not found");
// num 15
console.log(companies.sort());
// num 16
console.log(companies.reverse());
// num 17
console.log(companies.slice(0, 3))
// num 18
console.log(companies.slice(-3));
// num 19
console.log(companies.slice(3, 5));
// num 20
console.log("Exe 20\nfirst removed: ", companies.shift());
// num 21
console.log(companies.splice(3, 2));
// num 22
console.log("Exe 22\nlast removed: ", companies.pop());
// num 23

console.log(companies.splice(0, companies.length));

