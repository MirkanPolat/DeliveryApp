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

function renderBasketTemplate(y) { // rendert den warenkorb
  return /*html*/ `
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
    `;
}

function renderDeliveryInfosTemplate(totalCost,deliveryCost,subTotal){ // In the building 
    return /*html*/`
        <table>
          <tr>
            <td>Zwischensumme:</td>    
            <td>${subTotal} €</td>
          </tr>
          <tr>
            <td>lieferkosten:</td>
            <td> ${deliveryCost} €</td>
          </tr>
          <tr>
           <td><b>Gesamt</b></td>
           <td><b>${totalCost} €</b></td>
          </tr>
        </table>
    
        <button onclick="openOverlay()" class="btn"> Bestellung Aufgeben TOTAL: ${totalCost}</button>
    `
    }

function openOverlay(){
    document.getElementById("overlay").classList.toggle("d-none")
    finishedBlock();
}

function finishedBlock(){
    document.getElementById("overlay").innerHTML = 
 /*html*/`
   <div onclick="stopWindow(event)" class="job-done">
    <button onclick="openOverlay()" class="btn">Close me</button>
    <p class="center">Vielen Dank ,
        ihre Bestellung wird in Ca. 40min. eintreffen.
    </p>

   </div>
    `
}

function stopWindow(event) {
    event.stopPropagation();
  }