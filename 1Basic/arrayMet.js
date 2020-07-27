
//Array methods

const numbers=['one' , 'two' , 'three' , 'four' , 'five' , 'Six']

//for replace 
numbers[1] = 'another'

console.log(numbers);




    /* operation on starting*/    

// shifting methods are same as push and pop methods
// (nom shift basically its deleting value from the starting of the array)

console.log(numbers.shift());
console.log(numbers);
 
// unshift (its inserting value at the startof the array)
numbers.unshift('HELLO')
console.log(numbers);


/*operation on ending*/

//push andd pop   : adding and deleting operation will be  done at the end

// console.log('The element tio be deleted is:' + numbers.pop());

// console.log(numbers);

numbers.push('seven');
console.log(numbers);



/*operation on middle*/

//splice 

numbers.splice(2,2,'something'),
console.log(numbers);

