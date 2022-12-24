// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsItem = document.querySelector("#ingredients");
const ulIngredients = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;

  ulIngredients.push(item);
});

ingredientsItem.append(...ulIngredients);
console.log(ulIngredients);
