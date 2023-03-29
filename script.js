const form = document.querySelector("form");
const passwordInput = form.querySelector("#password");
const confirmPasswordInput = form.querySelector("#confirm_password");
const errorMsg = form.querySelector('#password + div');

form.addEventListener('submit', showPasswordErrorMsg);
passwordInput.addEventListener('focus', removePasswordErrorMsg);
confirmPasswordInput.addEventListener('focus', removePasswordErrorMsg);

function showPasswordErrorMsg(e){
  if (passwordInput.value === confirmPasswordInput.value){
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    errorMsg.classList.add('hide');
  } else {
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
    errorMsg.classList.remove('hide');
  }

  e.preventDefault();
}

function removePasswordErrorMsg(e){
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    errorMsg.classList.add('hide');
}