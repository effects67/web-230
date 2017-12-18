var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

console.log(header.display("Gabriel", "Vance", "Exercise 3.4")); 

// test variable

var y=6;


// for loop
console.log("-- Displaying for loop --");


for (var x = 0; x < 10; x++) {
    logMatch(y,randomNumber())
    
}

// while loop
console.log("\n-- Displaying while loop --"); 

var index = 0;

while (index < 10) {
    logMatch(y,randomNumber())
    index++;
}


// Reused functions from exercise-3.2.js

function match(ex1,ex2) {
	if (ex1!==ex2){
	console.log(false);
}
	else {
		console.log(true);
}
}


function logMismatch(ex1,ex2) {
	console.log(ex1 + " " + "and" + " " + ex2 + " " + "do not match!");
}

function logMatch(ex1,ex2) {
    if (ex1==ex2){
    console.log(ex1 + " " + "and" + " " + ex2 + " " + "do match!");
    }
    else{
        console.log(ex1 + " " + "and" + " " + ex2 + " " + "do not match!");
    }
}





// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}