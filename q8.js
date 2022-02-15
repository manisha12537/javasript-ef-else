var readlineSync=require("readline-sync");
var number1=readlineSync.questionInt("enter the number");
if (number1%5==0 && number1%15==0){
    console.log("divisible by both ")
}
else{
    console.log("not divisible by both")
}