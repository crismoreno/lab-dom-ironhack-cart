function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
pricePerUnit * input.quantityInput = totalPrice;

totalPrice.createTextNode(totalPrice)

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calculate-price');
  var quantityInput = document.getElementsByClassName('quantity-input');
  var deleteButton = document.getElementsByClassName('btn-delete');
  var totalPrice = document.getElementsByClassName('total-price');
  var pricePerUnit = document.getElementsByClassName('price-per-unit');

  calculatePriceButton.onclick = getTotalPrice;
  quantityInput.onclick = createNewItem;

  for(var i = 0; i<deleteButton.length ; i++){
    deleteButton[i].onclick = deleteItem;
  }
};
