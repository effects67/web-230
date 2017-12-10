var header = require('../header.js'); 



function fullName(Gabriel, Vance) {
    return "Gabriel" +" "+ "Vance";
}
/* Not really sure if concated means one word or two seperate words, so I'm doing mine as two*/

var now= new Date(2017, 12, 8);

function dateWriter(now) {
    return now;
}


var num=96.88329847509283475029387;
var n=num.toFixed(2);

function formatNumber(n){
    return n
}

x="2"+"3"
function convertToInt(x){
    return x
}


function convertToFloat() {
    return parseFloat("50000 dollars")
    }

    
console.log(header.display("Gabriel", "Vance", "Exercise 2.4")); 



console.log('\n' + "Hello" + " " + "my name is" + " " + fullName()+"!")
console.log('\n' + "Today's date is" +  " " + dateWriter(now) + " " + "and the current temperature is" 
+ " " + n + " " +"Fahrenheit.")
console.log('\n' + "I am" + " " + convertToInt(x) + " " + "years old and my savings goal is" + " " + "$" + convertToFloat() + " "+   "dollars." )

