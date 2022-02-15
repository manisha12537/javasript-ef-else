var number1 = 44 * 30
let readlineSync=require("readline-sync")
var number2=readlineSync.questionInt("enter the number")
if (number1>number2){
    console.log("number1 is greter than number2");
}
else{
    console.log("number1 is lesser than number2");
}


