$(".login-page").submit(function (event) {
  
  event.preventDefault();
  
  var email = $(".input-email").val();
  var password = $(".input-password").val();
  var passwordCheck = $(".input-password-check").val();
  var check = $(".checkbox").prop("checked");
  var validateResult = validate(email, password, passwordCheck, check);

  if (validateResult == true) { 
    alert('Регистрация прошла успешно!');
  } 
  else {
    alert(validateResult);
  }
});

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

function validEmail(Email) {
  var pattern = Email.match(/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i);
  return pattern;
}

$(document).ready = (function () {
  $('.login-page').on('submit', login-page);
});