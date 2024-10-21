const plusBtn = document.querySelector(".plus");
const minBtn = document.querySelector(".min");
const resetBtn = document.querySelector(".reset");
const number = document.querySelector(".number");


let count = Number(number.textContent);

plusBtn.addEventListener("click", () => {
  count++;
  number.textContent = count;
});
minBtn.addEventListener("click", () => {
  count--;
  number.textContent = count;
});
resetBtn.addEventListener("click", () => {
  number.textContent = 0;
});
