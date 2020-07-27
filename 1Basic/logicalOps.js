
// && - AND operator - both side need to be true 
// ||  - OR operator - one side need to be true
//  ! not operator (reverse cycology)

let isLoggedin = false
let isVerified = true
let hasPaymentToken = true
let Guest =true


if ( !isLoggedin && isVerified && hasPaymentToken) {
  console.log('Welcome in our appliction');
  console.log('Grant access to paid cource');
} else if(isVerified || Guest){
    console.log('Allow free preview')
}else{
    console.log('please contact admin');
}