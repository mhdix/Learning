// const  user = {name: 'mosi' , lName: 'mosa'}

// console.log(user.name)
// console.log('4' * '3' )

// const totalPrice = 220_000;
// const dicountLimit = 200_000;

// console.log(totalPrice > dicountLimit ? '10' : '5');

//? Coupon Limit
// logical operators 15

// const isActive = false;
// const couponUsage = 10;
// const couponLimit = 20;

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
// const user = {
//   name: "mahdi",
//   email: "test@test.com",
//   phoneNumber: "0992543808",
// };

// for (const key in user) {
//   console.log(user[key]);
// }

//! for(of)
// const roles = ['ADMIN', 'TEACHER', 'MERCHANT']

// for (const item of roles) {
    // console.log(item)
// }
// console.log(roles[0]);

//! breack - continue
// let i = 0;
// for (i ; i < 0 ; i ++) {

// }





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
// function msgRole (role) {
//   if(role === 'TEACHER') return 'hello teacher role'
//   if(role === "MERCHANT") return 'hello merchant role'
//   return 'hello unknown user'
// }
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
//? start: 30, end: 30, repeat: 30


//? 1403/07/14
//? start: 30, end: 38

// const course = {
//   title: 'react.js',
//   price: 200,
//   discount: 10,
//   stusent: ['mahdi', 'ali', 'mosi'],
//   isFree: true,
//   category: {
//       id: 1,
//       englishTitle: 'frontend',
//       title: 'Front-end',
//     },
//     calcOffPrice: function () {
//       this.offPrice = this.price * (1- this.discount / 100);
//       return this.offPrice;
//     }
// }
// console.log(course.calcOffPrice())
// console.log(course.offPrice);

//! constructor - factory : function

//? factory function 
// function createCourse (title, price, discount) {
//   return {
//     title,
//     price,
//     discount,
//     calcOffPrice() {
//       return price * (1 - discount / 100)
//     }
//   }
// }
// console.log(createCourse("next", 200, 10).calcOffPrice());
// console.log(createCourse("next", 300, 20).calcOffPrice());
// console.log(createCourse("next", 400, 5).calcOffPrice());


//? constructor function

// function CreateCourse (title, price, discount) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.calcOffPrice = function () {
//     return price * (1 - discount / 100)
//   }
// }
// const course1 = new CreateCourse("Next", 200, 10);
// console.log(course1.calcOffPrice());

// const course2 = new CreateCourse("React", 150, 8);
// console.log(course2.calcOffPrice());


//? built-in constructor function
// const strObj = new String("string built-in js");
// console.log(strObj, typeof strObj)
// function CreateCourse(title, price, discount) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.calcOffPrice = function () {
//     return price * (1 - discount / 100);
//   };
// }
// const course1 = new CreateCourse("Next", 200, 10);

// console.log(course1.constructor);
// console.log(course1.calcOffPrice());
// console.log(course1 instanceof CreateCourse);

//? dynamic nature of object
// function CreateCourse(title, price, discount) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.calcOffPrice = function () {
//     return price * (1 - discount / 100);
//   };
// }
// const course1 = new CreateCourse("Next", 200, 10);
// course1.student = 230 //! add a property to obj
// delete course1.title //! delete property of obj
// console.log(course1.hasOwnProperty('price')) //! we can see obj has a this property
// console.log(course1)

// //! get kys or valus has Object (min 4, 36) 
// console.log(Object.keys(course1)); //! Array Res
// console.log(Object.values(course1)); //! Array Res
// console.log(Object.entries(course1)); //! get ky OR val Array Res.


//? primitive VS refrence data type
//! refrence type
// const name = 'mahdi'
// let copiedName = name
// copiedName = 'mostaf'
// console.log(name);
// console.log(copiedName);

//! primitive type
// const user = {
//   name: 'mahdi',
//   age: 20
// }
// const copiedUser = JSON.parse(JSON.stringify(user))

// copiedUser.name = 'asqar'
// console.log(user.name);
// console.log(copiedUser.name);

//? Object destructuring
// const course = {
//   title: 'next',
//   price: 100,
//   discount: 10,
//   showMsg({name, email, phoneNo}) {
//     console.log('hi ' + name + ' your Email is ' + email + ' and phone number is ' + phoneNo)
//   }
// } 

// const {showMsg, discount} = course
// console.log(showMsg({name: 'mahdi' , email: 'x@email.com', phoneNo: '09925438078'}))



//? 1403/7/15
//? start: 39, end: 


//? template literal
const course = {
  title: 'next',
  price: 100,
  discount: 10,
  showMsg({name, email = '-' , phoneNo = '-'}) {
    console.log(`hi ${name} your Email is ${email} and phone number is ${phoneNo}`)
  }
} 
course.showMsg({
    name: 'mahdi'
    ,email: 'EX@gmail.com'
    ,phoneNo: 35321
})