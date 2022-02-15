var readlinesync=require("readline-sync");
var marks=readlinesync.questionInt("enter the your marks");
if (marks<25){
    console.log("your grade is \"F\"");
}
else if(marks>=25 && marks<45){
    console.log("your grade is \"E\"");
}
else if(marks>=45 && marks<50){
    console.log("your grade is \"D\"");
}
else if(marks>=50 && marks<60){
    console.log("your grade is \"C\"");
}
else if(marks>=60 && marks<80){
    console.log("your grade is \"B\"");
}
else if(marks>=80){
    console.log("your grade is \"A\"");
}








// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A