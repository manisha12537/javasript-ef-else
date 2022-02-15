var readlinesync=require("readline-sync");
var charactor=readlinesync.question("enter the charactore");
if (charactor>="a" && charactor<="z"){
    console.log("it is alphabet");
}
else{
    console.log("it is not alphabet")
}