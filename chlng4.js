const bill =450;
const tip=bill<=300 && bill <=50?  bill*0.15: bill*0.20;
let total = tip+bill;
console.log(" Total Bill : ",total );