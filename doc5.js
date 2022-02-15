var readlinesync=require("readline-sync");
var num=readlinesync.questionInt("enter number");
if(num%2==0){
    console.log("num is even");
}
else{
    console.log("num is odd");
}