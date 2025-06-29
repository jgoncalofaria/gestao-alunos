const express = require('express');
const router = express.Router();
const controller = require('../controllers/aluno.controller');

router.get('/', controller.getAlunos);
router.get('/:id', controller.getAluno);
router.post('/', controller.createAluno);
router.put('/:id', controller.updateAluno);
router.delete('/:id', controller.deleteAluno);

module.exports = router;
