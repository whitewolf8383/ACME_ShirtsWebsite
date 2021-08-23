// Check if user is logged in
if(!sessionStorage.getItem('sessionKey')) window.open('login.html', '_self');

// Check inputs
document.querySelector('.submit').addEventListener('click', () => {
  // Check firstName
  let numCheck = /\d/g;
  let firstName = document.querySelector('#firstName').value;
  let lastName = document.querySelector('#lastName').value;
  let address = document.querySelector('#address').value;
  let city = document.querySelector('#city').value;
  let state = document.querySelector('#state').value;
  let zipCode = document.querySelector('#zipCode').value;
  let phone = document.querySelector('#phone').value;
  let creditCard = document.querySelector('#creditCard').value;
  let cardExpire = document.querySelector('#cardExpire').value;
  let cardSecurity = document.querySelector('#cardSecurity').value;
  let valid = true;

  // Check if inputs are empty
  if (firstName.length <= 0 || lastName.length <= 0 || address.length <= 0 || city.length <= 0
    || state.length <= 0 || zipCode.length <= 0 || phone.length <= 0 || creditCard.length <= 0
    || cardExpire.length <= 0 || cardSecurity.length <= 0){
      let emptyNotice = document.createElement('p');
      let node1 = document.createTextNode('All input boxes require an input.');
      emptyNotice.style.textAlign = 'center';
      emptyNotice.appendChild(node1);
      document.querySelector('#registerForm').appendChild(emptyNotice);
      valid = false;
  };
  // Check if values contain a number
  if (/\d/.test(firstName) || /\d/.test(lastName) || /\d/.test(city) || /\d/.test(state)){
    let numberNotice = document.createElement('p');
    let node2 = document.createTextNode('First name, last names, city and state can not contain numbers.');
    numberNotice.style.textAlign = 'center';
    numberNotice.appendChild(node2);
    document.querySelector('#registerForm').appendChild(numberNotice);
    valid = false;
  };
  // Check if zipCode contains correct number of digits
  if (zipCode.length !== 5){
    let zipCodeNotice = document.createElement('p');
    let node3 = document.createTextNode('The zipCode can only be 5 digits long');
    zipCodeNotice.style.textAlign = 'center';
    zipCodeNotice.appendChild(node3);
    document.querySelector('#registerForm').appendChild(zipCodeNotice);
    valid = false;
  }
  // Check is phoneNumber contains correct number of digits
  if (phone.length !== 10){
    let phoneNotice = document.createElement('p');
    let node4 = document.createTextNode('Phone number must be 10 digitis "9701234567".');
    phoneNotice.style.textAlign = 'center';
    phoneNotice.appendChild(node4);
    document.querySelector('#registerForm').appendChild(phoneNotice);
    valid = false;
  }
  // Check if inputs contain letters
  if (!(/^-?\d+$/.test(zipCode)) || !(/^-?\d+$/.test(phone)) || !(/^-?\d+$/.test(creditCard)) 
  || !(/^-?\d+$/.test(cardSecurity))){
    let letterNotice = document.createElement('p');
    let node5 = document.createTextNode(`Zipcode, phonenumber, credit card, and security code
    can only contain numbers.`);
    letterNotice.style.textAlign = 'center';
    letterNotice.appendChild(node5);
    document.querySelector('#registerForm').appendChild(letterNotice);
    valid = false;
  }
  // Check if credit card number contains 16 digits
  if (creditCard.length !== 16){
    let creditCardNotice = document.createElement('p');
    let node6 = document.createTextNode('Credit card number must contain 16 digits.');
    creditCardNotice.style.textAlign = 'center';
    creditCardNotice.appendChild(node6);
    document.querySelector('#registerForm').appendChild(creditCardNotice);
    valid = false;
  }
  // Check credit card expiration
  if (!(/^\d{2}[./-]\d{2}[./-]\d{4}$/.test(cardExpire))) {
    let cardExpireNotice = document.createElement('p');
    let node7 = document.createTextNode('Expiration date must be in MM/DD/YYYY format.');
    cardExpireNotice.style.textAlign = 'center';
    cardExpireNotice.appendChild(node7);
    document.querySelector('#registerForm').appendChild(cardExpireNotice);
    valid = false;
  }
  // Check Security Code
  if (cardSecurity.length !== 3){
    let cardSecurityNotice = document.createElement('p');
    let node8 = document.createTextNode('Card security code must be 3 digits.');
    cardSecurityNotice.style.textAlign = 'center';
    cardSecurityNotice.appendChild(node8);
    document.querySelector('#registerForm').appendChild(cardSecurityNotice);
    valid = false;
  }
  // If valid remains true, move to thankyou page.
  if (valid){
    window.open('thanks.html', "_self");
  };
});
