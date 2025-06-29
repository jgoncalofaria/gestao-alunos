const express = require('express');
const router = express.Router();
const controller = require('../controllers/aluno.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         nome:
 *           type: string
 *         apelido:
 *           type: string
 *         curso:
 *           type: string
 *         anoCurricular:
 *           type: integer
 *       example:
 *         _id: "665f1a123abc456def789012"
 *         nome: "João"
 *         apelido: "Silva"
 *         curso: "Engenharia Informática"
 *         anoCurricular: 2
 *
 *     AlunoInput:
 *       type: object
 *       required:
 *         - nome
 *         - apelido
 *         - curso
 *         - anoCurricular
 *       properties:
 *         nome:
 *           type: string
 *         apelido:
 *           type: string
 *         curso:
 *           type: string
 *         anoCurricular:
 *           type: integer
 *       example:
 *         nome: "Joana"
 *         apelido: "Santos"
 *         curso: "Design"
 *         anoCurricular: 1
 */

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Operações relacionadas aos alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Retorna a lista de alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 */
router.get('/', controller.getAlunos);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Retorna um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Detalhes do aluno
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       404:
 *         description: Aluno não encontrado
 */
router.get('/:id', controller.getAluno);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoInput'
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post('/', controller.createAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AlunoInput'
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
router.put('/:id', controller.updateAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Remove um aluno pelo ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno
 *     responses:
 *       204:
 *         description: Aluno removido com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
router.delete('/:id', controller.deleteAluno);

module.exports = router;
