const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

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
