require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar requisições JSON
app.use(express.json());

// Configurações da conexão com o banco de dados
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    // Configurações SSL para conexão segura
    ca: process.env.DB_SSL_CA,
    cert: process.env.DB_SSL_CERT,
    key: process.env.DB_SSL_KEY,
  },
};

// Conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

// Rota para cadastrar um funcionário
app.post("/funcionarios", (req, res) => {
  const { nome, cargo, salario } = req.body;

  const INSERT_FUNCIONARIO_QUERY = `
    INSERT INTO funcionarios (nome, cargo, salario)
    VALUES (?, ?, ?)
  `;

  connection.query(
    INSERT_FUNCIONARIO_QUERY,
    [nome, cargo, salario],
    (err, result) => {
      if (err) {
        console.error("Erro ao cadastrar funcionário:", err);
        res.status(500).send("Erro ao cadastrar funcionário");
        return;
      }

      console.log("Funcionário cadastrado com sucesso!");
      res.status(201).send("Funcionário cadastrado com sucesso");
    }
  );
});

// Encerrar a conexão com o banco de dados quando o aplicativo for encerrado
process.on("SIGINT", () => {
  connection.end();
  console.log("Conexão com o MySQL encerrada.");
  process.exit(0);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
