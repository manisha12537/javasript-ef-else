var readlinesync=require("readline-sync");
var age=readlinesync.questionInt("enter the age");
if (age>=18){
    console.log("eligible to voting")
}
else{
    console.log("not eligible for voting")
}