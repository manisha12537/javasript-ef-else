var readlinesync=require("readline-sync");
var salary=readlinesync.questionInt("enter the salary");
var year=readlinesync.questionInt("entervthe year");
if (year>5){
    bonus=salary/5
    console.log(bonus);
}else{
    console.log("you not eligible to take bonus");
}