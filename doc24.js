var readlinesync=require("readline-sync");
var age1=readlinesync.questionInt("enter the age");
var age2=readlinesync.questionInt("enter the age");
var age3=readlinesync.questionInt("enter the age");
if(age1>age2 && age1>age3){
    console.log(age1,"age1 is oldest");
    if (age2>age3)
    {console.log(age3,"age3 youngest among");

    }
    else{
        console.log(age2,"age2 youngest among");
    }
}
else if(age2>age1 && age2>age3){
    console.log(age2,"age2 is oldest");
    if(age1>age3){
        console.log(age1,"age1 is youngest among");
    }
    else{
        console.log(age3,"age3 is youngest amoung");
    }
}
else if(age3>age1 && age3>age2){
    console.log(age3,"age3 is oldest");
    if (age1>age2){
        console.log(age1,"age1 is youngest among");
    }else{
        console.log(age2,"age2 is youngest among");
    }
}