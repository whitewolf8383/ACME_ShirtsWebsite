// Get JSON data and store in local storage
fetch(`http://localhost:3000/api/products`, {
  method: 'GET',
  headers: {
    'accept': "*/*"
  },
})
.then(response => response.json())
.then(data => {
  localStorage.setItem('products.gender', data.gender);
  localStorage.setItem('products.size', data.size);
  localStorage.setItem('products.colors', data.colors);
})
.catch(error => {
  console.error('An issue occured during the get products process.', error);
});
// Clear previous text
document.querySelector('#short-sleeve').innerHTML = '';
document.querySelector('#long-sleeve').innerHTML = '';

// Create shopping cart array
let shoppingCart = "";
if (!localStorage.getItem('shoppingCart')) {
  localStorage.setItem('shoppingCart', shoppingCart);
} else {
  shoppingCart = localStorage.getItem('shoppingCart');
};

// Creates event listener for short sleeve add button and stores current selection
document.querySelector('#short-submit').addEventListener('click', () => {
  let gender = document.querySelector('#short-gender').value;
  let size = document.querySelector('#short-size').value;
  let color = document.querySelector('#short-color').value;
  let quantity = document.querySelector('#short-quantity').value;
  let total = 19.95 * (document.querySelector('#short-quantity').value);
  let shoppingCartItem = `short-sleeve, ${gender}, ${size}, ${color}, ${quantity}, ${total}`;
  let tempString = '';
  if(shoppingCart.length <= 0) tempString = shoppingCartItem;
  else tempString = shoppingCart.concat(',', shoppingCartItem);
  shoppingCart = tempString;
  localStorage.setItem('shoppingCart', shoppingCart);
  alert(`You have added ${document.querySelector('#short-quantity').value} short-sleeve shirts to your shopping cart.`)
});

// Creates event listener for long sleeve add button and stores current selection
document.querySelector('#long-submit').addEventListener('click', () => {
  let gender = document.querySelector('#long-gender').value;
  let size = document.querySelector('#long-size').value;
  let color = document.querySelector('#long-color').value;
  let quantity = document.querySelector('#long-quantity').value;
  let total = 24.95 * (document.querySelector('#long-quantity').value);
  let shoppingCartItem = `long-sleeve, ${gender}, ${size}, ${color}, ${quantity}, ${total}`;
  let tempString = '';
  if(shoppingCart.length <= 0) tempString = shoppingCartItem;
  else tempString = shoppingCart.concat(',', shoppingCartItem);
  shoppingCart = tempString;
  localStorage.setItem('shoppingCart', shoppingCart);
  alert(`You have added ${document.querySelector('#long-quantity').value} long-sleeve shirts to your shopping cart.`)
});

// Create event listener for shopping cart button and checks login status
document.querySelector('#viewCartbtn').addEventListener('click', () => {
  if(sessionStorage.getItem('sessionKey')) window.open('cart.html', "_self");
  else window.open('login.html', "_self");
});