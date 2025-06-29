require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const alunoRoutes = require('./routes/aluno.routes');

// 🚨 IMPORTAÇÕES DO SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swaggerConfig');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// 🧭 ROTA DE DOCUMENTAÇÃO SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use('/alunos', alunoRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar no MongoDB:', error);
  });
