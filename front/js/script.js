// alert("hello")

//api de chrome mais qu'en est t'il de fixefox ou safari?


fetch("http://localhost:3000/api/products")
    .then((oui) => oui.json())
    .then((data) => data.console.log())


const  first = document.createElement("Monpremierelement")
// first.href = "http://localhost:3000/api/product"
first.href ="http://localhost:3000/images/kanap02.jpeg"

first.text = "description de l'image"


const mapremierimage = document.querySelector("#jay")
