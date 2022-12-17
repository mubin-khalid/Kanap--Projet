// alert("hello")

//api de chrome mais qu'en est t'il de fixefox ou safari?

// fetch("http://localhost:3000/api/products")
//     .then((oui) => oui.json())
//     .then((data) => {
//         return add(data)
//     }
//     )

// function add(donne){
//     const id = data[0]._id
//     first.text = "description de l'image du kanap"
//     const urlfonction = balise(imageUrl)
//     const article = fairearticle()
//     appendChild(balise)
// }

// function balise(url){
//     const first = document.createElement("a") //creer du HTML
//     first.href = "./product.html?id=42" //+ id
//     first.text = "description de l'image du kanap"
//     return urlfonction
// }

// function appendChild(urlfonction){
//     const mapremierimage = document.querySelector("#items")
//     if(items != null)
//     {
//         mapremierimage.appendChild(first)
//     }
//     first.text = "description de l'image du kanap"
// }
// function fairearticle(){
//     const article = document.createElement("article") //creer du HTML
//     return article
// }
// console.log(data)
//console.log("url display, j'afiche l'imahe du tableau 8 images existe", imageUrl)
/// const first = document.createElement("a") //creer du HTML
// first.href = "http://localhost:3000/api/product"
// first.href ="http://localhost:3000/images/kanap02.jpeg"

///Comment selection un element? On peut regarder dans l'API de Chrome
/// On peut peut etre utliser document.querySelector. On selection la div Item ou L'ID items directement. (On voit qu'on à bien implemeter la fonction
// directent sur la console en ligne. On selection l'ID ou le nom de vid avec un # ET ENTRE " " )
//cedant  mapremierimage et first sont séparer. Dans le HTML les  deux sont imbriqué
//J'ai chercher alors et la foncton append child peut marcher

/*Utilisation de la fonction Fletch pour faire un appel API
afin d'obtenir les données des produits sur le localhost:3000*/

// async function getProducts() {
//   const response = await fetch("http://localhost:3000/api/products/");
//   if (response.ok) {
//     return response.json();
//   } else {
//     console.log(response.error);
//   }
// }


// async function displayProduct(){
//   //mettre des commentaire!!!
//   const products = await getProducts();
//   const items = document.querySelector("#items");
//   const fragment = document.createDocumentFragment();
//   products.forEach(product => {
//     const baliseA = document.createElement("a");
//     baliseA.href = "./product.html?id=" + product._id;
//     baliseA.innerHTML = `<article>
//     <img src="${product.imageUrl}" alt="${product.altTxt}">
//     <h3 class="productName">${product.name}</h3>
//     <p class="productDescription">${product.description}</p>
//   </article>`;
//     fragment.appendChild(baliseA);
//   });
//   items.appendChild(fragment);
// }

// displayProduct()
/*creation d'une fonction pour récupérer les données mise en 
commentaire dans le fichier index.html ligne 94 à 100*/




fetch("http://localhost:3000/api/products/")
.then((response) => {
  return response.json();
})
.then((kanap) => {
  console.log(kanap)
  return data(kanap);
});


function data(array) {
  array.forEach((array) => {
    const id = array._id;
    const aHref = document.createElement("a");
    aHref.href = "./product.html?id=" + id;
    const article = document.createElement("article");
    const image = document.createElement("img");
    image.src = array.imageUrl;
    image.alt = array.altTxt + " , " + array.name;
    const h3 = document.createElement("h3");
    h3.classList.add("productName");
    h3.textContent = array.name;
    const p = document.createElement("p");
    p.classList.add("productDescription");
    p.textContent = array.description;
    createTagElement(aHref, article, image, h3, p);
  });
}

/*Fonction qui permet de donner des enfants au parent #items afin
de le rendre visible dans le code html dans le DOM*/


function createTagElement(aHref, article, image, h3, p) {
  const items = document.querySelector("#items");
  if (items != null) {
    items.appendChild(aHref);
    aHref.appendChild(article);
    article.appendChild(image);
    article.appendChild(h3);
    article.appendChild(p);
  }
}
