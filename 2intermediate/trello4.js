
// const myToDos = ['Buy Bread','Go to gym' , 'Record yputube videos' , 'Reding a blogs']

// console.log(myToDos);

// //it gives element of that particular index
// console.log(myToDos[myToDos.indexOf('Buy Bread')]);


const newToDos = [ {
    title: 'Buy Bread',
    isDone :false,
} , {
    title :'Go to gym',
    isDone :false,
} , {
    title : 'Record youtube videos',
    isDone: true,
}  , {
    title:'Reding a blogs',
    isDone:true,
}]

/** find index takes callback function as 
parameter and  it also go to each element as forEach */

// const index = newToDos.findIndex(function (todo ,index ){
//     console.log(todo);
    
// return todo.title === 'Go to gym'    
// })

// console.log(index);


/* method1 : when you want to find index */

// const findToDo = function (todo , title) {
//     const index = todo.findIndex(function (anytodo,index) {
//         //this is for index
//         return anytodo.title.toLowerCase() === title.toLowerCase() 
//     });

//     return todo[index];
// }

// let printMe = findToDo(newToDos,'record youtube videos')
// console.log(printMe);


/* method 2 : when you want to find  */

const findToDo = function (mytodo , title) {

    const titleReturns = mytodo.find(function (todo ,index) {
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    
    return titleReturns;
} 

console.log(findToDo(newToDos ,'Go to gym'));
