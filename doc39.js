var readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter the number");
var num1=readlinesync.questionInt("enter the number");
if(num>num1){
    console.log(num1,"is lowest number");
}else{
    console.log(num,"is lowest number")
}