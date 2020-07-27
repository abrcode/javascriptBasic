
/* Declaring Object  : start with {}*/

let myYoutubeVideoOne = {
  title : 'Loops in javascript',
//   videoLength : '15 minutes',
  videoCreator : 'Aniket Rao',
  videoLength : 15,
  VideoDescription : 'Here you can learn basics of javascript like loops and array'
}

let myYoutubeVideoTwo = {
  title : 'Foreach in javascript',
  videoCreator : 'Aniket Rao',
  videoLength : 15,
  VideoDescription : 'Here you can learn basics of javascript like loops and array'

}

console.log(myYoutubeVideoOne);

// get the specific value from object 
console.log(`Hey new Video on ${myYoutubeVideoOne.title} by ${myYoutubeVideoOne.videoCreator} is Available on Youtube now`);


//Asignment

let myCourse = {
   name:'Java For Noobs',
   price: 350,
   author :'Aniket Rao',
   description :'This course is for beginners who want to learn JAVA '  
}

console.log(myCourse);
console.log(`Hello guys there is new Course ${myCourse.name} by ${myCourse.author} At the Price of ${myCourse.price}`);
console.log(`description : ${myCourse.description}`);





/* and if you want to return to many things then you can use array or put them in object */

/* so basically this is Function which  takes the object and gives the object  */
let changeLength = function (myObject){
    // console.log(`The length of the video is : ${myObject.videoLength}`);
    return {
         FormatOne : `The length of the video is : ${myObject.videoLength+2}`,
         FormatTwo : `The length of the video is : ${myObject.videoLength+5}`
    }
  
}
let addOne = changeLength(myYoutubeVideoOne);

console.log(addOne.FormatTwo);
