//  let sayHello = function (name) {
//      return "Hello there, " + name + "!";
//  }

// console.log(sayHello("Aniket"));


/* Arrow function : it will reduce complexity */

console.log('this is arrow function');

 let sayHello =  (name) =>  `hey there ${name}`
 

console.log(sayHello("Aniket"));


/*  array of object */
const todos = [{
    title:'Buy Jam',
    isDone:true,
}, {
    title:'Go to walk',
    isDone:false,
} ,{
    title:'watch TV',
    isDone:false,
}]


/* just reminder of find and findindex which takes callback function as parmeter*/

// const index= todos.findIndex( function (todo , index) {
//     return todo.title === "watch TV"
// })
//  console.log(index);
 
 /** create function that  ffind index of specific data using findindex */

console.log('findindex using creating function ');

const myTodo = function (todo,title) {
    
    const index = todo.findIndex(function (mytodo , index) {
        return mytodo.title.toLowerCase() === title.toLowerCase()
    })
    return todo[index]
}

let printIndex = myTodo(todos , "Go to walk")
console.log(printIndex);


console.log('find method  using creating function ');

const mynewtodo= function (newTodo ,title) {
    const data = newTodo.find(function (secondtodo  , index) {
           return secondtodo.title.toLowerCase() === title.toLowerCase()      
    })
    return data
}
console.log(mynewtodo(todos , "buy jam"));




/* get todo which arer doneusing Filter : which work as forEach and get that item 
 which meet up with the condition  */
const thingsDone = todos.filter((todo)=> todo.isDone === false)

console.log(thingsDone);



/* Assignment */

const list=[{
    title:'Buy car',
    isDone:true,
}, {
    title:'Go to Job',
    isDone:false,
} ,{
    title:'watch movie',
    isDone:false,
},{
    title:'Buy Book',
    isDone:true,
}, {
    title:'Go to market',
    isDone:false,
} ,{
    title:'watch TV',
    isDone:false,
}]  



// console.log("Things which is not done is below");

// const Title = (todosecond,title)=>{

//       const thingsNotDone = list.filter((mytodo ,index )=> {
//       return mytodo.isDone === false && mytodo.title.toLowerCase() === title.toLowerCase() 
//    })
  
//   return thingsNotDone

// }

// console.log(Title(list,"Go to market"));


/* title of every element which is not done */


const name= []

const notdone = list.filter((todo)=>{
    return todo.isDone === false
})

for (let index = 0; index < notdone.length; index++) {
    const obj = {
        title : notdone[index].title
    }
    name.push(obj);
 
} 

console.log(name);
