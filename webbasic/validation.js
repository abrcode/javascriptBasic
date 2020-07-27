function myValidation() {
  let myValue = document.getElementById('myform').value
   if (isNaN(myValue) || myValue< 1 || myValue >20 ) {
     console.log('Not a valid input');
   } else {
     console.log('This is cool');
   }
}

// form validation

document.querySelector('.myform').addEventListener('submit',(event)=>{
   // for preventing data from the querySelector
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.realname.value);
  //for clear the input data after submitting
  event.target.username.value = "";
  event.target.realname.value = "";
} )



//assignment simple sign up form
