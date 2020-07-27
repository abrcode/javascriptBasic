
// basics of function 

let sayHello = function () {
   console.log('Greeeting nessage for user');
   console.log('Hey user');    
}

sayHello();

//function with parameter

let user=function (name) {
    console.log(`Greeting message to ${name}`);
    console.log(`Hey ${name} , How are you?`);
}

user('Aniket');

let fullNameMaker = function (firstName ,lastName) {
console.log('Welcome to our BLOG');
console.log(`Hey ${firstName}-${lastName} , How are yoy? `);    
}

fullNameMaker('Aniket' , 'Rao');

/*addition  using function*/ 

let myAdd = function (no1,no2) {

   let Add=no1+no2;
   return Add; 
}


/* Multiplication using function*/ 

let myMultiply = function (nom1 , nom2){
  return nom1*nom2   
 }


let result = myAdd(5,3);
console.log(result);
let result2 = myMultiply(5,5);
console.log(result2);

 

/* default parameter is undefined */


//default parameter
let guestUser = function (name ='unName' , courseCount = 0) {
   return `Hello ${name}  and your count is : ${courseCount}` 
} 

console.log(guestUser('Aniket Rao' ,5));



