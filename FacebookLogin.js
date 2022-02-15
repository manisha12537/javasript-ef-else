const readlinesync=require("readline-sync");
// var char=readlinesync.question("enter the charactor");
console.log("WEL-COME TO FACEBOOK")
var name=readlinesync.question("enter your name");
if (name>"a" && name<"z"){
    console.log("proshess your name ")
    var birth_date=readlinesync.question("enter your birth date");
    if(birth_date=="11/05/2003"){
        console.log("prosess your birth date")
        var password=readlinesync.question("enter the password");
        if(password>1000){
            console.log("password is correct")
            console.log("Login is sucssesfull")
        }else{
            console.log("wrong password")}
    }else{
        console.log("enter correct valid date")
    }
}else{
    console.log("write correct name")
}




                
