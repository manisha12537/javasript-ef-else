var readlinesync=require("readline-sync");
var number=readlinesync.questionInt("enter the number");
if (number%5==0){
    console.log("number is divisible by 5")
}
if (number%15==0){
    console.log("number is divisible by 15")
}
else{
    console.log("not divisible by both")
}
