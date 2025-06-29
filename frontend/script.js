const API_URL = 'http://localhost:3001/alunos';

const form = document.getElementById('aluno-form');
const lista = document.getElementById('lista-alunos');

// Carregar alunos
async function carregarAlunos() {
  const res = await fetch(API_URL);
  const alunos = await res.json();

  lista.innerHTML = '';
  alunos.forEach(aluno => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${aluno.nome} ${aluno.apelido}</strong><br/>
      Curso: ${aluno.curso} - Ano: ${aluno.anoCurricular}<br/>
      <button data-id="${aluno.id}" class="editar">Editar</button>
      <button data-id="${aluno.id}" class="apagar">Apagar</button>
      <hr/>
    `;
    lista.appendChild(div);
  });

  // Ativar botões com id convertido para número
  document.querySelectorAll('.editar').forEach(btn =>
    btn.addEventListener('click', () => editarAluno(Number(btn.dataset.id)))
  );

  document.querySelectorAll('.apagar').forEach(btn =>
    btn.addEventListener('click', () => apagarAluno(Number(btn.dataset.id)))
  );
}

// Adicionar ou atualizar
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const aluno = {
    nome: form.nome.value,
    apelido: form.apelido.value,
    curso: form.curso.value,
    anoCurricular: parseInt(form.anoCurricular.value)
  };

  const id = document.getElementById('aluno-id').value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    });
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    });
  }

  form.reset();
  carregarAlunos();
});

// Preencher formulário para editar
async function editarAluno(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const aluno = await res.json();

  document.getElementById('aluno-id').value = aluno.id;
  form.nome.value = aluno.nome;
  form.apelido.value = aluno.apelido;
  form.curso.value = aluno.curso;
  form.anoCurricular.value = aluno.anoCurricular;
}

// Apagar aluno
async function apagarAluno(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  carregarAlunos();
}

carregarAlunos();

