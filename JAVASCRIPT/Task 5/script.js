const data = require('./persons.json')


var table = document.getElementById("table");

var person

for (person of data) {
    console.log(person.name)

    var name = person.name
    var age = person.age

    var row = "<tr><td>" + name + "</td><td>" + age + "</td></tr>"
    table.innerHTML += row
}