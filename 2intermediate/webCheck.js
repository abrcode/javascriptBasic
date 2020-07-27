/* spend time and refer documentation */
//impo: .length is the only property of string and all otherss are methods 

let userEmail =   '  123@gmail.com   ' 
let password = 'aniket1234'


//function for check the string
let userChecker = function (myString) {
  if ((myString.includes(123)) && (myString.length>6) ) {
    return  true
  }    
    return false
}

let passChecker= function (pass) {
    if((pass.includes(123)) && (pass.length>6)){
        return true
    }
    return false
}



console.log(userChecker(userEmail));
console.log(passChecker(password));
