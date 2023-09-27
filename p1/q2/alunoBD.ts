import Aluno from "./iAluno";

export default class AlunoBD {
  buscarAlunos(): Aluno[] {
    return [
      { nome: "João", email: "joao@example.com" },
      { nome: "Maria", email: "maria@example.com" },
    ];
  }
}