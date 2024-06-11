// const newFunction={
//     firstName:'Naresh',
//     lastName:'Thapa',
//     birthYear:2003,
//     student:true,
    
//    calcAge:function(){
//     this.age=2024-this.birthYear
//     return this.age;},
//     getSummary:function(){
//         return `${this.firstName} ${this.lastName} is Currently Studying in ${this.location}`;

//     }
   
// }

// newFunction.location='canada';
// newFunction['Email']='thapa@gmail.com';
// console.log(newFunction);
// const nameKey='Name';
// const name=newFunction['first'+nameKey];
// // console.log(newFunction.calcAge());
// console.log(newFunction.age);
// console.log(newFunction.getSummary());


const mark={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
        calcBMI:function(){
     return     this.bmi=this.mass / (this.height * this.height);
        }
       
    }


const john={
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        return     this.bmi=this.mass / (this.height * this.height);
           }
          
   
}



    console.log(`John Smith's BMI ${john.calcBMI()} is higher than Mark Miller's ${mark.calcBMI()}!`)
    