/* JavaScript para o site ItaPets
  Baseado na Aula 08 - JavaScript
*/

// --- FUNÇÕES ORIGINAIS (JavaScript Puro) ---

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

// --- NOVA FUNCIONALIDADE: SMOOTH SCROLL (Usando jQuery) ---
// Isso atende ao requisito de "usar componentes de bibliotecas JS"

$(document).ready(function(){
  // Seleciona qualquer link dentro da classe .sidebar
  $(".sidebar a").on('click', function(event) {

    // Verifica se o link tem um valor de hash (ex: #racoes)
    if (this.hash !== "") {
      // Impede o comportamento padrão do clique (o "pulo" imediato)
      event.preventDefault();

      // Guarda o hash numa variável
      var hash = this.hash;

      // Usa o método animate() do jQuery para fazer a rolagem suave
      // 800 é o tempo em milissegundos (0.8 segundos)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Adiciona o hash (#) na URL quando a rolagem terminar
        window.location.hash = hash;
      });
    } // Fim do if
  });
});