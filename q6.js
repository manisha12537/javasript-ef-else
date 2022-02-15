var readlineSync=require("readline-sync");
var num1=readlineSync.questionInt("enter the first number:-");
var num2=readlineSync.questionInt("enter the second number");
if (num1%num2==0){
    console.log("divisible hai")
}
else{
    console.log("divisible nahi hai");
}




