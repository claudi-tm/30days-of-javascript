let perimeter_rectangle = function (length, width){
    return 2 * (length + width);
}

let arrow_perimeter = (width, length) => 2 * (width + length);

console.log("Perimeter = ", perimeter_rectangle(10, 10));
console.log("Perimeter = ", arrow_perimeter(10, 10));
