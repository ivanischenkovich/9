function registration(event) {
  event.preventDefault();
  var email = document.getElementsByClassName('input-email')[0].value;
  var password = document.getElementsByClassName('input-password')[0].value;
  var passwordCheck = document.getElementsByClassName('input-password-check')[0].value;
  var check = document.getElementsByClassName('checkbox')[0].checked;
  var validateResult = validate(email, password, passwordCheck, check);

  if (validateResult == true) { 
    alert('Регистрация прошла успешно!');
  }
  else {
    alert(validateResult);
  }
}

function validate(email, password, passwordCheck, check) {
  if (!validEmail(email)) {
    return 'Введите корректный email!';
  }

  if (password.length < 6) {
    return 'Длина пароля должна составлять не менее 6 символов';
  }

  if (password !== passwordCheck) {
    return 'Пароли не совпадают!';
  }

  if (!check) {
    return 'Подтвердите согласие с правилами сайта!';
  }

  return true;
}

window.onload = function () {
  document.getElementById('login-page').addEventListener('submit', registration);
}

function validEmail(Email) {
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(Email);
}