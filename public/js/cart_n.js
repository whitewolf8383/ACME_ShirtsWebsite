// Check if user is logged in
if(!sessionStorage.getItem('sessionKey')) window.open('login.html', '_self');
// Retrieve shopping cart data
let shoppingCart = localStorage.getItem('shoppingCart').split(',');

// Clear HTML text
document.querySelector('#shoppingCart').innerHTML = '';

// Create shopping cart list
let shoppingDiv = document.createElement('div');
document.querySelector('#shoppingCart').appendChild(shoppingDiv);
let counter = shoppingCart.length/6;
let selector = 0;
let cartTotal = 0;

// Cycle through shopping cart array and create HTML elements
for(let i = 0; i < counter; i++){
  selector = i*6;
  let itemDiv = document.createElement('div');
  itemDiv.className = 'itemDiv';

  let gender = document.createElement('p');
  let node1 = document.createTextNode(`Gender Style: ${shoppingCart[selector+1]}`);
  gender.appendChild(node1);

  let shirtStyle = document.createElement('p');
  let node2 = document.createTextNode(`Shirt Style: ${shoppingCart[selector]}`);
  shirtStyle.appendChild(node2);

  let shirtSize = document.createElement('p');
  let node3 = document.createTextNode(`Shirt Size: ${shoppingCart[selector+2]}`);
  shirtSize.appendChild(node3);

  let shirtColor = document.createElement('p');
  let node4 = document.createTextNode(`Shirt Color: ${shoppingCart[selector+3]}`);
  shirtColor.appendChild(node4);

  let shirtPrice = 19.95;
  if(shoppingCart[selector] === 'long-sleeve') shirtPrice = 24.95;

  let quantity = document.createElement('p');
  let node5 = document.createTextNode(`Price: ${shirtPrice} and Quantity: ${shoppingCart[selector+4]}`);

  quantity.appendChild(node5);
  // Calculate totals
  let itemTotal = document.createElement('p');
  let quantityTotal = (parseFloat(shoppingCart[selector+4])*shirtPrice).toFixed(2);
  let node6 = document.createTextNode(`Item Total: ${quantityTotal}`);
  itemTotal.appendChild(node6);
  cartTotal = cartTotal + parseFloat(quantityTotal);

  // Create quantity changer
  let itemModDiv = document.createElement('div');
  itemModDiv.className = 'itemModDiv';
  let node7 = document.createTextNode(`Change quantity or delete.`);
  itemModDiv.appendChild(node7);
  let textBox = document.createElement('input');
  textBox.setAttribute('type', 'number');
  textBox.setAttribute('min', '0');
  itemModDiv.appendChild(textBox);

  // Create change button
  let submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Change Quantity';
  submitBtn.addEventListener('click', () => {
    console.log(shoppingCart[(i*6)+4]);
    if(textBox.value > 0) shoppingCart[(i*6)+4] = textBox.value;
    else shoppingCart.splice(i*6, 6);
    localStorage.setItem('shoppingCart', shoppingCart.toString());
    location.reload();
  })
  submitBtn.style.margin = '0 0 0 10px';
  itemModDiv.appendChild(submitBtn);

  // Create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete All';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.addEventListener('click', () => {
    shoppingCart.splice(i*6, 6);
    localStorage.setItem('shoppingCart', shoppingCart.toString());
    location.reload();
  })
  itemModDiv.appendChild(deleteBtn);

  itemDiv.appendChild(gender);
  itemDiv.appendChild(shirtStyle);
  itemDiv.appendChild(shirtSize);
  itemDiv.appendChild(shirtColor);
  itemDiv.appendChild(quantity);
  itemDiv.appendChild(itemTotal);
  itemDiv.appendChild(itemModDiv);
  shoppingDiv.appendChild(itemDiv);
}

//Delete all items
let deleteBtnAll = document.createElement('button');
deleteBtnAll.innerHTML = 'Delete Shopping Cart';
deleteBtnAll.className = 'deleteBtn';
deleteBtnAll.id = `deleteBtnAll`;
shoppingDiv.appendChild(deleteBtnAll);

document.querySelector(`#deleteBtnAll`).addEventListener('click', () => {
  localStorage.removeItem('shoppingCart');
  shoppingCart = [];
  location.reload();
});

// Display Crt total and checkout button
let priceBlock = document.createElement('h2');
priceBlock.innerHTML = `Cart Total: $${cartTotal.toFixed(2)}`;
priceBlock.style.textAlign = 'center';
let checkoutBtn = document.createElement('button');
checkoutBtn.innerHTML = 'Checkout';
checkoutBtn.style.display = 'block';
checkoutBtn.style.margin = '10px auto';
checkoutBtn.style.padding = '5px';
checkoutBtn.id = 'checkoutBtn';
shoppingDiv.prepend(checkoutBtn);
shoppingDiv.prepend(priceBlock);

document.querySelector('#checkoutBtn').addEventListener('click', () => {
  if(sessionStorage.getItem('sessionKey')) window.open('checkout.html', "_self");
  else window.open('login.html', "_self");
})