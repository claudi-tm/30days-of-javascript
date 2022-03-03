// num 4
console.log("Num 4");
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
    "Iceland",
    "Japan",
    "Kenya",
];

let countries2 = Array(countries.length);
for (let x = 0; x < countries2.length; x++) {
    countries2[x] = countries[x].toUpperCase();
}
console.log(countries2);

// num 5
console.log("Num 5");
let countries2_length = Array(countries2.length);
for (let x = 0; x < countries2_length.length; x++) {
    countries2_length[x] = countries2[x].length;
}
console.log(countries2_length);

// nym 6
console.log("Num 6");
let array_of_arrays = Array(countries2.length);
for (let x = 0; x < array_of_arrays.length; x++) {
    array_of_arrays[x] = [
        countries[x],
        countries2[x].slice(0, 3),
        countries2_length[x],
    ];
}
console.log(array_of_arrays);

// num 7
let new_array = Array();
let text_to_search = "land";
for (let country of countries){
    if (country.includes(text_to_search)){
        new_array.push(country);
        console.log(country);
    }
}
console.log(new_array);

// num 8
let new_array1 = Array();
let text_to_search1 = "ia";
for (let country of countries){
    if (country.endsWith(text_to_search1)){
        new_array1.push(country);
    }
}
console.log(new_array1);

// num 9
let biggest_country = "";
for (let country of countries){
    if (country.length > biggest_country.length) biggest_country = country; 
}
console.log(biggest_country);

// num 10
let array_of_5characters = Array();
for (let country of countries){
    if (country.length === 5) array_of_5characters.push(country);
}
console.log(array_of_5characters);

// num 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let longest_Tech = "";
for (let tech of webTechs){
    if (tech.length > longest_Tech.length) longest_Tech = tech;
}
console.log(longest_Tech);

// num 12
let array_of_techs = Array();
for (let tech of webTechs){
    let tech_details = [tech, tech.length];
    array_of_techs.push(tech_details);
}
console.log(array_of_techs);

// num 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = "";
for (let tech of mernStack){
    acronym = acronym.concat(tech.charAt(0));
}
console.log(acronym);
// num 15
let fruits =  ['banana', 'orange', 'mango', 'lemon'];
let fruits2 = Array();
let aux = "";
for (let x = fruits.length - 1; x >= 0; x--){
    console.log(fruits[x]);
    fruits2.push(fruits[x]);
} 
console.log(fruits2);

// num 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (let arr of fullStack){
    for (let tech of arr){
        console.log(tech.toUpperCase())
    }
}