let a = new Set();
for (let x = 0; x <= 10; x++) {
    a.add(x);
}

console.log(a);

a.delete(7);
console.log(a);
a.clear();
console.log(a);

let arr = ["claudio", "carlos", "tomas", "igor", "larissa"];
let set_fromArr = new Set(arr);
console.log(set_fromArr);

let countrys = [
    {
        nome: "Mozambique",
        n_letraas: "Mozambique".length,
    }
];
let map = new Map(countrys);
console.log(map);
