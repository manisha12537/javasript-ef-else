var readlinesync=require("readline-sync");
var year=readlinesync.questionInt("enter the year");
if(year%4==0){
    console.log("year is leap year");
}
else{
    console.log("year is not leap year");
}