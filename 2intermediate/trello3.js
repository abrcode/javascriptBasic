/* if ypu want to acces property of object inside the function which is also
 created inside the  same object then you have to use this keyword for it */


//create object
let myTodos = {
    day :'Monday',
    meeting : 0,
    meetDone: 0,


     addMeeting: function (num) {
        this.meeting = this.meeting + num
        // console.log(this.meeting);
    }, 

    summary:function (params) {
      return `You have ${this.meeting} meetings today`  
    }
}


myTodos.addMeeting(4)
console.log(myTodos.summary());
 

// let myTodosTwo = {
//     day :'Tuesday',
//     meeting : 10,
//     meetDone: 5,

//    addMeeting :function () {
//     //  console.log('Hey I am the function');   
//     console.log(this);
//    }
// }
// myTodosTwo.addMeeting() 


/* Assignment for handle meeting done and reset the day */

let myTodosTwo = {
    day :'Tuesday',
    meeting : 10,
    meetDone: 0,

   meetingDone :function (num) {
     this.meetDone = this.meetDone - num   
   },

   summaryOne : function () {
      this.meeting = this.meeting + this.meetDone
       return `You  have ${this.meeting} meetings left today`
   } ,

   resetDay: function () {
     this.meetDone = 0,
     this.meeting = 0
   },

}
myTodosTwo.meetingDone(2)
// myTodosTwo.resetDay()
console.log(myTodosTwo.summaryOne());
