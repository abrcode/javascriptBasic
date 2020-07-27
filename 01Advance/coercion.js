/* coercion just technique where js try to interpret and do something for you*/
console.log("- will be treated as number");
console.log('5'-5);

console.log("+ will be treated as string");

console.log('5'+5);



const giveType = typeof "9"
console.log(giveType);

/* true is litereal 1 and false is lit 0*/
const adder= true + 5
console.log(adder);


const loginDetails = []
//login for getting details from db

const loginID = loginDetails[0];
// if (loginID !== undefined)
if (loginID ) {
    console.log("Allow user to login");
}else{
    console.log("Auth Failed");
    
}

// values that interpret as false :
// false 
// 0
// ''
// null
// undefined

// apart from it 
/* empty array and empty object is also interpret as true*/