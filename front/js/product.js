/*Utilisation de window location search pour obtenir l'url appartir de ?id et suppresion des
3 première caractère avec slice pour avoir uniquement le numéro de l'id pour faire des appel API avec 
fletch sur la page produit*/

const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");
console.log(id);


fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    // console.log("les Kanap",res)
    return pageProduit(res);
  });
