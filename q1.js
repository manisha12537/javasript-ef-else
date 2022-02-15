let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("enter a number");
if (number<10){
   console.log("num is less than 10");
}
else if(number>10 && number<20){
   console.log("num is less than 20");
}
else{
   console.log("greater than 20");
}


// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20". 
// Else if it is greater than 20 then print "greater than 20".