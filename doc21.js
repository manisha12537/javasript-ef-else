var readlinesync=require("readline-sync");
var purchase_amount=readlinesync.questionInt("enter how many rupise you perchase");
discount=0
if(purchase_amount>=1000){
    discount=purchase_amount/10
    console.log(discount);
}
else{
    console.log("not get discount");
}