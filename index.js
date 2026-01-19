import { menuArray } from "./data.js";
const menuItems = document.querySelector(".menu-items")
const checkoutSection = document.querySelector(".checkout-Section")



function renderMenu(){
    menuItems.innerHTML = menuArray.map(({name, ingredients, id, price, emoji, image}) => {
    return `<div class="item-container">
                <div> 
                    <img src="${image}" class="item-img">
                </div>
                <div class="item-description-container">
                    <p class="item-title">${name}</p>
                    <p class="item-description">${ingredients.join(", ")} </p>
                    <p class="item-price">$${price}</p>
                </div>
                <div class= "add-btn-div">
                    <button class="add-btn" data-id = "${id}">+</button>
                </div>
            </div>`
    }).join("")
}

renderMenu()

const selectedOrder = []

function renderOrder() {
    checkoutSection.innerHTML = `
        <div class="food-order-item">
            <p>Your Order</p>

        </div>
    `
}

const addBtn = document.getElementsByClassName("add-btn")

function getFoodObj (foodId){
    const targetObj = menuArray.find(function(food){
        return food.id === Number(foodId)
    })
    selectedOrder.push(targetObj)
    console.log(selectedOrder)
}

document.addEventListener("click", function(e){
    if(e.target.dataset.id){
        getFoodObj(e.target.dataset.id)
    }
})


