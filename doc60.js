var readlinesync=require("readline-sync");
let name=readlinesync.question("enter the name");
var n=name.split(".")
console.log(n[1])