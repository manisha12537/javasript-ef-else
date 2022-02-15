var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter trangle side number");
var num2=readlinesync.questionInt("enter the trangle side number");
var num3=readlinesync.questionInt("enter the third side number of trangle");
if (num1+num2>=num3|| num2+num3>=num1||num1+num3>=num2){
    console.log("it is valid trangle");
}
else{
    console.log("it is not valid trangle");
}