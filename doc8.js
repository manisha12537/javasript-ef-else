var readlinesync=require("readline-sync");
var charactor=readlinesync.question("enter the charactor");
if (charactor=="a" || charactor=="e" || charactor=="i"|| charactor=="o"|| charactor=="u"){
    console.log("charactor is vovel")
}
else{
    console.log("charactore is consonent")
}