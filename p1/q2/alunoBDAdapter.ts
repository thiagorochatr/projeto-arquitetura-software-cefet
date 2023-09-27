import AlunoBD from "./alunoBD";
import Aluno from "./iAluno";
import AlunoTXT from "./iAlunoTXT";

export default class AlunoBDAdapter implements AlunoTXT {
  constructor(private alunoBD: AlunoBD) {}

  buscarAlunos(): Aluno[] {
    return this.alunoBD.buscarAlunos();
  }
}