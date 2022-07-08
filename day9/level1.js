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

const names = [
    "Claudio",
    "Igor",
    "Larissa",
    "Dercio",
    "Ana",
    "Tati",
];

// part 3
countries.forEach((country) => {
    console.log(country);
})
console.log("=================NAMES================")
// part 4
names.forEach((name) => {
    console.log(name);
})

console.log("=================COUNTRYS UPPERCASE================")
// part 6
let countries_upper = countries.map((country) => {
    return country.toUpperCase();
})
console.log(countries_upper);

console.log("=================COUNTRYS LENGTH================");
// part 7
let countries_length = countries.map((country) => {
    return country.length;
})
console.log(countries_length);

console.log("=================COUNTRYS LENGTH SQUARE================");
let countries_length_square = countries.map((country) => {
    return country.length**2;
})
console.log(countries_length_square);

// part 11
console.log("=================COUNTRYS WITH LAND================");
let countries_with_land = countries.filter((country) => {
    return country.includes("land");
})
console.log(countries_with_land);

// part 12
console.log("=================COUNTRYS WITH 6 characters================");
let countries_with_6characters = countries.filter((country) => {
    return country.length === 6;
});
console.log(countries_with_6characters);

// part 13
console.log("=================COUNTRYS WITH 6 characters================");
let countries_with_6characters_or_more = countries.filter((country) => {
    return country.length >= 6;
});
console.log(countries_with_6characters_or_more);

// part 14
console.log("=================COUNTRYS THAT START WITH E================");
let countries_start_withE = countries.filter((country) => {
    return country.startsWith("E");
});
console.log(countries_start_withE);