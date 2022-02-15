const readlinesync=require("readline-sync");
let year=readlinesync.questionInt("enter the year");
if (year%4==0){
    leap_year=true
}
else{
    leap_year=false
}
let month=readlinesync.questionInt("enter the month");
if(month==1 || month==3 ||month==5 || month== 7||month==8 ||month==10 ||month==12){
    day=31
}
else if(month==4 ||month==6 ||month==9||month==11){
    day=30
}
else if(month==2){
    if (leap_year){
        day=29
    }
    else{
        day=28
    }
}
var date=readlinesync.questionInt("enter the day");
if (day>date){
    date=date+1
}else{
    // date=1
    if (month==12){
        month=1
        date=1
        year=year+1
    }else{
        month=month+1
    }
}
console.log(date,month,year)




