function renderMenus() {
  let menuLeft = document.getElementById("menuList");
  menuLeft.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    menuLeft.innerHTML += renderMenuTemplate(i);
  }
  let basket = document.getElementById("rightPart");
  basket.innerHTML = "";

  for (let y = 0; y < myBasket.length; y++) {
    basket.innerHTML += renderBasketTemplate(y);
  }
}

function renderMenuTemplate(i) {
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
function renderBasketTemplate(y){
    return /*html*/`
        <p>Wadflkmwfklwnfljwfnlfwf</p>
    `
}