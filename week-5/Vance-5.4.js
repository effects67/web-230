var header = require('../header.js');
console.log(header.display("Exercise 5.4", "Gabriel", "Vance", "Displays filtering/reducing complex data structures")); 


/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

var famousComposers = [
    {name:"Beethoven",
    genre: "Classical",
    rate: 8,

    },
    {name:"Mozart",
    genre: "Classical",
    rate: 10

    },
    {name:"Bach",
    genre: "Classical",
    rate: 9,

    },
    {name:"Haydn",
    genre: "Classical",
    rate:6,

    },
    {name:"Schubert",
    genre: "Classical",
    rate:5,

    }
];



var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --");

var comnposersByRating = famousComposers.map(function(composer) {

        console.log( "Rating: " + composer.rate + "\n" + "Composer:" + " " + composer.name  + "\n")
    });


console.log("-- COMPOSER BY GENRE --");

var comnposersByRating = famousComposers.map(function(composer) {
        console.log("Genre: " + composer.genre + "\n" + "Last Name:" + " " + composer.name + "\n")
    });





// end program