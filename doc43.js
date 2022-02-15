var readlinesync=require("readline-sync");
var age=readlinesync.questionInt("enter the age");
var sex=readlinesync.question("enter the sex");
if(age>=18 && age<30){
    if(sex=="M"){
        console.log(700,"day")
    }else if(sex=="F"){
        console.log(750,"days")
    }
}
else if(age>=30 && age<=40){
    if (sex=="M"){
        console.log(800,"days")
    }
    else if(sex=="F"){
        comsole.log(850,"days")
    }
}

// >=30 and <=40
// M
// 800
 
// F
// 850

