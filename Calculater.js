var readlinesync=require("readline-sync")
var operator=readlinesync.question("enter the operator")
var num1=readlinesync.questionInt("enter the number")
var num2=readlinesync.questionInt("enter the number")
switch(operator){
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
    case "**":
        console.log(num1**num2)
        break
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1-num2)
        break
    case "%":
        console.log(num1%num2)
        break
    default:
        console.log("operator is not define")
}