const Aluno = require('../models/Aluno');

exports.getAlunos = async (req, res) => {
    const alunos = await Aluno.find();
    res.json(alunos);
};

exports.getAluno = async (req, res) => {
    const aluno = await Aluno.findById(req.params.id);
    res.json(aluno);
};

exports.createAluno = async (req, res) => {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
};

exports.updateAluno = async (req, res) => {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(aluno);
};

exports.deleteAluno = async (req, res) => {
    await Aluno.findByIdAndDelete(req.params.id);
    res.json({ message: 'Aluno apagado' });
};
