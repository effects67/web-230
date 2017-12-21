var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

var Fruit= ["Apple", "Orange", "Banana", "Mango", "Pear"];




// function


function getFruit(arr) {
    for (var x = 0; x < Fruit.length; x++) {
        console.log(Fruit[x]);
    }
    
}


// Output from the getFruit() function



console.log(header.display("Exercise 4.2", "Gabriel", "Vance", "Displays array output")); 

getFruit(Fruit);


// end program