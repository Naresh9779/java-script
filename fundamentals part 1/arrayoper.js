const name1='Pankaj';
const student=['Naresh Thapa','Malu Ram',name1];
const marks=[1,2,3,4];
const length=student.push('sonu');

console.log(length,student);
student.pop();
console.log(student);
student.shift();
console.log(student);

console.log(marks.indexOf(2));
console.log(marks.includes(5));
console.log(marks.includes(3));


