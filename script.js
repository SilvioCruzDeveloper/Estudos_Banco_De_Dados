function cadastrarFuncionario() {
  var form = document.getElementById("formFuncionario");
  var resultado = document.getElementById("resultado");

  var data = new FormData(form);

  fetch("cadastro.php", {
    method: "POST",
    body: data,
  })
    .then((response) => response.text())
    .then((data) => {
      resultado.innerHTML = data;
      form.reset();
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
