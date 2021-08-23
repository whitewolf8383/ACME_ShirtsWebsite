document.querySelector('.submit').addEventListener('click', () => {
  // Removing any excess shopping cart data
  localStorage.removeItem('shoppingCart');
  // Removes session key
  sessionStorage.removeItem('sessionKey');
  // Returns to main page
  window.open('index.html', "_self");
})