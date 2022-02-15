var readlinesync=require("readline-sync");
var temperature=readlinesync.questionInt("enter the temperature level");
if(temperature>100){
    temp=temperature+"oC"
    console.log(temp,"water is boiling")
}
else{
    temp=temperature+"oC"
    console.log(temp,"water is not boiling")
}