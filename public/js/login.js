
document.querySelector('.submit').addEventListener('click', () => {
  if ((document.querySelector('#username').value.length < 3) || 
  (document.querySelector('#password').value.length < 8)){
    const notice = document.createElement('p');
    const node = document.createTextNode('Username requires a minimum of 3 characters. Password requires a minimum of 8 characters');
    document.querySelector('form').appendChild(notice).appendChild(node);
  }
  else{
    localStorage.setItem('userName',document.querySelector('#username').value);
    localStorage.setItem('password',document.querySelector('#password').value);
    sessionStorage.setItem('sessionKey',document.querySelector('#username').value 
    + document.querySelector('#password').value.substr(1,5));
    window.open('profile.html', "_self");
  }
})