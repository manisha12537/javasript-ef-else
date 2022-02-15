const readlinesync=require("readline-sync");
var day=readlinesync.question("enter the day");
if(day=="sunday"){
    console.log("you can go withaout permision");}
if(day=="monday"||day=="tuesday"||day=="wednesday"||day=="thusday"||day=="friday"||day=="saturday"){
    console.log("firtly you have to take permission to disco")}
    const work=readlinesync.question("what work you have to go outside")
    if (work=="ng_work"){
        console.log("you will not quarantine")}
        else if(work=="other work"){
            console.log("you have to quarantine")}
            var place=readlinesync.question("where you will go")
            if(place=="tol_plaza"){
                console.log("you cant quarantine for 2 days")
            }   else if(place=="other"){
                console.log("quarantine for 5 days")}
                let coming_time=readlinesync.questionInt("enter time when you come")
                if (coming_time>6){
                    console.log("not allow to come in campus")
                }else{
                    console.log("allow to come campus");
                }
                


  
                



