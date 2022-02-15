var readlinesync=require("readline-sync");
var num1=readlinesync.questionInt("enter the number");
var num2=readlinesync.questionInt("enter the number");
var operator=readlinesync.question("enter the operator");
if (operator=="+"){
    console.log(num1+num2);
}
else if(operator=="-"){
    console.log(num1-num2);
}
else if(operator=="*"){
    console.log(num1*num2);
}
else if(operator=="/"){
    console.log(num1/num2);
}
else if(operator=="%"){
    console.log(num1%num2);
}