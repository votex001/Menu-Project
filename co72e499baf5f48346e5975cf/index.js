import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { menuData } from './data.js';
const OrderBtn = document.getElementById("order-btn")
const finalPr = document.getElementById('final-price')
const ordersThings = document.getElementById('orders-things')
finalPr.innerHTML = 0

// for adding items to order checking uuid of item
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        orderMath(e.target.dataset.add)
    }
    
})


// final summ of all order
function orderMath(orderId){
    const orderObj = menuData.filter(function(order){
return orderId === order.uuid
    })[0]
    finalPr.innerText= +finalPr.textContent + orderObj.price
    
    ordersThings.innerHTML += `
    <div class="format-order">
    <p id="order-name">${orderObj.name}</p>
    <p id="order-price">${orderObj.price}$</p>
    </div>`



    render()
}



// menu rendering
function getFeedHtml(){
    let feedhtml = ''


    menuData.forEach(function(menu){
        feedhtml += `<div class="menu">
        <div class="menu-inner">
            <img src="${menu.productPic}" class="profile-pic">
                <div class="product-info">
                    <div class="splitter">
                        <div>
                            <h2 class="name">${menu.name}</h2>
                            <p class="ingredients">${menu.ingredients}</p>
                        </div>
                        <div class="add">
                            <p class="plus" data-add="${menu.uuid}">+</p>
                        </div>
                    </div>
                    <div class="product-price">
                        <h5>${menu.price}$</h5>
                        
                    </div>
                    
                </div>
        </div>
    </div>`
    })
    return feedhtml
}
// little render procces
function render(){
document.getElementById("our-menu").innerHTML = getFeedHtml()
}
render()

//if ill click "complete order" button opens window with card info inputs

document.getElementById('order-btn').addEventListener('click',function(){
    if(finalPr.innerHTML != 0){
    document.getElementById('card-input').innerHTML =` 
    <div id="order-details">
    <p id="close-window">X</p>
    <h2 class="card-dialog">Enter card details</h2>
    <input placeholder="Enter your name">
    <input placeholder="Enter card number">
    <input placeholder="Enter CVV">
    </div>`
}
})

// close card info by clicking 'X'

document.addEventListener('click',function(e){
    if(e.target.id === 'close-window'){
        document.getElementById('card-input').innerHTML = ''
    }
})





{/*       <div class="menu">
                    <div class="menu-inner">
                        <img src="photo/humburger.jpg" class="profile-pic">
                            <div class="product-info">
                                <div class="lets">
                                    <div >
                                        <h2 class="name">Humburger</h2>
                                        <p class="ingredients">beef,cheese,lettuce</p>
                                    </div>
                                    <div class="add">
                                        <p class="plus">+</p>
                                    </div>
                                </div>
                                <div class="product-price">
                                    <h5 data-price="43242342356453">4$</h5>
                                    
                                </div>
                                
                            </div>
                    </div>
                </div> */}


            //   <div class="format-order">
            //     <p id="order-name">sfaasf</p>
            //     <p id="order-price">12</p>
            //   </div>
            



        //     <div id="order-details">
        //     <p class="close-window">X</p>
        //     <h2 class="card-dialog">Enter card details</h2>
        //     <input placeholder="Enter your name">
        //     <input placeholder="Enter card number">
        //     <input placeholder="Enter CVV">
        // </div>