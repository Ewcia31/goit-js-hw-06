const decreaseBtn = document.querySelector(`button[data-action="decrement"]`);
const increaseBtn = document.querySelector(`button[data-action="increment"]`);
const counterSpan = document.querySelector(`#value`);

let counter = 0;

decreaseBtn.addEventListener("click", () => {
  counter -= 1;
  counterValue();
});

increaseBtn.addEventListener("click", () => {
  counter += 1;
  counterValue();
});

function counterValue() {
  counterSpan.textContent = counter;
}
