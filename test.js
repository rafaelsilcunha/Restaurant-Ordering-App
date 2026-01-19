`<div class="chosen-item">
            <p>${name}<button class="remove-btn">remove</button></p>
            <p>$${price}</p>
        </div>
`

 orderList.innerHTML += `
        <div class="chosen-item">
            <p>${item.name}<button class="remove-btn" data-remove = "${item.id}">remove</button></p>
            <p>$${item.price}</p>
        </div>
    `