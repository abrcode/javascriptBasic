
console.log(2 == 2);

console.log(2 == 2.0);

console.log(2 === 2.0);



/* IMPORTANT    :    == operator(Equality)  and      === operator(identity)*/

// comparing value thats'why its gonna be a true
let myVar = '';
let myVar2 = '';

console.log( myVar === myVar2);


//comparing object thats why its gonna be a false
let myVar3 = {};
let myVar4 = {};

console.log( myVar3 === myVar4);


// how can we convert it into true by object 

/*IMPORTNT : assigning  bith variable to same object  */

let myVar5 = {};
let myVar6 = myVar5;

console.log( myVar5 === myVar6);
