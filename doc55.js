const readlinesync=require("readline-sync");
var char=readlinesync.question("enter the charactor");
let char1=char[char.length-1]
let char2=char[char.length-2]
let char3=char[char.length-3]
if(char.length>3 && char1=="i" && char2=="n" && char3=="g"){
    char1=replace("l")
    char2=replace("y")
    console.log(char)
}