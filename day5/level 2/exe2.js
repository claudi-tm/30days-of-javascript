let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let reg1 = /,/g;
let reg2 = /./;
text = text.replace(reg1, "");
text = text.replace(".", "");
text = text.replace(".", "");

console.log(text.split(" ").length);
