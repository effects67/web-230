var header = require('../header.js'); 
console.log(header.display("Exercise 6.3", "Gabriel", "Vance", "Displays each field in one concatenated string")); 


/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

var ticket = {
    id: 8675309,
    name:"Jenny",
    requester:"Forrest"
};



console.log("id:"+ " " + ticket.id + ", " + "name:" + " " + ticket.name + ", " + "requester:" + " " + ticket.requester);


// end program