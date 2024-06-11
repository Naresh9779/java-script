const calTip=bill=>{
 tax=bill>=50&&bill<=300?bill*0.5:bill*0.25
 return tax;

}
const bill=[12,555,44];
let tips= new Array();
for(i=0;i<3;i++)
{
tips[i]=calTip(bill[i]);
}

console.log(tips)
let total=new Array();
for(i=0;i<3;i++)
{
 total[i]=bill[i]+tips[i];
}
console.log(total);