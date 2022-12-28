const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector(".gallery");

images.forEach((image) => {
  const markup = `<li><img src="${image.url}" alt="${image.alt}" width = 500px/></li>`;
  galleryList.insertAdjacentHTML("beforeend", markup);
});
console.log(galleryList);

const pictures = document.querySelectorAll(".picture");

list.style.display = "flex";
list.style.listStyle = "none";
list.style.gap = "10px";
galleryList.style.display = "flex";
galleryList.style.listStyle = "none";
galleryList.style.gap = "10px";
