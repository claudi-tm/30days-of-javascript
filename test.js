const people = [
    {name: "Claudio"},
    {name: "Igor"}
];

function isClaudio(person, toSearch){
    return person.name === toSearch;
}

console.log(people.find(isClaudio("Claudio")))