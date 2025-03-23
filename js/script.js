function renderMenus() { 
  let menuLeft = document.getElementById("menuList"); // rendert das menu
  menuLeft.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    menuLeft.innerHTML += renderMenuTemplate(i); // html wird returnt
  }

  let basket = document.getElementById("basket");
  basket.innerHTML = "";

  if(myBasket.length === 0){
    basket.innerHTML += emptyBasket();
  }else{
  for (let y = 0; y < myBasket.length; y++) {
    basket.innerHTML += renderBasketTemplate(y);
  }
}
}

function renderMenuTemplate(i) { // rendert das linke menu 
  return /*html*/ `
    <div class="dishes"> 
        <div class="dishes-header">
       <p>${myDishes[i].name}</p>
       <img src="/assets/img/Logo/plus.png" alt="Add Product" width100% height="55px">
        </div> 
       <p>${myDishes[i].description}</p>
       <p class="under-text" >${myDishes[i].price}</p>

    </div>
    `;
}
function renderBasketTemplate(y){ // rendert den warenkorb
    return /*html*/`
        <div class="myBasketsDiv">
            <div><p></p></div>
        </div>
    `
    /* <div class="myBasketsDiv" >
            <p>${myBasket[y].name}</p>
        </div> */

}

function emptyBasket(){ // zeigt den leeren Warenkorb an 
    return /*html*/`
        <div class="empty-basket">
        <p>ergregre</p>
        </div>
    `
}