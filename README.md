# 📚 Gestão de Alunos — Trabalho Prático #1

## 👤 Autor
- **Nome:** João Faria  
- **Número:** 31865  

---

## 🎯 Objetivo Geral

Consolidar os conhecimentos em desenvolvimento web com foco na criação, consumo e implementação de APIs RESTful utilizando tecnologias do ecossistema JavaScript:

- Node.js + Express
- MongoDB / MongoDB Atlas
- JSON-Server
- Fetch API
- Swagger (opcional)

O projeto simula o ciclo completo de desenvolvimento de uma aplicação web com front-end e back-end separados, incluindo testes e deploy.

---

## 🌐 Publicação

- 🔗 **Frontend (Vercel):** [https://gestao-alunos-two.vercel.app/](https://gestao-alunos-two.vercel.app/)




## 📁 Estrutura do Projeto

rabalho-api/
├── frontend/ # Interface web (HTML, CSS, JS)
├── backend/ # API RESTful real (Node.js, Express, MongoDB)
├── mock-server/ # API simulada com JSON-Server
├── mock-data/ # Base de dados original (bd.json)
├── tests/ # Coleção Postman para testes
├── README.md # Este ficheiro

⚙️ Como Instalar e Executar

 🔹 Clonar o projeto

git clone https://github.com/jgoncalofaria/gestao-alunos
cd gestao-alunos

🔹 Mock Server (JSON-Server)

cd mock-server
npm install
npm run start
Aceder: http://localhost:3000

Endpoints principais

GET /alunos — lista todos os alunos

GET /alunos/:id — obtém aluno por ID

POST /alunos — adiciona novo aluno

PUT /alunos/:id — atualiza aluno

DELETE /alunos/:id — apaga aluno

GET /cursos — lista todos os cursos

🔹 API Real (Node + Express + MongoDB Atlas)

cd backend
npm install
npm run start
Aceder (local): http://localhost:4000

🔹 Frontend

# Abrir o index.html no browser OU aceder ao deploy
🔗 https://gestao-alunos-two.vercel.app/
