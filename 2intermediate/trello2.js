

let myTodos = {
   day : 'Monday',
   meeting : 0 ,
   meetDone : 0
}

/*taketwo pass object as meeting and noms of meetings */
let addMeeting = function(todo , meet = 0) {
    todo.meeting = todo.meeting + meet    
}

/* its actual object not a copy of object so changing 
will be affect on actual object*/
// addMeeting(myTodos , 2)

let meetgDone = function(todo ,  meet = 0) {
    todo.meetDone = todo.meetDone - meet;
}


let resetDay = function(todo) {
  todo.meeting = 0
  todo.meetDone = 0
}


let getSummaryOfDay = function(todo) {
    
   let meetLeft = todo.meeting + todo.meetDone
    return `You have ${meetLeft} meetings today`
/* we can return object also by taking object through the function*/
//    return {
//        leftMeeting : `You have ${meetLeft} meetings today`
//    }   
    
}

addMeeting(myTodos , 4);

// resetDay(myTodos);
addMeeting(myTodos ,2) ;

meetgDone(myTodos , 5);



console.log(getSummaryOfDay(myTodos));

console.log(myTodos);
