var readlinesync=require("readline-sync");
var day=readlinesync.questionInt("enter the day");
if(day<=5){
    console.log(day*2,"have to pay Rs 2/day");
}else if(day>=6 && day<10){
    console.log(day*3,"have to pay Rs 3/day");
}else if(day>=10 && day<15){
    console.log(day*4,"have to pay Rs 4/day");
}else if(day>=15){
    console.log(day*5,"have to pay  Rs 5/day");
}

