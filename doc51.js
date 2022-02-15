var readllinesync=require("readline-sync");
var num1=readllinesync.question("enter the number");
var num2=readllinesync.questionInt("enter the number");
var num3=readllinesync.questionInt("enter the number");
if (num1>num2 && num3<num2){
    console.log("mediam value is num2",num2);
}
else if(num2>num1 && num3<num1){
    console.log("mediamvalue is num1",num1);
}
else if(num1>num3 && num2<num3 ){
    console.log("mediam value is num3",num3);
}
else{
    console.log("three are same")
}


