const convertToRs = (dollar)=>{
  if (typeof dollar === 'number') {
      return dollar*64
  } else {
      throw Error('Amounts needs to be in number')
  }
}

try {
const myValue = convertToRs('five');
console.log(myValue);
} catch (error) {
    console.log(error);
    
}

console.log("I will not run if program crashed");


