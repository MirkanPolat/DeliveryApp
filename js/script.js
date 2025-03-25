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

function renderBasket(){
  let basket = document.getElementById("basket");
  basket.innerHTML = "";

  if(name.length === 0){
    basket.innerHTML = emptyBasket();
  }else{
  for (let y = 0; y < name.length; y++) {
    basket.innerHTML += renderBasketTemplate(y);
  }
  let delivery = document.getElementById("delivery-info");
  delivery.innerHTML = renderDeliveryInfos();
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
    <p>${name[y]}</p>
    <div class="amounts">
      <p onclick="deleteOneMore(${y})">-</p>
      <p>${amount[y]}</p>
      <p onclick="addOneMore(${y})">+</p>
      <p>${(price[y] * amount[y]).toFixed(2)} €</p>
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

  if(amount[y] > 1)
    amount[y] --;
  else{
    amount.splice(y,1);
    price.splice(y,1);
    name.splice(y,1);

  }

  renderBasket();
}
function addOneMore(y){ // + amount
    amount[y]++;
    renderBasket();
}

function calcDeliveryInfos(y){
  let deliveryCost = 5.00;
  let totalCost = deliveryCost + price

  for (let x = 0; x < price.length; x++) {
    
    
  }
}

function renderDeliveryInfos(){ // In the building 
return /*html*/`
    <table>
      <tr>
        <td>Zwischensumme:</td>    
        <td></td>
      </tr>
      <tr>
        <td>lieferkosten:</td>
        <td> €</td>
      </tr>
      <tr>
       <td><b>Gesamt</b></td>
       <td><b></b></td>
      </tr>
    </table>
`
}

function getMenuIndex(i){
  return name.indexOf(myDishes[i].name);
}

function addDishes(i){ // pusht den menu ins basket
  let indexes = getMenuIndex(i);
 
  if(amount[indexes] > 0){
    amount[indexes]++
  }else
    {
      name.push(myDishes[i].name),
      price.push(myDishes[i].price),
      amount.push(myDishes[i].amount)
    };
    
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