 localStorage.setItem('Hero','Thor');
// to add data in key value format in to local storage
localStorage.setItem('ToDo' , 'Wake up at a 7.00 am')

//retreiving the item or value with pasing key
console.log(localStorage.getItem('ToDo'));
 var data = localStorage.getItem('Hero');
 console.log(data);


//update
localStorage.setItem('ToDo','take a break-fast');
console.log(localStorage.getItem('ToDo'));

//delete and value by key using removeItem
// localStorage.removeItem('Hero');
localStorage.clear()

//  var data = localStorage.getItem('Hero');
// console.log(data);

//clear all the local storage
