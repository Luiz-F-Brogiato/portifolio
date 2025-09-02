
function envio() {
   const form = document.getElementById("contato-form");
const popup = document.getElementById("popup-sucesso");

form.addEventListener("submit", function(e) {
  e.preventDefault();


  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();


  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);

  form.reset();
});

}