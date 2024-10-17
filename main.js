// "use strict";

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
// ? start : 49, end : 52

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
// function calcOffPrice (price, discount = 0.3) { 
//   let sumPrice = 0
//   for(const calcPrice of price) sumPrice += calcPrice
//   return Math.floor((1 - discount) * sumPrice);
// }
// console.log(calcOffPrice([15, 20, 8, 40] ))

//? 1403/7/18
//? start: 53, end: 57

//? pass primitive VS refrence 
// const classRoom = {
//   name: 'mahdi'
// }
// function changeUser(obj) {
//   obj.name = 'mani'
//   return obj
// }
// changeUser(classRoom)
// console.log(classRoom)

//? first-class function
// در هر زبان برنامه نویسی که با فانکشن ها مثل 

//? HOF 
// function sayHi () {
//   return "Hi ! "
// }
// function sayHello() {
//   return "hello ! "
// }
// function greeting (name, cb) {
//   return cb() + name 
// }
// console.log(greeting("mhdi ", sayHello));
// console.log(greeting("mmd ", sayHi)); 

//? CB
//* 1
// function newGreeting(str) {
//   return function (name) {
//     console.log(str + name)
//   }
// }
// newGreeting('Hi ! ')('mahdi') ✅
//* 2
// function newGreeting(str) {
//   return function (name) {
//     console.log(str + name)
//   }
// }
// const fun = newGreeting('Hi ! ')
// fun('mahdi') ✅
//! Summarizing
// const newGreeting = (str) => (name) => console.log(str + name);
// const fun = newGreeting('Hi ! ')
// fun('mahdi') ✅f

//? HOF usage (task)
// function mulArr (data, num) {
//   const newArr = []
//   for(const item of data) {
//     newArr.push(item + num)
//   }
//   return newArr
// } 
// console.log(mulArr([1, 2, 3, 4], 2)); //! 1

//! best solution
//! cb => callback function
//* HOF
// function operatorOnArray(data, num, cb) {
//   let newNumber = []
//   for (const item of data) {
//     newNumber.push(cb(item, num))
//   }
//   return newNumber
// }
// function inc(data, num) {
//   return data + num
// }
// function dec (data, num) {
//   return data - num
// }
// function mul (data, num) {
//   return data * num
// }
// console.log(operatorOnArray([1, 3, 5, 3], 2, inc));
// console.log(operatorOnArray([1, 3, 5, 3], 7, mul));
// console.log(operatorOnArray([1, 3, 5, 3], 1, dec));

//? call, apply, binde

//? call
// const user = {
//   name: 'mahdi',
//   job: 'developer',
//   birthYear: 1994,
//   getYearOfBirth () {
//     console.log(2023 - this.birthYear)
//     return 2023 - this.birthYear
//   }
// }

// const guestUser = {
//   name : "mahdi",
//   birthYear: 2001 
// }
// user.getYearOfBirth()
// const newGetYear = user.getYearOfBirth.call(guestUser);
// newGetYear()

//? apply
// const user = {
//   name: 'mahdi',
//   job: 'developer',
//   birthYear: 1994,
//   getYearOfBirth () {
//     console.log(2023 - this.birthYear)
//     return 2023 - this.birthYear
//   },
//   msg (msg,num) {
//     console.log(`mahdi ! you have unread message ${msg,num}`);
//   }
// }
// const gueatUser = {
//   name: 'mahdi'
//   ,birthYear: 1850
// }
// const newUser = user.getYearOfBirth.apply(gueatUser)
// const newMsg = user.msg.apply(gueatUser, ['aaaa',54])

//? 1403/7/20
//? start: 58, end:59
//? bind 
// const user = {
//   name: 'mahdi',
//   birthYear: 1990,
//   getYearOfBirth(){
//     console.log(this, 2024 - this.birthYear)
//   }
// }

// const guestUser = {
//   birthYear : 2002
// }
// console.log(user.getYearOfBirth.bind(guestUser))

//? closure
// const CounterReq = () =>{
//   let count = 0
//   return function inner (){
//     count ++;
//     return count
//   }
// }

// const loginReq = CounterReq()
// console.log(loginReq());
// console.log(loginReq());
// console.log(loginReq());
// console.log(loginReq());
// console.log(loginReq());

// const signUpReq = CounterReq()
// console.log(signUpReq());
// console.log(signUpReq());
// console.log(signUpReq());

// console.log(loginReq())

//? 1403/7/21
//? start: 60, end: 61

//? string
// const userName = 'mahdi domanloo'
//* basic string methods
//! .indexOf
// console.log(userName.indexOf('x'))
//! .lastIndexOf
// console.log(userName.lastIndexOf('x'))
//! .slice() => no mutation
// console.log(userName.slice(4)); //* start 4 to end
// console.log(userName.slice(2, 8)) //* start 2 end 7=8
// console.log(userName.slice(-4)) //* start of end 4 index 
// console.log(userName.slice(2, -2)) //* start of end 4 index 
//! .includs() => search in character
// console.log(userName.includes("a")); //* true
// console.log(userName.includes("A")); //* false
// console.log(userName.includes("q")); //* false
//! .startWith()
// const url = '/resume/react'
// console.log(url.startsWith("/resume")); //* true 
// console.log(url.startsWith("resume")); //* false

//? join - split - trim
// const postTitle = '                     the new features in next.js V 13 '
// console.log(postTitle.trim(""));

//! task => search in url
// const url2 = 'https://Mhdix.ir/Resume/react'
// const printSelectUrl = url2.toLowerCase().indexOf("resume");
// console.log(url2.slice(printSelectUrl))
//! task => page title with last
// const pageTitle = url2.split("/")[url2.split("/").length - 1]; 
// console.log(pageTitle);

//? 1403/7/22
//? start: 62, end: 66

//? challenge 62
//? string in search 62

// const string = 'my name is mahdi domanloo Im Programmer And Live in Iran' 
// function stringSearch(str, searchTerm) {
//     const indexOf = str.toLowerCase().indexOf(searchTerm.toLowerCase().trim())
//     if(indexOf > -1) {
//         return `The first oxxurance of ${searchTerm} in the string is ${indexOf}`
//     }
//     return 'not invludes'
//     console.log(first)
// }
// console.log(stringSearch(string, '  My'))

//? challenge 63
//? check email exist 
// const registerEmail = 'mahdi@gmail.com'
// function checkEmailExist (email) {
//     const signUpEmail = email.toLowerCase().trim()
//     const userName = signUpEmail.split('@')[0]
//     if (registerEmail === signUpEmail) return 'email already exist'
//     return `wellcome! , this is your userName ${userName}`
// }
// console.log(checkEmailExist('mahdif@gmail.com'))

//? challenge 64 
//? capitilize first letter
// const userName = 'mhDiX'
// function capitilizeLetter(string) {
//     const newString = string[0].toUpperCase()  + string.toLowerCase().slice(1)
//     console.log(newString)
// }
// console.log(capitilizeLetter(userName))

//? padding in string 65
// const name = 'mshdi'
// console.log(name.padEnd(10, "*"));
// console.log(name.padStart(10, "*"));
//! challange convert 2:5:30 to 02:05:30
// const time = '2:5:30'
// const timeSplit = time.split(':')
// function padTime(time){
//     let [hr, min, sec] = time.split(':')
//     hr = hr.padStart(2, "0");
//     min = min.padStart(2, "0");
//     sec = sec.padStart(2, "0");
//     const newTime = [hr, min, sec].join(':')  
//     return newTime
// }
// console.log(padTime('2:4:30'))


//! challeng 2 cardNumber start self
// const cardNume = ' 6037 9981 9792 1777'
// const newCard = cardNume.trim()
// function splitCardNumber (card) {
//     console.log(newCard)
//     if (card.indexOf("-") >= 0) return card.split('-').join('');
//     if (card.indexOf(' ') >= 0) return card.split(" ").join("");
//     return card
// }
// const editerdCardNumber = newCard.slice(14).padStart(16, '*');
// console.log(editerdCardNumber)
// console.log(splitCardNumber(editerdCardNumber))
//! challeng 2 cardNumber start video
// const cardNume2 = "  6037-9981-9792-1777";
// function maskCreditCard(cardNo) {
//     const str = String(cardNo).replace(' ', '').replace('-', '')   
//     const last = str.slice(-4)
//     return last.padStart(16, '*')
//     console.log(last)
// }
// console.log(maskCreditCard(cardNume2))

//? 1403/7/24 
//? start : 67, end: 74

const arr = ['A', "B", "C", "D"]
//! push => add element to last arr
// console.log(arr.push("f"))
// console.log(arr)
//! pop => remove element to last arr
// console.log(arr.pop());
// console.log(arr)
//! shift => remove element to first arr
//  console.log(arr.shift('A'))
//  console.log(arr)
//! unshift => add element to first arr
//  console.log(arr.unshift('V'));
// console.log(arr)
//! indexOf
// console.log(arr.indexOf('B'))
//! includs
// console.log(arr.includes('B'))

//? slice-splice-concat-remove-join-at
//! slice  : not mutate
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice()); //* clone arr
// console.log(arr)
//! splice : Mutate 
// console.log(arr.splice(1))
// console.log(arr.splice(1 ,2 , 'aaa', 'bbb'))
// console.log(arr)
//! reverse: 
// console.log(arr.reverse())
//! join: NOT MUTATE
// console.log(arr.join('-'))
//! concat: NOT MUTATE
// const arr2 = ['E', 'F', 'D', 'H']
// console.log(arr.concat('t'))
// const clone = arr.concat(arr2); //! combine
// console.log(clone)  
// console.log(arr)
//! at : 
// console.log(arr.at(0))
//! access the last index of an Array
//* 1. []
// console.log(arr2)
// console.log(arr2[arr2.length-1])
//* 2. slice:
// console.log(arr2.slice(-1)[0])
//* 3. pop:
// console.log(arr2.pop())
//* 4. at:
// console.log(arr2)
// console.log(arr2.at(-1))

//? forEach => loop on array  
//! for of VS forEach
// const courses = ['reAct', 'html', 'csS', 'vue']
// for (const item of courses) console.log(item) 
//! forEach : courses.forEach((item, index, arr) => {})
// const newCourses = []
// courses.forEach((course, index) => {
//     newCourses.push({
//         id: index +1,
//         title: course[0].toUpperCase() + course.toLowerCase().slice(1)
//     })
//     console.log(course, index)
// })
// console.log(newCourses)

// function lowerCaseItem (str) {
//     return str[0].toUpperCase() + str.toLowerCase().slice(1)
// }

// console.log(lowerCaseItem('mahdi domanloo'))

//? foreach on set and map data
//! foreach on set 
// const courses = ['reAct', 'html', 'html', 'csS', 'vue']
// const coursesSet = new Set(courses)
// coursesSet.forEach((item, key) => {
//     console.log(item, key)
// })
//! foreach on map and map data
// const mapData = new Map([
//   ["admin", "mahdi"],
//   ["user", "mmdi"],
//   ["editor", "samira"],
//   ["admin", "javad"],
// ]);
// mapData.forEach((value, key) => {
//     console.log(value, key)
// })

//? map, filter, reduce method : transform array NOT MUTATE
//! DATA:
// const user = [
//   {
//     id: 1,
//     isActive: true,
//     role: 'TEACHER',
//     age: 28,
//     name: "mahdi",
//     score: 1
//   },
//   {
//     id: 2,
//     isActive: false,
//     role: 'ADMIN',
//     age: 38,
//     name: "mike",
//     score: 3
//   },
//   {
//     id: 3,
//     isActive: true,
//     role: 'ADMIN',
//     age: 14,
//     name: "petter",
//     score: 5
//   },
// ];
//! map: return 1.return new Arr, 2.DONT MUTATE,   
//! user.map((item, index, array) => {})
// const userIds = user.map((user) => {
//     return {id: user.id}
// })
// console.log(userIds)
//! axample
// const newObject = {}
// user.map((item, index) => {
//     const activeUser = item.isActive === true ? user : false;
//     if(activeUser !== false){
//         return user.push({ ...newObject , message: 'salam'})
//     }
// })
// console.log(user)
// const userIds = user.map(({id},index ) => {
//     return { id }
// })
// console.log(userIds)
//! example => 
// const newUsers = user.map((user) => {
//     return {
//         ...user,
//         msg: `Hi ${user.name}, Yout profile is ${user.isActive ? 'Activated' : 'NOT Activated'}, and your role is ${user.role}`
//      }
// })
// console.log(newUsers)

//? filter method : transform array *NOT MUTATE => based on condition 
//! how to filter all active users ? 
// const activeUsers = user.filter((user,index) => user.isActive) 
// console.log(activeUsers)
//* task = 10 user => click user 3 => delete user id 3 
// let deleted = []
// function filterUser (user, id) {
//     return deleted = user.filter(user => user.id !== id)
// }
// filterUser(user, 2)
// console.log(deleted)

//? reduce method
//! reduce => return is a single value reduce((acc, cur, index, arr) => {})
// const totalScore = user.reduce((acc, curr, index) => {
//     console.log(index, acc, curr.score)
//     return acc + curr.score
// },0)
// console.log(totalScore)
//! task 2 => reduce in price 
const products = [
  {
    id: 4,
    title: "p-1",
    price: "88.64$",
    qty: 1,
  },
  {
    id: 6,
    title: "p-2",
    price: "34.13$",
    qty: 3,
  },
  {
    id: 8,
    title: "p-2",
    price: "34.13$",
    qty: 3,
  },
  {
    id: 12,
    title: "p-3",
    price: "52.34$",
    qty: 5,
  },
  {
    id: 7,
    title: "p-4",
    price: "65.43$",
    qty: 2,
  },
];
// const totalPrice = products.reduce((acc, curr) => {
//     return acc + Number(curr.price.split('$')[0])
// },0)
// console.log(totalPrice.toFixed(2))
//! 2
// const totalPrice2 = products.reduce((acc, curr) => {
//     const price = Number(curr.price.split('$')[0]) * curr.qty
//     return acc + price
// },0)
// console.log(totalPrice2.toFixed(2))

//? challenge : calc average challenge 74
//? calc average of marks
//! data :
// const userMarks1 = [5, 12, 18, 7, 19, 17, 8];
// // const userMarks2 = [5, 18, 12, 10, 19, 17, 8];
// // const userMarks3 = [5, 14, 18, 20, 19, 17, 8];
// //! calculate the average of marks
// const mark = userMarks1.reduce((acc, curr, i , arr) => acc + curr / arr.length, 0)
// console.log(mark.toFixed(2))
// //! 2. calculaete  the average of passed students & 3.
// //! 3. shift marks based + 3 and recalculate the average
// const passAve = userMarks1
//     .filter(pass => pass >= 10)
//     .reduce((acc, curr, i , arr) => acc + (curr / arr.length),0)
// console.log(passAve)
// //! shiftMarks
// const shiftAv = userMarks1
//     .map((m) => m + 3)
//     .reduce((acc, curr, i , arr) => acc + (curr / arr.length),0)

// console.log(shiftAv.toFixed(2))
// //! shift marks passed
// const shiftAvPassed = userMarks1.map((m) => m+3).filter((m) => m >= 10).reduce((acc, curr, i , arr) => acc + curr / arr.length, 0 )
// console.log(shiftAvPassed)

//? start : 75, end :
//? 1403/7/25

//? find & findIndex method
//! find method
const product = products.find((product) => {
  return product.title === "p-3";
});
// console.log(product)
const filter = products.filter((item) => {
  return item.title === "p-2";
});
// console.log(filter)

//! findIndex method -> indexOf
//* indexOf
const userMark = [5, 7, 8, 10, 6, 12];
// console.log(userMark.indexOf(10)) //! 3
//* findIndex
const index = products.findIndex((product) => product.title === "p-2");
// console.log(index)
//! challenge : remove product based on product id
//* with filter methos
// function deleteP(products, deleteId) {
//   products.map((product) => {
//     console.log(product.id !== deleteId ? product : null);
//   });
// }
// console.log(deleteP(products, [4,2]));

// function filterProducts(products, id) {
//   const filterProducts = products.filter((product) => product.id !== id);
//   return filterProducts;
// }
// console.log(filterProducts(products, 2));
//* with splice & findIndex
function filterProducts2(products,id) {
    const cloneProducts = [...products]
    const index = cloneProducts.findIndex(p => p.id === id)
    console.log(products);
    cloneProducts.splice(index, 1)
    return cloneProducts
}
console.log(filterProducts2(products, 12));
console.log(products)
