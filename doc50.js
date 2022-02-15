var readlinesync=require("readline-sync");
var year=readlinesync.questionInt("enter the year");
var month=readlinesync.question("enter the month");
if(month=="january" || month=="march"||month=="may"||month=="may"|| month=="july"||month=="august"||month=="octomber"||month=="december"){
    console.log("31 days");
}
else if(month=="april"||month=="june"||month=="september"||month=="november"){
    console.log("30 days")
}
else if(month=="february"){
    if(year%4==0){
        leap_year=true
        console.log("29 days",leap_year)
    }
    else{
        leap_year=false
        console.log("28 days",leap_year)
    }
}



// case values are tested with strict equality (===). 

// 1 !=  2
// 1 != "1"
// 1 != '1'
// 1 != true
// 0 != false


// const someObj = {
//   propName: "John"
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);
