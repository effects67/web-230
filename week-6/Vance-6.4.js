var header = require('../header.js');
console.log(header.display("Exercise 6.4", "Gabriel", "Vance", "Displays a nestled object")); 

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    id: 8675309,
    name:"Jenny",
    dateCreated: new Date().toLocaleDateString(),
    priority: "high",
    personId: 8675309,

    // ticket properties

    person: {
        id:8675309,
        firstName:"Jenny",
        lastName:"Gump",
        jobTitle:"Waitress"
        // person properties
    }
};


// end program

console.log("Ticket" + " " + ticket["id"] + " " + "was created on " + 
ticket["dateCreated"]+ " " + "and assigned to employee " + ticket["person"]["firstName"],ticket["person"]["lastName"] + " " +
"(" + ticket["person"]["jobTitle"] + ").");