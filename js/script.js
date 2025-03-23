function renderMenus() { 
  let menuLeft = document.getElementById("menuList"); // rendert das menu
  menuLeft.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    menuLeft.innerHTML += renderMenuTemplate(i); // html wird returnt
  }
  let basket = document.getElementById("basket");
  basket.innerHTML = "";

  if(myBasket.length === 0){
    basket.innerHTML = emptyBasket();
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
       <img onclick="addDishes(${i})" src="/assets/img/Logo/plus.png" alt="Add Product" height="55px">
        </div> 
       <p>${myDishes[i].description}</p>
       <p class="under-text" >${myDishes[i].price}</p>

    </div>
    `;
}
function renderBasketTemplate(y){ // rendert den warenkorb
    return /*html*/`
        <div class="empty-basket">
           <p class="center">Warenkorb</p>
            <div class="split"></div>
            <div class="content">
              <div>
                <p>${myBasket[y].name}</p>
              </div>
            <div>
        </div>
    `
}
function addDishes(i){ // pusht den menu ins basket
    myBasket.push(myDishes[i])
    let basket = document.getElementById("basket");
    basket.innerHTML = "";
    renderMenus();
}
function emptyBasket(){ // zeigt den leeren Warenkorb an 
    return /*html*/`
        <div class="empty-basket">
           <p class="center">Warenkorb</p>
            <div class="split"></div>
            <div class="content">
              <p class="center">Wähle leckere Gerichte aus der Karte und bestelle dein Menu <img src="/assets/img/Logo/empty-basket.png" height="55px" alt="basket"></p>
            <div>
        </div>
    `
}