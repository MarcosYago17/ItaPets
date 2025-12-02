function validarFormulario(event) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome == "" || nome == null) {
    alert("Por favor, preencha o campo Nome!");
    return false;
  }

  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Por favor, digite um endereço de e-mail válido!");
    return false;
  }

  alert("Formulário enviado com sucesso! Entraremos em contato.");
  return true;
}

function destacarCampo(elemento) {
  elemento.style.backgroundColor = "#e8f0fe";
  elemento.style.border = "2px solid #3498db";
}

function restaurarCampo(elemento) {
  elemento.style.backgroundColor = "white";
  elemento.style.border = "1px solid #ccc";
}

function mostrarMensagemBoasVindas() {
  const hora = new Date().getHours();
  let saudacao;

  if (hora < 12) {
    saudacao = "Bom dia";
  } else if (hora < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  alert(saudacao + "! Bem-vindo à ItaPets. Confira nossas promoções!");
}
