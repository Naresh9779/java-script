// for(let i=0;i<=10;i++)
// {
//     console.log(` Number : ${i}`);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86,  52];
const tips=[];
const totals=[];

for(let i=0;i<=bills.length;i++)
{
    tips[i]=calcTip(bills[i]);
    totals[i]=bills[i]+tips[i];
}
console.log(totals);
console.log(tips);
const calcAverage=function(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(bills));
