// Mensagem dinâmica no título
const boasVindas = document.getElementById("boas-vindas");
const hora = new Date().getHours();

if (hora < 12) {
  boasVindas.innerHTML = "Bom dia! Sou Gustavo Meireles";
} else if (hora < 18) {
  boasVindas.innerHTML = "Boa tarde! Sou Gustavo Meireles";
} else {
  boasVindas.innerHTML = "Boa noite! Sou Gustavo Meireles";
}

// Alternar modo claro/escuro
const botaoModo = document.getElementById("modo-btn");

botaoModo.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  botaoModo.textContent = document.body.classList.contains("modo-claro")
    ? "Modo Escuro"
    : "Modo Claro";
});

// Copiar email
function copiarEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copiado para a área de transferência!");
  });
}