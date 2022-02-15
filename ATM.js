console.log("WEL-COME TO ATM")
var readlinesync=require("readline-sync")
var insert=readlinesync.question("insert your atm card in to mashin")
if(insert=="succes"){
    console.log("insert in done")
    var language=readlinesync.question("select any language")
    if(language=="hindi" || language=="marathi" || language=="english"){
        console.log("you can see information in this languages ")
        var account=readlinesync.question("wich type have your account")
        if(account=="current account"|| account=="saving account"){
            console.log("being process")
            var service=readlinesync.question("wich type service do you want")
            if(service=="withdraw" ||service=="deposits"){
                console.log("avalaible this service")
                var pin=readlinesync.questionInt("enter the pin")
                if(pin>=1000){
                    console.log("pin is correct")
                    var mony=readlinesync.questionInt("enter the mony")
                    if(mony<=2000){
                        console.log("done sucssesfully")
                    }else{
                        console.log("you cant becouse their is limit")}
                }else{
                    console.log("please enter correct pin")}
            }else{
                console.log("not avalable this service")}
        }else{
            console.log("enter the valid account")}
    }else{
        console.log("language not sapported")}
}else{
    console.log("try again")
}

