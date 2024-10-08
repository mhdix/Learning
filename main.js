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
function msgRole (role) {
  if(role === 'TEACHER') return 'hello teacher role'
  if(role === "MERCHANT") return 'hello merchant role'
  return 'hello unknown user'
}
const rolse = msgRole("TEACHER");
console.log(rolse)

function getUserRole (role) {
  if (role === "admin") {
    return "hello admin"
  } if (role === "teacher") {
    return "hello teacher"
  }
  return 'unknown user role'
}

console.log(getUserRole ('admin'))

function getUserRole (role) {
  switch (role) {
    case 'admin':{
       return 'hello admin';
      }
      
    case 'teacher':{
      return 'hello teacher';
    }
    
    default:
      return 'hello unknown user';
  }
}

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
//? start: 39, end: 41


//? template literal
// const course = {
//   title: 'next',
//   price: 100,
//   discount: 10,
//   showMsg({name, email = '-' , phoneNo = '-'}) {
//     console.log(`hi ${name} your Email is ${email} and phone number is ${phoneNo}`)
//   }
// } 
// course.showMsg({
//     name: 'mahdi'
//     ,email: 'EX@gmail.com'
//     ,phoneNo: 35321
// })



//? array destructuring
// const numes = [1, 2, 3]
// const [a, ,c] = numes
// console.log(c)

//! default val 
// const numes1 = [1, 2, 3];
// const [a1, b1, c1, d1 = 4] = numes1;
// console.log(d1);

//! nested array
// const numes2 = [1, 2, [3, 4]];
// const [a2, b2, [c2, d2]] = numes2;
// console.log(c2);


//? spread operators : ...
//! 1. add some data to the end
// const arr = [3, 4]
// const arr2 = [1,2, ...arr]
// console.log(arr2)

//! 2. pass all array index as arguments : 
// const arr = [1,2,3,4,5,6,7]
// console.log(arr); //! Res : [1,2,3,4,5,6,7]
// console.log(...arr); //! Res : 1 2 3 4 5 6 7

//! 3. push items to array
// const tags = ['front-end', 'backend', 'web developer']
// const newTags = [...tags, 'Full Stack']
// console.log(tags) //! front-end backend web developer
// console.log(newTags) //! front-end backend web developer Full Stack

//! 4. copy
// const tags = ["front-end", "backend", "web developer"];
// const copyTags = [...tags] //! shallow copy

//! 5. join array
// const bakendTags = ['node.js', 'nest.js']
// console.log([...tags, ...bakendTags])
// console.log(bakendTags)

//! string : 
//! 1. add character to string
// const str = 'mahdi'
// console.log([...str , "d"])

//! 2. pass to function
// console.log(...str)

//! object : 
// const user = {
//     name: 'mahdi',
//     id: 1
// } 

//! 1. add key value to object
// console.log({...user, email: 'user@gmail.com'})
// console.log(user)

//! 2. copy ==> clone 1. Object.assign()
// const newUser = { ...user }
// newUser.email = 'user@gmail.com'
// console.log(user, newUser)



//? 1403/7/16
//? start: 42, end: 48

//? rest operator
//! array
// const tags1 = ['react.js', 'vue.js']
// const tags2 = ['next.js', 'nuxt.js']
// const [reactTag, ...other] = [...tags1, ...tags2];
// console.log(other)
//! object
// const user = {
//     id: 1,
//     name: 'mahdi',
//     email: 'm@gmail.com',
//     phone: '09900',
// } 
// const { id, eamil, ...otherUserData} = user
// console.log(email);
// console.log(otherUserData);

//? rest operator in function
// function totalInRest (...args) {
//     let total = 0
//     for(const item of args) total += item
//     console.log(total)
// }
// totalInRest (1, 2, 8, 38, 7, 6, 5)
//! task
// function discount (discount, ...price) {
//     let total = 0
//     for (const item of price) total += item
//     const result = (total * (1 - discount))
//     console.log(total) 
//     console.log(result);
//     console.log(Math.floor(result));
// }
// discount(0.3, 1, 2, 4, 4, 5, 5, 77);

//? set data structure

//* Set: iterable data ==> array, string
// const set = new Set([1,2,3,4,5,5,6])
// console.log(set)

//! size 
// console.log(set.size)

//! 2. check => has
// console.log(set.has(2))

//! 3. add
// set.add(10)
// console.log(set)

//! 4. delete 
// console.log(set.delete(4))
// console.log(set)

//! 5. not get value in set

//! 6. clear
// set.clear()
// console.log(set)

//! 7. loop
// for (let item of set) {
//     console.log('loop in' + item)
// }

//! use case :
// const roles = ['admin', 'admin', 'teacher' , 'teacher', 'editor']
// const uniqueRoles = new Set(roles)
// console.log([...uniqueRoles]) //! new arr
//* how many unique role ?
// console.log(new Set(roles).size)
//* best practice new arr 
// console.log([...new Set(roles)]) 

//! convert array string, to uniq string 
// const userName1 = 'mahdiii domanloo'
// console.log([...new Set(userName1)].join(""));


//? map data structure
//!  Map : ==> object and keys, value ; key:number, ...
// const user = new Map()

//! set : return updated map and add key value
// console.log(user.set('id', 1))

//! chaine set
// const numbeInSet = [1,2]
// user.set (true , 'ok').set('name', 'mahdi').set(numbeInSet, 'mahdi&mmdtaher')
// console.log(user);

//! size
// console.log(user.size)

//! delete
// console.log(user.delete('name'))
// console.log(user)

//! check exist
// console.log(user.has("name"));
// console.log(user.has(numbeInSet));

//! get data
// const getDataMap = user.get("id");
// console.log(getDataMap)

//! clear 
// user.clear()
// console.log(user)


//? an example of map data type
// const john = { name: "john Doe" };
// lily = {name: 'lily Doe'}
// peter = {name: 'peter pit'}

// const userRole = new Map([
//   [john, "admin"],
//   [lily, "editor"],
//   [peter, "subscriber"],
// ]);

// console.log(userRole.get(john))

//! loop on item keys name
// for(const item of userRole.keys()) {
//     console.log(item.name)
// }

//! loop in item values role
// for(const roles of userRole.values()) {
//     console.log(roles)
// }

//! loop on all item
// for(const items of userRole.entries()) {
//     console.log(items[0].name, ' - ', items[1])
// }
//* easier
// for (const [user, role] of userRole.entries()) {
//   console.log(user.name, " - ", role);
// }

//! convert map keys or values to array
// console.log([...userRole.keys()]) //! convert map keys to array
// console.log([...userRole.values()]) //! convert map values to array

//? what type of data to select
// if list data use array or set   
// if object => object, map

//? map and set challange 
//! get all unique roles
// const user = john = { name: "john Dae" },
//   ali = { name: "ali asghari" },
//   mahdi = { name: "mahdi domanloo" },
// akbar = { name: "akbar darzi" };

// const userRole = new Map([
//   [john, "admin"],
//   [ali, "subscriber"],
//   [mahdi, "admin"],
//   [akbar, "creator"],
// ]);

// const uniqueRole = [...new Set(userRole.values())]; 
// console.log([...uniqueRole]);


// ? 1403/7/17
// ? start : 49, end : 51

//? function Declration & function Expressoion
//! function Declration
// add(4, 6)
// function add (a, b) {
//   console.log(a + b);
//   return a+b
// }
// add(19,4)

//! function Expression
// addExpression(5, 6);
// const addExpression = function (a, b) {
//   console.log(a + b)
//   return a + b
// }
// addExpression(5 , 6)

//? arrow fnuction => 
//! function declratioon 
// function calculateOffPrice(discount, price) {
//   console.log(discount, price)
// } 
//! arrow function
// const calculateOffPrice = (discount, price) => {
//   console.log(discount, price);
// }
//! implicit  
// const sum = a => 5 + a
// console.log(sum(2))


//? default-parameters
function calcOffPrice (price, discount = 0.3) { 
  let sumPrice = 0
  for(const calcPrice of price) sumPrice += calcPrice
  return Math.floor((1 - discount) * sumPrice);
}
console.log(calcOffPrice([15, 20, 8, 40] ))