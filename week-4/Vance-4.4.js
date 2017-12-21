var header = require('../header.js');
console.log(header.display("Exercise 4.3", "Gabriel", "Vance", "Displays filtering array output")); 


/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
var  states=["Alabama","Nebraska","Iowa","California","Nevada"];




// function
function getValue(arr, val) {
    for (var c = 0; c < arr.length; c++) {
        if (arr[c] === val) {
            return arr[c];
        }
    }
}

function sort(){
    return states.sort();
}

// Output

console.log("-- ORIGINAL ARRAY --");
for (var j = 0; j < states.length; j++) {
    console.log(states[j]);
}

console.log("\n");

console.log(" -- SORTED ARRAY --");


console.log(states.sort());





console.log("\n");

console.log(" -- SELECTED VALUE --");
console.log(getValue(states, "Iowa"));





// end program