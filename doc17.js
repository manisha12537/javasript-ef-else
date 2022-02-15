var readlinesync=require("readline-sync");
var purchase_amount=readlinesync.questionInt("enter how many rupise you perchase");
var sale_amount=readlinesync.questionInt("enter how rupise you sale");
if(purchase_amount>sale_amount){
    amount=purchase_amount-sale_amount
    console.log(amount,"loss")
}
else if(sale_amount>purchase_amount){
    amount=sale_amount-purchase_amount
    console.log(amount,"profit")
}
else{
    console.log("no profit no loss")
}