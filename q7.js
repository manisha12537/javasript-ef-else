var readlineSync=require("readline-sync");
var a=readlineSync.questionInt("enter the first number");
var b=readlineSync.questionInt("enter the second number");
if (a>b){
    console.log("a is greter than b")
}
else if (b>a){
    console.log("b is greter than a")
}
else{
    console.log("b is equal to a")
}