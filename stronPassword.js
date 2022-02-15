var readlinesync=require("readline-sync")
var lower_char=readlinesync.question("enter the lower charactot")
if(lower_char>"a" && lower_char<"z"){
    var upper_char=readlinesync.question("enter the upper charactot")
    if(upper_char>"A" && upper_char<"Z"){
        var special_char=readlinesync.question("enter the special charactot")
        if(special_char=="#" || special_char=="@"){
            var number=readlinesync.question("enter the number") 
            if(number>"1" && number<"9"){
                var num=String(number)
                var password=lower_char+upper_char+special_char+num
                if (password.length>6 && password.length<=16){
                    console.log(password)
                    console.log("strong password")
                }else{
                    console.log("not strong password")
                }
            }
        }    
    }
}