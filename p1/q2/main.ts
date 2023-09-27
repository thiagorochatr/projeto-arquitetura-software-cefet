

import AlunoBD from "./alunoBD";
import AlunoBDAdapter from "./alunoBDAdapter";
import Controller from "./controller";

const alunoBD = new AlunoBD();
const alunoAdapter = new AlunoBDAdapter(alunoBD);

const controller = new Controller(alunoAdapter);

const alunos = controller.buscarAlunos();

alunos.forEach((aluno) => {
  console.log(`Nome: ${aluno.nome}, Email: ${aluno.email}`);
});
