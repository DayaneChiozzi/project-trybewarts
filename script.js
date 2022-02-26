const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn1');

function checkInfo() {
  if (
    userEmail.value === 'tryber@teste.com'
    && userPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submitBtn.addEventListener('click', checkInfo);

const checkbox = document.getElementById('agreement');
const submitBtn2 = document.getElementById('submit-btn');

function checkAgreement() {
  if (checkbox.checked === true) {
    submitBtn2.disabled = false;
  } else {
    submitBtn2.disabled = true;
  }
}

checkbox.addEventListener('click', checkAgreement);
