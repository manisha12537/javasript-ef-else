let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter the integer number");
if (number%2==0){
    console.log("number is divisible ")
}
else{
    console.log("number is not divisible")
}


