// console.log(document.URL);

// document.title = "I got changed"

//element by id or name or class name
// console.log(document.getElementById('idOne'));
// console.log(document.getElementsByClassName(''));

// error
// document.getElementById('idOne') = "Something changed";


//query selector it gives only first tag of them
// const myElement= document.querySelector('p')
// console.log(myElement);
//querySelectorAll gives array of all tags and id or class
// const myelement= document.querySelectorAll('.classOne')
// console.log(myelement);

// const myPElement = document.querySelector('p');
// console.log(myPElement);
// myPElement.textContent = "We are changing p tag for a second"

const myPElements = document.querySelectorAll('p');
// foreach is used for looping through each element
myPElements.forEach((p) => {
   p.textContent = "I am chaged using loop in js"
     // p.remove()
});


//creating new element and html and js is work from topto bottom
const myNewPara = document.createElement('p')

myNewPara.textContent = "I was added via js"

document.querySelector('body').appendChild(myNewPara)

// for event and addEventListener take two parameter one anyname of
// action and second one is callback function
document.querySelector('button').addEventListener('click',(event)=>{
  // console.log(event);
  event.target.textContent ='I was clicked'

})

//track input form and validation in it
document.querySelector('input').addEventListener('change',(event)=>{
  console.log(event.target.value);
})
