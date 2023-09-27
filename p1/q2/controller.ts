import Aluno from "./iAluno";
import AlunoTXT from "./iAlunoTXT";

export default class Controller {
  constructor(private alunoTxt: AlunoTXT) {}

  buscarAlunos(): Aluno[] {
    return this.alunoTxt.buscarAlunos();
  }
}