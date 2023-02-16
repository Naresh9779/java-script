 const age=birth=>1596-birth;
 const ra=age(140)
 const a=ra;
 console.log(a);
 const voterID=(birthyear,name)=>
 {

const requirement=2000-birthyear;
const ageleft=18+requirement;
return `${name} age is ${ageleft}`;

 }

 console.log(voterID(1999,'Naresh Thapa  '));