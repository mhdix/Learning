const plusBtn = document.querySelector(".plus");
const minBtn = document.querySelector(".min");
const resetBtn = document.querySelector(".reset");
const number = document.querySelector(".number");




// by event listener 
// let count = Number(number.textContent);

// plusBtn.addEventListener("click", () => {
//   count++;
//   number.textContent = count;
// });
// minBtn.addEventListener("click", () => {
//   count--;
//   number.textContent = count;
// });
// resetBtn.addEventListener("click", () => {
//   number.textContent = 0;
// });


//! deferent function 
// let count = Number(number.textContent)

// function increment() {
//   count++;
//   number.textContent = count;
// }
// function decrement() {
//   count++;
//   number.textContent = count;
// }
// function reset() {
//   number.textContent = count = 0;
// }

// plusBtn.addEventListener("click", increment);
// minBtn.addEventListener("click", decrement);
// resetBtn.addEventListener("click", reset);

// //! fast with contains
// let count = Number(number.textContent)

// function counter (e) {
//         const classList = e.target.classList
//         if (classList.contains('plus')) count ++
//         else if(classList.contains('reset'))count = 0
//         else count --

//         number.textContent = count
// }
// plusBtn.addEventListener("click", counter);
// minBtn.addEventListener("click", counter);
// resetBtn.addEventListener("click", counter);

//? counter project #2 91
//! add events inner foreach
// const btn = document.querySelectorAll('.btn')

// const counterValue = document.querySelector('.number')
// // counterValue.style.color = 'blue'

// let count = Number(number.textContent)
// btn.forEach(btn => {
//     btn.addEventListener('click' ,(e) => {
//         const classList = btn.classList
//         if (classList.contains("plus")) count++;
//         else if (classList.contains("min")) count--;
//         else count = 0

//         if(count > 0){
//             counterValue.classList.add('green')
//             counterValue.classList.remove('red')
//         } 
//         else{
//             counterValue.classList.add('red')
//         } 
//         counterValue.textContent = count
//     })
    
// });

//! self test
const btn = document.querySelectorAll(".btn");
let counter = Number(number.textContent);

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.classList)
    if (btn.classList.contains("plus")) counter++;
    else if (btn.classList.contains("min")) counter--;
    if (btn.classList.contains("reset")) counter = 0;
    number.textContent = counter;
  });
});