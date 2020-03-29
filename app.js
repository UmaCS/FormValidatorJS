const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');

// const subButton = document.getElementById('submit');

// const inputObj = {
//   username: username,
//   email: email,
//   password: password,
//   confirmPass: confirmPass
// }

// ********** Main eventListener ***********

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
}
// subButton.addEventListener('click', e => {
//   e.preventDefault();
//   for(let input in inputObj){
//     if(inputObj[input].value === ''){
//       return inputObj[input].classList.add('inValidInput');
//     }
//     else if(inputObj[input].value.length > 0){
//       return inputObj[input].classList.add('validInput');
//     }
//   }
//
// });
