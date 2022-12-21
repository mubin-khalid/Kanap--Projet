
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


  let couleur = product.colors;

  /*séléction direct de l'id colors et création de la balise option 
    pour le lié au donné pour afficher plusieurs choix de couleur*/
  const choixCouleur = document.querySelector("#colors");
  if (choixCouleur != null) {
    couleur.forEach((couleur) => {
      const option = document.createElement("option");
      option.value = couleur;
      option.textContent = couleur;
      choixCouleur.appendChild(option);
    });
  
  
  }

  // function makeDescription(description) {
  //   const p = document.querySelector("#description")
  //   if (p != null) p.textContent = description
  // 


  /*
  faire un eventlistener sur le bouton
  au click on recupére couleur et qte
  on verifie couleur existante != "" & que qte entre 1 et 100 inclus
  si tout est bon :
  on verifie si le localstorage n'existe pas, on créer une nouvelle liste ([]) et on y rajoute notre article
  si il existe deja, on cherche dedans si id+color sont identique:
  si on le trouve on incremente (avec test si sa dépasse aps 100)
  sinon on rajoute a la liste
  on met a jour le localstorage
  */

 // addEventListener

 const bouton = document.querySelector("#addToCart");

 const quantite = document.querySelector("#quantity").value;

 if (bouton != null) {
   bouton.addEventListener("click", () => {
     const colors = document.querySelector("#colors").value;
     const quantite = document.querySelector("#quantity").value;

     if (colors == null || quantite <= 0 || quantite > 100 || colors == "") {
       alert("Veuillez choisir une couleur et une quantité maximum de 100 unités pour votre commande, Merci.");
       return bouton;
     }

     let addId = `${id}` +  ":" + quantite + ":" + colors ;
     localStorage.setItem(addId, JSON.stringify(product));
        //redirection vers le pannier
        window.location.href = "cart.html";


     
   });
 }
 //  alert("Votre quantité ajouté est de + " + quantite)




}