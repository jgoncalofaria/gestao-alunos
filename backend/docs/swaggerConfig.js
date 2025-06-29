const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos",
      version: "1.0.0",
      description: "Documentação da API para gestão de alunos e cursos",
    },
    servers: [
      {
        url: "http://localhost:3000", // altere para URL da API real se estiver no Render
      },
    ],
  },
  apis: ["./routes/*.js"], // atualize conforme o local dos seus endpoints
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
