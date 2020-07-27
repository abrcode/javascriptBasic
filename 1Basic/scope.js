//scope means block of code 
// Global variable can be access everywhere inside or outsde the scope
//local variable can be access inside the block or inside the scope 
// from local scope or global scope wherever you changing the value 
//then the change effects everywhere   

let iAmGlobal ='someValue'

if (true) { 
   let iAmLocal = 'someMoreValue'
   iAmGlobal='Aniket'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
// console.log(iAmLocal)
console.log(iAmGlobal);
