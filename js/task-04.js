let value = document.querySelector("#value");
let counterValue = 0;

const buttonCons = document.querySelector('button[data-action="decrement"]');
const buttonPros = document.querySelector('button[data-action="increment"]');

buttonCons.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

buttonPros.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
