


var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 



// functions 
function match(ex1,ex2) {
	if (ex1!=ex2){
	return false;
}
	else {
		return true;
} 
}

function logMismatch(ex1,ex2) {
	console.log(ex1 + " " + "and" + " " + ex2 + " " + "do not match!");
}

function logMatch(ex1,ex2) {
    console.log(ex1 + " " + "and" + " " + ex2 + " " + "do match!");
}

// six (6) test variables 

var t="Truck";
var c="Car";
var b="Bike";
var bb="Bike"
var th="Three"
var f="Four";



// Output from the match() function... 
console.log(header.display("Gabriel", "Vance", "Exercise 3.2")); 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 


if (t==c) {
    logMatch(t,c);
} else {
    logMismatch(t,c);
}




if (b==bb) {
    logMatch(b,bb);
} else {
    logMismatch(b,bb);
}




if (th==f) {
    logMatch(th,f);
} else {
    logMismatch(th,f);
}



