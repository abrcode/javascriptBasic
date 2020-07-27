


const days=['mon' , 'tue' , 'wed' ,'thu' ,'fri' ,'sat'];

//foreach method in array


//callback function : function without the  function name is known as callback function 
// in function (element,index)  first element is must  be element by itself of arra and
// second element is index of it from array


days.forEach( function(day,index) {
   console.log(`${index+1}: first is ${day}`);
});

// HW:1

/* forEach for month */ 

const month=['jan' ,'feb', 'mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

month.forEach(function(element,index){
    console.log(`${index+1} is ${element}`);
    
})



/*  to do list using array*/

const tododay=[
    'wake-Up  at 7:00 am',
    'take lunch at 8:00 am',
    'do meditation at 9:00 am',
    'do exrecise and wach Tv betwen 9:00 to 12:00',
    'take luch 12:30 pm',
    'do home work till 5:00 pm',
    'play outdoor games ',
    'take dinner',
    'watch TV',
    'do productive work like learning new things',
    'go to sleep at 12:00 am'
]

tododay.forEach(function(element,index){
    console.log(`${index+1} = > ${element} `);
})




/* for loop */

const nom=['1','2','3','4','5','6','7']


 console.log('Array from starting using For Loop')

//i++ is shorthand for i=i+1;

for (let index = 0; index < nom.length; index++) {
    console.log(nom[index]);
}

 console.log('Array from Ending using For Loop')

 for (let index = nom.length-1 ; index >= 0 ; index--) {
     
     console.log(nom[index]);
     
 }


//just for learning 
for (let index = days.length-1; index >= 0 ; index--) {
   console.log(days[index]);
}