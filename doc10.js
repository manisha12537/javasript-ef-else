var readlinesync=require("readline-sync");
var char=readlinesync.question("enter charactore");
if (char==char.toUpperCase()){
    console.log("uppercase");
}
else if (char==char.toLowerCase()){
    console.log("lowercase");
}
else{
    console.log("you cant difine case")
}