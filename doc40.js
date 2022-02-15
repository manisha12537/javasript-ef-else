var readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter the number");
var str=String(num)
var len=str.length
if(len==3){
    console.log(len,"num is three digits number"); 
}else{
console.log(len,"not three digits number");
}
