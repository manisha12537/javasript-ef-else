var readlinesync=require("readline-sync");
var number=readlinesync.questionInt("enter the number");
if (number==0){
        console.log("number is zero");
}
else if(number>0){
    console.log("number is positive number")
}
else if(number<0){
    console.log("number is nagaitive number")
}
else{
    console.log("number not define")
}