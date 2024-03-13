<?php
$mysqli = mysqli_init();
$mysqli->ssl_set(NULL, NULL, "/etc/ssl/certs/ca-certificates.crt", NULL, NULL);
$mysqli->real_connect($_ENV["DB_HOST"], $_ENV["DB_USERNAME"], $_ENV["DB_PASSWORD"], $_ENV["DB_NAME"]);

if ($mysqli->connect_error) {
    die("Erro na conexão: " . $mysqli->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$cargo = $_POST['cargo'];

$sql = "INSERT INTO funcionarios (nome, email, cargo) VALUES ('$nome', '$email', '$cargo')";

if ($mysqli->query($sql) === TRUE) {
    echo "Funcionário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar o funcionário: " . $mysqli->error;
}

$mysqli->close();
?>