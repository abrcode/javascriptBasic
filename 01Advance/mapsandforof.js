
var john = {
    name:"i am john",
    age : 24,
    isActive :true
}

var marry={
    name:"i am marry",
    age : 23,
    isActive :true
}


var sam={
    name:"i am sam",
    age : 21,
    isActive :false
}

/* its object */
let users = new Map() 

console.log(typeof users);

/* its like key , value : and key can be anything but value is 
which is comming from user or variable */

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)


// console.log(users.size);
 
// console.log(users.get('sam'));

//it give iteratable 
console.log(users.keys());

console.log(users.values());

/**how can we loop through it or iterate over it? */

for (const keys of users.keys()) {
    console.log(keys);
}

for (const value of users.values()) {
    console.log(value.age);
}


// for (const [key,value] of users.entries()) {
//     // console.log(key + " = " + value.name);
//     console.log(`${key} = ${value.name}` );
    
// }


users.forEach( (value , key) => {
    console.log(`${key} = ${value.name}`);
});


var arraofArr = [['one', '1' ],['two', '2' ],['three', '3' ]]

var newMap = new Map(arraofArr)

console.log(newMap);

//assignment 
for (const [key,value] of newMap) {
    console.log(`${key} = ${value}`);
}
