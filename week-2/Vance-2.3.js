var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...

myName.gabe="Gabriel Vance"


// function 
function myName() {
    return myName.gabe
    
}




// output 

console.log(header.display("Gabriel", "Vance", "Exercise 2.3")); 
console.log('\n'+ "Hello" + " " + myName() + "!"); 





// end program 