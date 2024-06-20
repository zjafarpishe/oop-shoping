import ShowProduct from "./ShowProduct.js"
import { GetData } from "./utils/HTTPReq.js"
import Cart from "./Cart.js"


async function load(){

    const data=await GetData()
    const parentcard=document.getElementById("section")
    const cartList=document.querySelector(".cartList")
    const totalPrice=document.querySelector(".price").querySelector("span")

    const cart=new Cart(cartList,totalPrice)
    const productsCard=new ShowProduct(parentcard,data,cart)

}


document.addEventListener("DOMContentLoaded",load)