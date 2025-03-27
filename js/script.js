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
  let basket = document.getElementById("basket")
  basket.innerHTML = "";
  if(name.length === 0){
    basket.innerHTML = emptyBasket();
  }else{
  for (let y = 0; y < name.length; y++) {
    basket.innerHTML += renderBasketTemplate(y);
  }
}
}

function deleteEVerything(y){ // deleteAll
  amount.splice(y,1);
  price.splice(y,1);
  name.splice(y,1);
  renderBasket();
  calcDeliveryInfos();
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
  calcDeliveryInfos();
  renderDeliveryInfosTemplate();
}

function addOneMore(y){ // + amount
    amount[y]++;
    renderBasket();
    calcDeliveryInfos();
}

function calcDeliveryInfos(){
  let delivery = document.getElementById("delivery-info");
  let subTotal = 0;
  for (let x = 0; x < price.length; x++) {
    subTotal += price[x]*amount[x]
  }
  let deliveryCost = 5.00;
  let totalCost = subTotal + deliveryCost;
  if(price.length == 0){
    delivery.innerHTML = "";
    calcButton(0);
  }else{
  delivery.innerHTML = renderDeliveryInfosTemplate(totalCost,deliveryCost,subTotal);
  calcButton(totalCost);
  renderDeliveryInfosTemplate();
  }
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
    calcDeliveryInfos();
}
function stopWindow(event) {
  event.stopPropagation();
}

function calcButton(totalCost){
  document.getElementById("overlayOnMenu").innerHTML = 
  `Bestellen: ${totalCost.toFixed(2)} €`;
}
