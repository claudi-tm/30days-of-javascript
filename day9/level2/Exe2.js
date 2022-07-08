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


let arr = new Array();


function arrays(){
    let arr = new Array();
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L','M','N ','O','P','Q','R','S','T', 'U', 'V', 'W', 'X', 'Y', ];
    countries.forEach((country) => {
        console.log(country.charAt(0))
        letters.forEach((letter, country) => {
            console.log(country);
        })
        arr.push(country.charAt(0));
    });
    return arr;
}

arrays()