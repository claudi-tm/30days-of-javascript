let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);