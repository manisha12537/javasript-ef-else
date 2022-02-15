let readlineSync=require("readline-sync")
var water=readlineSync.questionInt("enter the water level");
if (water<1){
    console.log("need to fill more water")
}
else if(water>=1 & water<=10){
    console.log("no need to fill more water")
}
else{
    console.log("water is overflow")
}



