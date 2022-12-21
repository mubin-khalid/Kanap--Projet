
// avoir();
// /*Pour chaque élément dans dataPanier, cette boucle va permettre de créer toutes les
// balises et données contenue dans la page cart.html en commentaire ligne 51 à 71 */
// dataPanier.forEach((produit) => afficherTag(produit));

// function avoir() {
//   //Création d'une variabe pour afficher le nombre d'article dans le panier
//   const quantiteProduit = localStorage.length;
//   console.log(quantiteProduit);

//   //création d'une loop pour récupérer les données stocké dans le localStorage
//   for (let i = 0; i < quantiteProduit; i++) {
//     const produit = localStorage.getItem(localStorage.key(i));

//     /*avec JSON parse au lieu d'avoir la liste de produit dans des string, 
//     cela va permetre d'avoir un vrai objet json*/
//     const produitObjet = JSON.parse(produit);
//     console.log(produitObjet);

//     // cette fonction va récolté chaque objet contenu dans produitObjet
//     dataPanier.push(produitObjet);
//   }
// }




// altTxt
// "Photo d'un canapé jaune et noir, quattre places"
// colors
// (2) ['Black/Yellow', 'Black/Red']
// description
// "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus."
// imageUrl
// "http://localhost:3000/images/kanap02.jpeg"
// name
// "Kanap Cyllène"
// price
// 4499
// _id
// "415b7cacb65d43b2b5c1ff70f3393ad1"



// function afficherTag(produit) {
//   const section = document.querySelector("#cart__items");

//   const article = document.createElement("article");
//   article.classList.add("cart__item");
//   article.dataset.id = produit.addId;
//   article.dataset.colors = produit.color;

//   const divImg = document.createElement("div");
//   divImg.classList.add("cart__item__img");
//   const image = document.createElement("img");
//   image.src = produit.imageUrl;

//   const divDescription = document.createElement("div");
//   divDescription.classList.add("cart__item__content");

//   const divContentDes = document.createElement("div");
//   divContentDes.classList.add("cart__item__content__description");

//   const h2Description = document.createElement("h2");

//   const pColor = document.createElement("p");
//   pColor.textContent = produit.color;

//   const p = document.createElement("p");

//   const divSettings = document.createElement("div");
//   divSettings.classList.add("cart__item__content__settings");

//   const divQuantity = document.createElement("div");
//   divQuantity.classList.add("cart__item__content__settngs__quantity");

//   const pQuantity = document.createElement("p");
//   pQuantity.innerText = "Qté : " + produit.quantité + "  ";

//   const inputQuantity = document.createElement("input");
//   inputQuantity.type = "number";
//   inputQuantity.classList.add("itemQuantity");
//   inputQuantity.name = "itempQuantity";
//   inputQuantity.min = "1";
//   inputQuantity.max = "100";
//   inputQuantity.value = produit.quantité;
//   inputQuantity.addEventListener("change", () =>
//     updateArticleQuantity(produit.addId, inputQuantity.value)
//   );




// }





// function updateArticleQuantity(addId, newValue) {
//   const produitData = dataPanier.find((produit) => produit.addId == addId);
//   produitData.quantité = Number(newValue);
//   localStorage.setItem(addId, JSON.stringify(produitData));

//   let refId = produitData.addId;
//   let refColor = produitData.color;
//   let newId = refId.slice(0, 32);

//   const spanPrice = document.querySelector("#totalPrice");
//   const total = dataPrice.reduce((total, price) => total + price, 0);
//   console.log("find data price", total);
//   spanPrice.innerHTML = total;
//   window.location.reload(true);

//   totalArticle();
// }


// function totalArticle() {
//   const spanQuantite = document.querySelector("#totalQuantity");
//   const total = dataPanier.reduce((total, produit) => total + produit.quantité, 0);
//   spanQuantite.innerHTML = total;
// }































// // pour afficher la liste total de chaque produit grace à la fonction push dans la loop for
// let dataPanier = [];
// let dataPrice = [];
// let dataPrice1 = [];

// recapPanier();
// /*Pour chaque élément dans dataPanier, cette boucle va permettre de créer toutes les
// balises et données contenue dans la page cart.html en commentaire ligne 51 à 71 */
// dataPanier.forEach((produit) => afficherTag(produit));

// function recapPanier() {
//   //Création d'une variabe pour afficher le nombre d'article dans le panier
//   const quantiteProduit = localStorage.length;
//   console.log(quantiteProduit);
//   //création d'une loop pour récupérer les données stocké dans le localStorage
//   for (let i = 0; i < quantiteProduit; i++) {
//     const produit = localStorage.getItem(localStorage.key(i));
//     /*avec JSON parse au lieu d'avoir la liste de produit dans des string, 
//     cela va permetre d'avoir un vrai objet json*/
//     const produitObjet = JSON.parse(produit);
//     console.log(produitObjet);
//     // cette fonction va récolté chaque objet contenu dans produitObjet
//     dataPanier.push(produitObjet);
//   }
// }

// //question : selecteur avec #item ou item ou .items

// /* cette fonction afficherTag(produit) permet de générer le code html fournit en commentaire en affichant chaque produit du panier
// qui a été enregistré dans le localStorage, et l'appel API avec fetch va permettre d'authentifier et générer les nom des kanap, leurs images et leurs alt 
// ainsi que le prix unitaire en fonction de chaque produit par rapport à leur ID */

// function afficherTag(produit) {
//   const section = document.querySelector("#cart__items");
//   const article = document.createElement("article");
//   article.classList.add("cart__item");
//   article.dataset.id = produit.addId;
//   article.dataset.colors = produit.color;
//   const divImg = document.createElement("div");
//   divImg.classList.add("cart__item__img");
//   const image = document.createElement("img");
//   image.src = produit.imageUrl;

//   const divDescription = document.createElement("div");
//   divDescription.classList.add("cart__item__content");
//   const divContentDes = document.createElement("div");
//   divContentDes.classList.add("cart__item__content__description");
//   const h2Description = document.createElement("h2");
//   const pColor = document.createElement("p");
//   pColor.textContent = produit.color;
//   const p = document.createElement("p");
//   const divSettings = document.createElement("div");
  
//   divSettings.classList.add("cart__item__content__settings");
//   const divQuantity = document.createElement("div");
//   divQuantity.classList.add("cart__item__content__settngs__quantity");
//   const pQuantity = document.createElement("p");
//   pQuantity.innerText = "Qté : " + produit.quantité + "  ";
//   const inputQuantity = document.createElement("input");
//   inputQuantity.type = "number";
//   inputQuantity.classList.add("itemQuantity");
//   inputQuantity.name = "itempQuantity";
//   inputQuantity.min = "1";
//   inputQuantity.max = "100";
//   inputQuantity.value = produit.quantité;
//   inputQuantity.addEventListener("change", () =>
//     updateArticleQuantity(produit.addId, inputQuantity.value));


//   const divDelete = document.createElement("div");
//   divDelete.classList.add("cart__item__content__setting__delete");
//   const pDelete = document.createElement("p");
//   pDelete.classList.add("deleteItem");
//   pDelete.innerText = "Supprimer";
//   // création des parents pour chaque élément créé
//   section.appendChild(article);
//   article.appendChild(divImg);
//   article.appendChild(divDescription);
//   article.appendChild(divContentDes);
//   article.appendChild(divSettings);
//   divImg.appendChild(image);

//   divDescription.appendChild(divContentDes);
//   divDescription.appendChild(divSettings);
//   divContentDes.appendChild(h2Description);
//   divContentDes.appendChild(pColor);
//   divContentDes.appendChild(p);
//   divSettings.appendChild(pQuantity);
//   divSettings.appendChild(divQuantity);
//   divSettings.appendChild(inputQuantity);
//   divSettings.appendChild(divDelete);
//   divQuantity.appendChild(pQuantity);
//   divQuantity.appendChild(inputQuantity);
//   divDelete.appendChild(pDelete);



//   totalArticle();
//   totalPrice();

//   fetch("http://localhost:3001/api/products/")
//     .then((res) => {
//       return res.json();
//     })

//     .then((kanap) => {
//       data(kanap);
//     });



// // Function qui va permettre de calculer le total d'article dans le panier
// function totalArticle() {
//   const spanQuantite = document.querySelector("#totalQuantity");
//   const total = dataPanier.reduce((total, produit) => total + produit.quantité, 0);
//   spanQuantite.innerHTML = total;
// }

// function totalPrice() {
//   const spanPrice = document.querySelector("#totalPrice");
//   const total = dataPrice.reduce((total, price) => total + price, 0);
//   spanPrice.innerHTML = total;
//   console.log("le prix du panier :", total);
// }

// function updateArticleQuantity(addId, newValue) {
//   const produitData = dataPanier.find((produit) => produit.addId == addId);
//   produitData.quantité = Number(newValue);
//   localStorage.setItem(addId, JSON.stringify(produitData));

//   let refId = produitData.addId;
//   let refColor = produitData.color;
//   let newId = refId.slice(0, 32);
//   const spanPrice = document.querySelector("#totalPrice");
//   const total = dataPrice.reduce((total, price) => total + price, 0);
//   console.log("find data price", total);
//   spanPrice.innerHTML = total;
//   window.location.reload(true);
//   totalArticle();
// }


function deleteProduct() {
    let btn_supprimer = document.querySelectorAll(".deleteItem");

    for (let j = 0; j < btn_supprimer.length; j++){
        btn_supprimer[j].addEventListener("click" , (event) => {
            event.preventDefault();

            //Selection de l'element à supprimer en fonction de son id ET sa couleur
            let idDelete = produitLocalStorage[j].idProduit;
            let colorDelete = produitLocalStorage[j].couleurProduit;

            produitLocalStorage = produitLocalStorage.filter( el => el.idProduit !== idDelete || el.couleurProduit !== colorDelete );
            
            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

            //Alerte produit supprimé et refresh
            alert("Ce produit a bien été supprimé du panier");
            location.reload();
        })
    }
}
deleteProduct();