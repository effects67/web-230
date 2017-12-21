var header = require('../header.js');
console.log(header.display("Exercise 4.3", "Gabriel", "Vance", "Displays filtering array output")); 

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

var cars=["Cars","Truck","Motorcycle","Airplane","Bus"];





// function
function getValue(arr, val) {
    for (var c = 0; c < arr.length; c++) {
        if (arr[c] === val) {
            return arr[c];
        }
    }
}

console.log("-- DISPLAYING ARRAY ITEMS --");
for (var j = 0; j < cars.length; j++) {
    console.log(cars[j]);
}


// new line
console.log("\n");


// Output

// unit test
console.log(" -- SELECTED VALUE --");
console.log(getValue(cars, "Motorcycle"));

console.log("\n");

console.log(" -- SELECTED VALUE --");
console.log(getValue(cars, "Bus"));



// end program