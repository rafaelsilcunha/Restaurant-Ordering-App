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
                    <button class="add-btn" data-id = ${id}>+</button>
                </div>
            </div>`
    }).join("")
}

renderMenu()

const selectedItems = []

function renderOrder() {
    checkoutSection.innerHTML = `
        <div class="checkout-Section">
            <p>Your Order</p>

        </div>
    `
}

const addBtn = document.getElementsByClassName("add-btn")
addBtn.addEventListener("click", function(event){
    console.log(event.target.dataset.id)
    menuArray.forEach(function(food){
        if (event.target.dataset.id == food.id){
            selectedItems.push(food.name)
            console.log(selectedItems)
        }
    })
})


