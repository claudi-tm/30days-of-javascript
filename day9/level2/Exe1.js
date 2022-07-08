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

function categorizeCountries(arr, pattern){
    return arr.filter((country) => {
        return country.includes(pattern);
    });
}
