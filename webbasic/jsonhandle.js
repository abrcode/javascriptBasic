

//object
const student = {
  name:'Aniket',
  age: 22,
  isActive:true
}


//how to convert the object into string to be stored in localstorage?
//JSON has two main properties(method) (1) : parse  ,  (2):  stringify
//stringify : convert anything(in json) into the string

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString);

//store in to localStorage

// localStorage.setItem('student',studentObjToString);

//in parse we pass the string(studentObjToString) like object
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent);

console.log(toJSONStudent.age);
