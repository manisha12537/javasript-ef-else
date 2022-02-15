var readlinesync=require("readline-sync");
var trangle_angle1=readlinesync.questionInt("enter the angles of trangle");
var trangle_angle2=readlinesync.questionInt("enter the angle of trangle");
var trangle_angle3=readlinesync.questionInt("enter the angle of trangle");
if(trangle_angle1+trangle_angle2+trangle_angle3==180){
    console.log("it is valid trangle");
}
else{
    console.log("it is not valid trangle");
}