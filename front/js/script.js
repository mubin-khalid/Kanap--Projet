// alert("hello")

//api de chrome mais qu'en est t'il de fixefox ou safari?


fetch("http://localhost:3000/api/products")
    .then((oui) => oui.json())
    .then((data) => {
        return add(data)
    })


function add(donne){
    const id = data[0]._id
    first.text = "description de l'image du kanap"
    const urlfonction = balise(imageUrl)
    const article = fairearticle()
    appendChild(balise)


}
        
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

function balise(url){
    const first = document.createElement("a") //creer du HTML 
    first.href = "./product.html?id=42" //+ id
    first.text = "description de l'image du kanap"
    return urlfonction
}

function appendChild(urlfonction){
    const mapremierimage = document.querySelector("#items")
    if(items != null)
    {
        mapremierimage.appendChild(first)
    }
    first.text = "description de l'image du kanap"
}


function fairearticle(){
    const article = document.createElement("article") //creer du HTML 
    return article

}