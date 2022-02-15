var readlinesync=require("readline-sync");
var charactor=readlinesync.question("enter the charactor");
if (charactor>"a" && charactor<"z"){
    console.log("alphabet")
}
else if(charactor>"1" && charactor<"9"){
    console.log("number")
}
else{
    console.log("special charactor")
}