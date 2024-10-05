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
// start: 20, end: 25

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

//! while

// let i = 0
// while (i <= 10){
//     if(i % 4 === 0) console.log('the even', i);
//     i++
// }



//! for
// let i = 10;
// for (i; i >= 0; i--) {
//   // if (i % 2 === 0 ) console.log('the even number is ', i);
// }
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
    // console.log(item)
}
// console.log(roles[0]);

//! breack - continue
let i = 0;
for (i ; i < 0 ; i ++) {

}





//? 1403/7/12
// start: 26, end: 29

//! function 
// function sayHello (name = '...')  {
//   console.log('salam ' + name + ' khubi ?')
// }

// sayHello('mahdi')

// function calculateArea (radius) {
//   const area = 3.14 * radius ** 2
//   console.log('the circle area is equal to : ' + area)
// }
// calculateArea (50000)

//! RETURN IN FUNCTION
function msgRole (role) {
  if(role === 'TEACHER') return 'hello teacher role'
  if(role === "MERCHANT") return 'hello merchant role'
  return 'hello unknown user'
}
// const rolse = msgRole("TEACHER");
// console.log(rolse)

// function getUserRole (role) {
//   if (role === "admin") {
//     return "hello admin"
//   } if (role === "teacher") {
//     return "hello teacher"
//   }
//   return 'unknown user role'
// }

// console.log(getUserRole ('admin'))

// function getUserRole (role) {
//   switch (role) {
//     case 'admin':{
//        return 'hello admin';
//       }
      
//     case 'teacher':{
//       return 'hello teacher';
//     }
    
//     default:
//       return 'hello unknown user';
//   }
// }

// console.log(getUserRole('admind'))

//! max number challenge

// function maxNumber(a, b) {
//   if (a > b) return "a", a;
//   return "b", b;
// }
// function maxNumber(a, b) {
//   return a > b ? a : b
// }

// console.log(maxNumber(10, 15))


//! FizzzBuzz challenge

// function FizzzBuzz (number) {
//   if (number % 3 === 0 & number % 5 === 0) return 'FizzBuzz'
//   if (number % 3 === 0) return "fiz";
//   if (number % 5 === 0) return "buzz"; 
//   const typeOf = typeof number
//   return typeOf == "number" ? "not valid number !" : "not a number";
// }
// console.log(FizzzBuzz(4))

//? 1403/07/13
// start: 30, end: 30, repeat: 30

//? 1403/07/14
// start: 30, end: 

const course = {
  title: 'react.js',
  price: 200,
  discount: 10,
  stusent: ['mahdi', 'ali', 'mosi'],
  isFree: true,
  category: {
      id: 1,
      englishTitle: 'frontend',
      title: 'Front-end',
    },
    calcOffPrice: function () {
      this.offPrice = this.price * (1- this.discount / 100);
      return this.offPrice;
    }
}
console.log(course.calcOffPrice())
console.log(course.offPrice);
