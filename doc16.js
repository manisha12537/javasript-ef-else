var readlinesync=require("readline-sync");
var a=readlinesync.questionInt("enter the number");
var b=readlinesync.questionInt("enter the number");
var c=readlinesync.questionInt("enter the number");
if (a==b==c){
    console.log("equilateral trangle");
}
else if(a==b || a==c||c==b){
    console.log(" isosceles trangle");
}
else{
    console.log("scalene trangle")
}