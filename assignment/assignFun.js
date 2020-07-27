

let myGrade = function (currentMarks , totalMarks) {
    let myPercentage = (currentMarks * 100 ) / totalMarks ;
 
    let Grade =''
   
    if (myPercentage >= 90) {
        Grade ='AA';
    } else if(myPercentage >= 80){
        Grade = 'AB'
    } else if(myPercentage >= 80){
        Grade = 'BB'
    } else if(myPercentage >= 70){
        Grade = 'BC'
    } else if(myPercentage >= 60){
        Grade = 'CC'
    } else if(myPercentage >= 50){
        Grade = 'CD'
    } else if(myPercentage >= 40){
        Grade = 'DD'
    } else {
        Grade = 'FF'
    }


    return `Your grade is ${Grade} and You got ${myPercentage}% in your Exam`;    
}

let result = myGrade(350 , 600)

console.log(result);

