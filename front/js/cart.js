fetch("http://localhost:3000/api/products")
.then((response) => {
  return response.json();
})
.then((kanap) => {
  console.log(kanap);
  return data(kanap);
});




const cart = []
retrieveItemsFromCache()
cart.forEach((item) => display(item))

// let data1 = window.localStorage.getItem(key);

// var cat = localStorage.getItem('monChat');

function retrieveItemsFromCache() {
  const numberOfItems = localStorage.length
  for (let i = 0; i < numberOfItems; i++) {
    const item = localStorage.getItem(localStorage.key(i)) || "" 
    const itemObject = JSON.parse(item)
    cart.push(itemObject)
    console.log("retrive item for cache " + item )
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function getIdsFromCache(item) {
  const numberOfProducts = localStorage.length
  const ids = []
  for (let i = 0; i < numberOfProducts; i++) {
    const key = localStorage.key(i)
    const id = key.split("-")[0]
    ids.push(id)
  }
  return ids
}



function data(array) {
array.forEach((array) => {

const article = document.createElement("article");
article.classList.add("card__item");
article.dataset.id = item.id;
article.dataset.color = item.color;

////////////////////////////////////////////////////

const div = document.createElement("div");
div.classList.add("cart__item__img");

const image = document.createElement("img");
image.src = item.imageUrl;
image.alt = item.altTxt;

////////////////////////////////////////////////////

const description = document.createElement("div");
description.classList.add("cart__item__content");

////////////////////////////////////////////////////

const description2 = document.createElement("div");
description.classList.add("cart__item__content__description");

const h2 = document.createElement("h2");
h2.textContent = item.name;
const p = document.createElement("p");
p.textContent = item.color;
const p2 = document.createElement("p");
p2.textContent = item.price + " €";

////////////////////////////////////////////////////

child(article, div, image, description , h2, p, p2);

 });
}



function child(article, div, image, description , h2, p, p2){
  const items = document.querySelector("#cart__items");
  //  const items = document.getElementById("#items");
  items.appendChild(article);
  article.appendChild(div);
  div.appendChild(image);
// 1ere balise div
  ///////
  
  article.appendChild(description);
  description.appendChild(description2);

  description2.appendChild(h2);
  description2.appendChild(p);
  description2.appendChild(p2);
  //return child(balisea, article, img, h3, p)

  ///////
  /////// troisième balise div settings
}



