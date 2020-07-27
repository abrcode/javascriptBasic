//basic work of conditional sttmnt 

// if(false){
//  console.log('I am inside the if block');
//   console.log('I am still inside the if block');
// }else if(true){
//     console.log('i am inside the else block');
// }else{
//     console.log('This is notice');
// }


//example for verification system

// let who= "invaliduser" or ""
// let who= "user"
let who= "teacher"

if (who === 'user') {
    console.log('welcome USER in this app')
    console.log('you can view all cources')
} else if( who === 'teacher'){
    console.log('welcome TEACHER in this app')
    console.log('you can view all cources')
}else{
    console.log('please verify your account');
}


// assignment GRADE SYSTEM for students
//10- Great job , 5 - Work hard , 2 - Poor , 0 - fail


let studentmarks = 10

if(studentmarks === 10){
    console.log('Great Job')
}else if( studentmarks === 5){
    console.log('Work Hard')
}else if(studentmarks === 2){
    console.log('Poor')
}else {
    console.log('fail')
}