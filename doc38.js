var readlinesync=require("readline-sync");
var age=readlinesync.questionInt("enter the age");
if (age>60){
    console.log("senior sitizen person");
}else{
    console.log("not senior sitizen person");
}