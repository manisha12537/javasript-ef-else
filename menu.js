var readlinesync=require("readline-sync")
var day=readlinesync.question("eneter the day")
switch(day){
    case "monday":
        console.log("breakfast:\tpoha\nlunch:\tchapti, bhendi, rice, dal\nsnacks:\tbhel\ndinner:\trajma, chawal, roti")
        break
    case "tuesday":
        console.log("breakfast:\tsabudana\nlunch:\tchapti, methi sabji, rice, dal\nsnacks:\tkadha\ndinner:\tpotato, chawal, dal, roti")
        break
    case "wednesday":
        console.log("breakfast:\tchila\nlunch:\tchapti, pumpkin, rice, dal\nsnacks:\tkadha\ndinner:\tpattagobi, chawal, dal, roti")
        break
    case "thusday":
        console.log("breakfast:\tmaggi\nlunch:\tchapti, palak, rice, dal\nsnacks:\tfruits\ndinner:\tlouky, chawal, dal, roti")
        break
    case "friday":
        console.log("breakfast:\tupma\nlunch:\tchapti, brinjal, rice, dal\nsnacks:\tbiscute\ndinner:\tpotato, chawal, dal, roti")
        break
    case "saturday":
        console.log("breakfast:\tparatha\nlunch:\tchapti, pattagobi, rice, dal\nsnacks:\tfriderice\ndinner:\tkarela, chawal, dal, roti")
        break
    case"sunday":
        console.log("breakfast:\tpasta\nlunch:\tpulaw\nsnacks:\tbhel\ndinner:\tsoyabin, chawal, dal, roti")
        break
    default:
        console.log("please enter the correct day")
    }




