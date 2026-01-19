import { menuArray } from "./data.js";
const menuItems = document.querySelector(".menu-items")
const orderList = document.querySelector(".order-list")
const checkoutContainer = document.querySelector(".checkout-container")
const totalPrice = document.querySelector("#total-price-value")


// function to render the available menu. iterates over menuArray and 
// uses object deconstruction to have those properties available to us.
// avoids using item.name, item.ingredients and so on...


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

// function to render the order to the order list. clears HTML to allow remove to work
// we iterate over the selected order array now since we push every selected item to it.


function renderOrder(foodId) {
    const item = selectedOrder.find(function(food) {
        return food.id === Number(foodId)
    })
    orderList.innerHTML = ""
    orderList.innerHTML = selectedOrder.map(({name, price}) => {
        return `<div class="chosen-item">
            <p>${name}<button class="remove-btn" data-remove = "${item.id}">remove</button></p>
            <p>$${price}</p>
        </div>
    `
}).join("")
    totalPrice.innerHTML = selectedOrder.reduce(function(total, food){
        return total + food.price
    }, 0) 

}

//above we used the .reduce() method to go over the selectedOrder array and 
//access the .price property and add them all together.
//since we also call renderOrder in the removeItem, the price adjusts automatically.

//similar function to render order but it finds the index of the item we clicked
//it then splices (removes) the item with that specific index from the array
//it renders the order again.

function removeItem(foodId){
    const targetIndex = selectedOrder.findIndex(function(food){
        return food.id === Number(foodId)
    })
    const item = selectedOrder.find(function(food) {
        return food.id === Number(foodId)
    })
    selectedOrder.splice(targetIndex, 1)
    renderOrder(foodId)
    console.log(selectedOrder)

}

const removeBtn = document.getElementsByClassName("remove-btn")
const addBtn = document.getElementsByClassName("add-btn")


// gets the food object and pushes it to selectedOrder


function getFoodObj (foodId){
    const targetObj = menuArray.find(function(food){
        return food.id === Number(foodId)
    })
    selectedOrder.push(targetObj)
    renderOrder(foodId)
    console.log(selectedOrder)
}

//an event listener that checks if the event we are clicking on has a dataset of id
//if yes it runs the getFoodObj and passes through its id
//it then runs renderOrder with the id passed through
//the functions are set up so that they always check if the food.id property 
//is equal to the id thats being passed which is the id of the item we clicked.
//it also changes the display css property to flex or none depending on
//the length of the selectedOrder array.

document.addEventListener("click", function(e){
    if(e.target.dataset.id){
        getFoodObj(e.target.dataset.id)
        checkoutContainer.style.display = "flex"
   }
   if(e.target.dataset.remove){
    removeItem(e.target.dataset.remove)
        if (selectedOrder.length === 0){
            checkoutContainer.style.display = "none"
        }
   }
})




