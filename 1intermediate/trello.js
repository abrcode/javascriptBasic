
const myTodos= []

//push method

myTodos.push('Wakeup at 7 am');
myTodos.push('Goto Gym');
myTodos.push('take a lunch');
myTodos.push('Do Programming');
myTodos.push('playing and reading a blog');


myTodos.forEach(function(todo,i){
  console.log(`Task No ${i+1} is : ${todo}`);
});



//add stuff from top of array

/* we can use unshift method for adding item from top */

const todo=[]


console.log("New Array");

todo.unshift('Wakeup at 7 am');
todo.unshift('Goto Gym');
todo.unshift('take a lunch');
todo.unshift('Do Programming');
todo.unshift('playing and reading a blog');



for (let index = 0; index < todo.length ; index++) {
  console.log(`${index+1} :  ${todo[index]}`);    
}