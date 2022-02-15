var readlinesync=require("readline-sync");
var char=readlinesync.question("enter the charactor");
var a=char[char.length-1]
var b=char[char.length-2]
var c=char[char.length-3]
if(a=="g" && b=="n" && c=="i"){
    console.log(char+"ly")
}else{
    console.log(char+"ing")
}