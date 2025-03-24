function renderAll(){
  renderMenus();
  renderBasket();
}
function renderMenus() { 
  let menuLeft = document.getElementById("menuList"); // rendert das menu
  menuLeft.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    menuLeft.innerHTML += renderMenuTemplate(i); // html wird returnt
  }
}

function renderBasket(y){
  let basket = document.getElementById("basket");
  basket.innerHTML = "";

  if(myBasket.length === 0){
    basket.innerHTML = emptyBasket();
  }else{
  for (let y = 0; y < myBasket.length; y++) {
    basket.innerHTML += renderBasketTemplate(y);
  }
  let delivery = document.getElementById("delivery-info");
  delivery.innerHTML = renderDeliveryInfos(y);
}
}

function renderMenuTemplate(i) { // rendert das linke menu 
  return /*html*/ `
    <div class="dishes"> 
        <div class="dishes-header">
       <p>${myDishes[i].name}</p>
       <img onclick="addDishes(${i})" src="assets/img/Logo/plus.png" alt="Add Product" height="55px">
        </div> 
       <p>${myDishes[i].description}</p>
       <p class="under-text" >${myDishes[i].price.toFixed(2)} €</p>
    </div>
    `;
}

function renderBasketTemplate(y){ // rendert den warenkorb
    return /*html*/`
  <div class="content">
    <p>${myBasket[y].name}</p>
    <div class="amounts">
      <p onclick="deleteOneMore(${y})" >-</p>
      <p>${myBasket[y].amount}</p>
      <p onclick="addOneMore(${y})">+</p>
      <p>${(myBasket[y].price * myBasket[y].amount).toFixed(2)} €</p>
      <img onclick="deleteEVerything(${y})" src="assets/img/Logo/trash.png" alt="trash" height="35px"/>
    </div>
  </div>
</div>
    `
}

function deleteEVerything(y){ // deleteAll
  myBasket.splice(y,1)
  renderBasket();
}

function deleteOneMore(y){ // - delete one dish

  if(myBasket[y].amount > 1)
    myBasket[y].amount --;
  else{
    myBasket.splice(y,1);
  }

  renderBasket();
}
function addOneMore(y){ // + amount
    myBasket[y].amount++;
    renderBasket();
}

function calcDeliveryInfos(y){
  let deliveryCost = 5.00;
  let totalCost = deliveryCost + myBasket[y].price

  for (let c = 0; c < array.length; c++) {
    const element = array[c];
    
  }

}

function renderDeliveryInfos(y){ // In the building män tranqilo
return /*html*/`
    <table>
      <tr>
        <td>Zwischensumme:</td>    
        <td>${myBasket[y].price}</td>
      </tr>
      <tr>
        <td>lieferkosten:</td>
        <td> ${deliveryCost.toFixed(2)} €</td>
      </tr>
      <tr>
       <td><b>Gesamt</b></td>
       <td><b>${totalCost}</b></td>
      </tr>
    </table>
`
}

function addDishes(i){ // pusht den menu ins basket
  if(myBasket[i]){
    myBasket[i].amount++
  }else
    myBasket.push({
      name: myDishes[i].name,
      price: myDishes[i].price,
      amount: myDishes[i].amount
    });
    
    let basket = document.getElementById("basket");
    basket.innerHTML = "";
    renderBasket();
}

function emptyBasket(){ // zeigt den leeren Warenkorb an 
    return /*html*/`
        <div>
            <div class="split"></div>
            <div class="content">
              <p class="center">Wähle leckere Gerichte aus der Karte und bestelle dein Menu <img src="assets/img/Logo/empty-basket.png" height="55px" alt="basket"></p>
            <div>
        </div>
    `
    
}