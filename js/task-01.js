// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const totalItem = document.querySelectorAll(".item");
const totalItemall = totalItem.length;

console.log(`Number of categories: ${totalItemall}`);

totalItem.forEach((element) => {
  const elementTitle = element.querySelector("h2").textContent;
  const oneElement = element.querySelectorAll("li");
  const oneElementlength = oneElement.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneElementlength}`);
});
