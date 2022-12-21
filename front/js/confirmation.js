let product;

const queryString = window.location.search



const url = new URLSearchParams(queryString)
const orderid = url.get("orderId")
console.log("orderId")


