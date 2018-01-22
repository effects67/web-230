var header = require('../header.js'); 
console.log(header.display("Exercise 6.2", "Gabriel", "Vance", "Displays exception handling")); 
/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program

try {
    sum = 2+2;

    if (sum != 5) throw "Winston Smith";

    console.log(sum);

} catch (err) {
    console.log("Catch clause: " + err);
} finally {
    console.log("Finally clause: End of program ...");
}


// end program

