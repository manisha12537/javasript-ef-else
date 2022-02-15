var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the first number");
var num2=readlinesync.questionInt("enter the second number");
var num3=readlinesync.questionInt("enter the third number");
if (num1>num2 && num1>num3){
    console.log(num1,"is greter than",num2,"and",num3)
}
else if(num2>num1 && num2>num3){
    console.log(num2,"is greter than",num1,"and",num3)
}
else if(num3>num1 && num3>num2){
    console.log(num3,"is greter than",num1,"and",num2)
}
else{
    console.log(num1,num2,num3,"three have same value")
}