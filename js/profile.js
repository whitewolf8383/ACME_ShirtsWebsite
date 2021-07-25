let screenName;
let backgroundColor;
let buttonColor; 
if (localStorage.getItem('screenName')) {
  screenName = localStorage.getItem('screenName');
}
else {
  screenName = "User";
}
document.querySelector('.instruction').innerHTML = `Welcome ${screenName}`;
if (localStorage.getItem('backgroundColor')) {
  backgroundColor = localStorage.getItem('backgroundColor');
  changeBackgroundColor(backgroundColor);
}
if (localStorage.getItem('backgroundColor')) {
  buttonColor = localStorage.getItem('buttonColor');
  changeButtonColor(buttonColor);
}

// Update Screen Name and Colors
document.querySelector('.submit').addEventListener('click', () => {
  if (document.querySelector('#screenName').value.length > 2){
    screenName = document.querySelector('#screenName').value;
    localStorage.setItem('screenName', document.querySelector('#screenName').value);
    document.querySelector('.instruction').innerHTML = `Welcome ${screenName}`;
  }

  localStorage.setItem('backgroundColor', document.querySelector('#backgroundColor').value);
  backgroundColor = document.querySelector('#backgroundColor').value;
  localStorage.setItem('buttonColor', document.querySelector('#buttonColors').value);
  buttonColor = document.querySelector('#buttonColors').value;
  
  changeBackgroundColor(backgroundColor);
  changeButtonColor(buttonColor);
})

// Change Background Color
function changeBackgroundColor(backgroundColor) {
  if (backgroundColor === 'white'){
    document.querySelector('#formBox').style.backgroundColor = '#FAEBD7';
  }
  else if (backgroundColor === 'blue'){
    document.querySelector('#formBox').style.backgroundColor = '#0066ff';
  }
  else if (backgroundColor === 'red'){
    document.querySelector('#formBox').style.backgroundColor = '#ff0000';
  }
  else {
    document.querySelector('#formBox').style.backgroundColor = '#1a1a1a';
  }
}

// Change Button Color
function changeButtonColor(buttonColor) {
  if (buttonColor === 'white'){
    document.querySelector('.submit').style.backgroundColor = '#e6e6e6';
  }
  else if (buttonColor === 'lightBlue'){
    document.querySelector('.submit').style.backgroundColor = '#99c2ff';
  }
  else if (buttonColor === 'darkRed'){
    document.querySelector('.submit').style.backgroundColor = '#990000';
  }
  else {
    document.querySelector('.submit').style.backgroundColor = '#999999';
  }
}