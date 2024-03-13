<!DOCTYPE html>
<html>
<head>
    <title>Cadastro de Funcionários</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Cadastro de Funcionários</h2>
        <form method="post" action="cadastro.php">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>

            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" name="cargo" required><br><br>

            <button type="submit">Cadastrar</button>
        </form>
        <p id="resultado"></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
