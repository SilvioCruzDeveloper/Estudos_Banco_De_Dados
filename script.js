const form = document.getElementById("cadastroForm");
const mensagemDiv = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cargo = document.getElementById("cargo").value;
  const salario = document.getElementById("salario").value;

  fetch("/funcionarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, cargo, salario }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar funcionário");
      }
      return response.json();
    })
    .then((data) => {
      mensagemDiv.innerHTML = "<p>Funcionário cadastrado com sucesso!</p>";
      form.reset();
    })
    .catch((error) => {
      mensagemDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
    });
});
