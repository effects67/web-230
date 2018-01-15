var header = require('../header.js');
console.log(header.display("Exercise 5.3", "Gabriel", "Vance", "Displays object collection")); 


/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

var famousComposers = [
    {
        firstName: 'William',
        lastName: 'Beethoven',
        genre:"Classical",
        rate:8
    },
    {
        firstName: 'William',
        lastName: 'Mozart',
        genre:"Classical",
        rate:10
        
    },
    {
        firstName: 'William',
        lastName: 'Bach',
        genre:"Classical",
        rate:9
    },
    {
        firstName: 'William',
        lastName: 'Haydn',
        genre:"Classical",
        rate:6
    },
    {
        firstName: 'William',
        lastName: 'Schubert',
        genre:"Classical",
        rate:5
    }
];

console.log("-- COMPOSERS --");


famousComposers.forEach(function (composer) {
    console.log("Last Name:" + " " + composer.lastName + ", " + "Genre: " + composer.genre + ", " + "Rating: " + composer.rate )
});









// end program