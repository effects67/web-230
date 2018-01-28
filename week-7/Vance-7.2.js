var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Person(id, first, last, title) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.title = title;
}

var people=[

new Person("01","Thomas", "Edison","Software Engineer"),
new Person("02","Benjamin", "Franklin","Programmer"),
new Person("03","Nikola", "Tesla","Project Manager"),
new Person("04","Charles", "Babbage","Product Manager"),
new Person("05","Alexander", "Bell","Business Analyst"),

];

for (var x = 0; x <  people.length; x++) {
    console.log(people[x].id, people[x].firstName, people[x].lastName, people[x].title)
}



// end program