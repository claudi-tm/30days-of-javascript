const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let users_array = Object.values(users);
let most_skilled = Object.assign({}, users_array[0])


for (let user of users_array) {
    if (user.skills.length > most_skilled.skills.length) {
        most_skilled = user;
    }
}
//console.log("User with more skills:")
//console.log(most_skilled)

let n_users = (users_array) => {
    let quant = 0;
    for (let user of users_array) {
        if (user.points >= 50) quant++;
    }
    return quant;
}
//console.log("Users with more or 50 points: " + n_users(users_array))

console.log("MERN Developers: ");

let is_mernDev = (skill) => {
    return true;
}
let mern_devs = (users_array) => {
    let arr = Array();
    for (let user of users_array) {
        if (user.skills.includes("MongoDB") && user.skills.includes("Express") && user.skills.includes("React") && user.skills.includes("Node")) arr.push(user);
    }
    return arr;
}
console.log(mern_devs(users_array));