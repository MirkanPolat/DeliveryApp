function renderMenuTemplate(i) { // rendert das linke menu
  return /*html*/ `
<div class="dishes">
  <div class="dishes-header">
    <p>${myDishes[i].name}</p>
    <img class="cursor"
      onclick="addDishes(${i})"
      src="assets/img/Logo/plus.png"
      alt="Add Product"
      height="55px">
  </div>
  <p>${myDishes[i].description}</p>
  <p class="under-text">${myDishes[i].price.toFixed(2)} €</p>
</div>
`;
}

function renderBasketTemplate(y){ // rendert den warenkorb
  return /*html*/ `
<div class="content">
  <p>${name[y]}</p>
  <div class="amounts">
    <p class="cursor" onclick="deleteOneMore(${y})">-</p>
    <p>${amount[y]}</p>
    <p class="cursor" onclick="addOneMore(${y})">+</p>
    <p>${(price[y].toFixed(2) * amount[y]).toFixed(2)} €</p>
    <img onclick="deleteEVerything(${y})"
      src="assets/img/Logo/trash.png"
      alt="trash"
      height="35px">
  </div>
</div>
    `;
}

function renderDeliveryInfosTemplate(totalCost,deliveryCost,subTotal){ // In the building 
    return /*html*/`
<table>
  <tr>
    <td>Zwischensumme:</td>
    <td>${subTotal.toFixed(2)} €</td>
  </tr>
  <tr>
    <td>lieferkosten:</td>
    <td>${deliveryCost.toFixed(2)} €</td>
  </tr>
  <tr>
    <td><b>Gesamt</b></td>
    <td><b>${totalCost.toFixed(2)} €</b></td>
  </tr>
</table>
<button onclick="openOverlay()" class="btn">
  Bestellen TOTAL: ${totalCost.toFixed(2)}
</button>
    `
}

function openOverlay(y){
    document.getElementById("overlay").classList.toggle("d-none")
    deleteEVerything(y);
    finishedBlock();
}

function finishedBlock(){
document.getElementById("overlay").innerHTML = 
/*html*/`
<div onclick="stopWindow(event)" class="job-done">
  <button onclick="openOverlay()" class="btn">Close me</button>
  <p class="center">
    Vielen Dank , ihre Bestellung wird in Ca. 40min. eintreffen.
  </p>
</div>
    `
}

function openOverlayOnMenu(){
    document.getElementById("overlayMenu").classList.toggle("d-none");
    document.getElementById("toggle-rightPart").classList.toggle("hidden");
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