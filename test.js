let arr  = (array)=> {
  let aux = 0;
  let i = 1
  for (let x = 0; x < array.length; x++){
    for (let y = x + 1; y < array.length; y++){
      console.log(`X:${array[x]} Y:${array[y]}`)
      i++;
      if (array[x] > array[y]) {
        aux = array[x];
        array[x] = array[y];
        array[y] = aux;
      }
    } 
  } console.log("Comparacoes = ", i) 
  return array;
}

let docs = (array) => {
  let aux = 0;
  let o = 1
  for (let x = 0; x < array.length - 1; x++){
    for (let y = 0; y < array.length - 1; y++){
      
      console.log(`X:${array[x]} Y:${array[y]}`)
      o++;
      if (array[x] > array[y]) {
        aux = array[y];
        array[y] = array[x];
        array[x] = aux;
      }
    }
  } console.log("Comparacoes = ", o) 
  return array;
}

console.log(arr([1, 3, 2, 10, 8]))
console.log(docs([1, 3, 2, 10, 8]))