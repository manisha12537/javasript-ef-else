const readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter the number");
var num1=String(num);
if(num1.length<4){
    console.log("it is less than 4 digits number");
}else if(num1.length>4){
    console.log("it is greter thean 4 digits number");
}else{
    console.log("it is 4 digits number");
}

