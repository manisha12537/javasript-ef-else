var readlinesync=require("readline-sync");
var number=readlinesync.questionInt("enter the number");
if (number==1){
    console.log("monday");
}
else if(number==2){
    console.log("tuestion");
}
else if(number==3){
    console.log("wednesday");
}
else if(number==4){
    console.log("thusday");
}
else if(number==5){
    console.log("friday");
}
else if(number==6){
    console.log("saturday");
}
else if(number==7){
    console.log("sunday");
}
else{
    console.log("not define that number")
}