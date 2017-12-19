var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)

/*

var eventKeyCode = 13;

if (eventKeyCode == 13) {
    console.log("The enter key was pressed"); 
} else if (eventKeyCode == 16) {
    console.log("The shift key was pressed"); 
} else if (eventKeyCode == 32) {
    console.log("The spacebar key was pressed")
} else if (eventKeyCode == 8) {
    console.log("The backspace / delete key was pressed");
} else {
    console.log("Unrecognized key press"); 
}
*/
console.log(header.display("Exercise 3.3", "Gabriel", "Vance", "Displays Switch Loops")); 




var eventKeyCode = "enter";

switch (eventKeyCode) {

    case "delete":
        console.log("The delete key was pressed");
        break;
    case "space":
        console.log("The space key was pressed");
        break;
    case "enter":
        console.log("The enter key was pressed");
        break;
    case "tab":
        console.log("The tab key was pressed");
        break;
    default:
        console.log("Invalid Choice");
        break;
}


// end program 