const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

const validarNome = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

const enviarForm = (evento) => {
  evento.preventDefault();

  localStorage.setItem("Jogador", input.value);
  window.location = 'game.html';
};

input.addEventListener("input", validarNome);
form.addEventListener("submit", enviarForm);