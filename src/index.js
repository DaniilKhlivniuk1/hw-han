import listProduct from "./templates/products.hbs"
import dataProduct from "./data/menu.json"

const products = dataProduct.products
// console.log(dataProduct.products)
const loyaut = listProduct({products})

document.querySelector(".menu").innerHTML = loyaut
console.log(loyaut)