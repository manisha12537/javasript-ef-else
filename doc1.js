let readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the number");
var num2=readlinesync.questionInt("enter the second number");
if (num1>num2){
    console.log(num1,"num1 is greter than ",num2);
}
else{
    console.log(num2,"is greter than ",num1)
}