var num1=300-123;
let readlineSync=require("readline-sync");
var num2=readlineSync.questionInt("enter thenumber");
if (num1==num2){
    console.log("equal");
}
else{
    console.log("not equal");  
}

