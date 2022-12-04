
  //refaire la meme chose que dans l'étape 1 seulement ici on se trouve sur la page produit.
  //ilfaut mettre l'image, et le prix tout simleemnt
  //Les endroits manquant sont commenter ne html produits


const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");
//console.log(id);
//var idProduct = url.searchParams.get("id");

function makeDescription(description) {
  const p = document.querySelector("#description")
  if (p != null) p.textContent = description
}

fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((ans) => {
    // console.log("les Kanap",res)
    return infoprod(ans);
  })
  .catch((error) => {
    console.log("Erreur");
});


  //refaire la mm


  function infoprod(product){
    //creation d'un produit
    //ne marche sans le point dans un query selector
    const item__img = document.querySelector(".item__img");
    const picture = document.createElement("img");
    item__img.appendChild(picture);
    //scr est un string  et un selecteur selonla librairie 
    picture.src = product.imageUrl;
    picture.alt = product.altTxt;
    const title = document.querySelector("#title");
    title.textContent = product.name;
    const prix = document.querySelector("#price");
    prix.textContent = product.price;
  const description = document.querySelector("#description");
  description.textContent = product.description;



   // item.querySelector("#colors").insertAdjacentHTML("beforeend", product.colors.map(color => `<option value="${color}">${color}</option>`).join());
  // makeDescription(product)
  // makeDescription(description)
  
  
  }

  // function makeDescription(description) {
  //   const p = document.querySelector("#description")
  //   if (p != null) p.textContent = description
  // }