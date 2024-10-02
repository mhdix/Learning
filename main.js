// const  user = {name: 'mosi' , lName: 'mosa'}

// console.log(user.name)
// console.log('4' * '3' )

const totalPrice = 220_000;
const dicountLimit = 200_000;

// console.log(totalPrice > dicountLimit ? '10' : '5');

//? Coupon Limit
// logical operators 15

const isActive = false;
const couponUsage = 10;
const couponLimit = 20;

// console.log(couponUsage < couponLimit && isActive ? 'you can usage coupon' : 'cant usage coupon' )

//? 1403/7/11
// start: 20, end: 22

//! switch - case :
// const role = ""; // ADMIN | MERCHENT | TEACHER

// switch (role) {
//   case "ADMIN": {
//     console.log("The User Role Is ADMIN");
//     break;
//   }
//   case "MERCHENT": {
//     console.log("The User Role Is MERCHANT");
//     break;
//   }
//   case "TEACHER": {
//     console.log("The User Role Is TEACHER");
//     break;
//   }
//   default: {
//     // console.log('unknown user role');
//   }
// }

//! for
let i = 10;
for (i; i >= 0; i--) {
  // if (i % 2 === 0 ) console.log('the even number is ', i);
}
// console.log(i)

//! for(in)
const user = {
  name: "mahdi",
  email: "test@test.com",
  phoneNumber: "0992543808",
};

for (const key in user) {
//   console.log(user[key]);
}

//! for(of)
const roles = ['ADMIN', 'TEACHER', 'MERCHANT']

for (const item of roles) {
    console.log(item)
}
console.log(roles[0]);