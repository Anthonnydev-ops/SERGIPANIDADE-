//VARIÁVEIS 
const email = document.getElementById("EmailInput");
const senha = document.getElementById("SenhaInput");

//TESTE DE DADOS MOCKADOS
const USER_MOCK  = "teste@email.com";
const SENHA_MOCK = "123456";

//FUNÇÃO QUE MOSTRAR O FUNCIONAMENTO DA IDEIA
function fazerLogin()  {
  if (email.value === USER_MOCK && senha.value === SENHA_MOCK) {
    window.location.href = "home.html"
  } else{
     alert("Email ou senha incorretos!!");
  }
}
