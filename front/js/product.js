
  //refaire la meme chose que dans l'étape 1 seulement ici on se trouve sur la page produit.
  //ilfaut mettre l'image, et le prix tout simleemnt
  //Les endroits manquant sont commenter ne html produits


const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");
console.log(id);




fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((ans) => {
    // console.log("les Kanap",res)
    return infoprod(ans);
  });


  //refaire la me


  function infoprod(product){
    //creation d'un produit
    //ne marche sans le point dans un query selector

    const item__img = document.querySelector(".item__img");
    const picture = document.createElement("img");
    item__img.appendChild(picture);
       
    //scr est un string  et un selecteur selonla librairie 
    picture.src = product.imageUrl;
    picture.alt = product.altTxt;
    


  }
