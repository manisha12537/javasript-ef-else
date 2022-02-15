var readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter the number");
if (num%7==0){
    console.log("num is divisible by seven");
}
else{
    console.log("num is not divisible by seven");
}