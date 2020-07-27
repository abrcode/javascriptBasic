/* NOTE : never use arrow function in method or constructor */

 const cameras = {
     price : 600 ,
     weight :2000,
     myDesc : function () {
         return `This is canon camera , the price of it ${this.price} $`
     }  
    
     /* right way use of not arrow but same as arrow in react  */
    //  myDesc(){
    //       return `This is canon camera , the price of it ${this.price} $,`
    //  }

     /*wrong use of  arrow fnctn */   
    //  myDesc  ()=> {
    //      return `This is canon camera , the price of it ${this.price} $,`
    //  }
 }

 console.log(cameras.myDesc());
 

 /* redux */

// const funct = ()=> ({
//     key: "value";
// })
