
class User {

    constructor(firstName , lastName , middleName, credits) {
       //this.varname is creting by user and =varname is exactly same value which is defined in constructor
       this.firstName= firstName;
       this.lastName=lastName;
       this.middleName =middleName;
       this.credits=credits;
    }

   //method:1
    getFullName(){
      let fullName = `${this.firstName} ${this.lastName} ${this .middleName} is my Full-Name`
      return fullName;
      // console.log(`${this.firstName} ${this.lastName} is my Full-Name`);
    }

   //method :2 (user can pass full name in this method)
   editName(newName){
     //split convert string into array by putting a space
     const myName = newName.split(' ')
     this.firstName = myName[0]
     this.lastName = myName[1]
     // console.log(`Now ${newName} is my full-name`);
   }

  getMiddleName(name){
    const myfullname = name.split(' ');
    this.firstName = myfullname[0];
    this.lastName = myfullname[1];
    this.middleName = myfullname[2];
  }

}

//inheritance : child class can access all properties of parent class
class Teacher extends User{
  // in side the constructor of child class first always put super method for using properties of parent class
  constructor(firstName , lastName , middleName, credits,subject){
    super(firstName , lastName , middleName, credits);
    this.subject=subject;
  }

 //method overriding
  getFullName(){
    let fullName = `${this.firstName} ${this.lastName}  ${this .middleName} is my Full-Name , and I teach ${this.subject} subject`
    return fullName;
    // console.log(`${this.firstName} ${this.lastName} is my Full-Name`);
  }

  //child class's own method
  favDrink(name){
     console.log(`My fav. drink is ${name}`);
  }

}

//creating fresh object of class User using new keyword event if its not defined
const john = new Teacher('John','Anderson','BirenBhai',34 ,'MATHS');
console.log(john);
john.favDrink('Fanta')

console.log(john.getFullName());

// john.editName('Aniket Rao');
// console.log(john.getFullName());

john.getMiddleName('Aniket Rao BirenBhai');
console.log(john.getFullName());
// john.getFullName()
// const Aniket=new User();
// console.log(Aniket);
