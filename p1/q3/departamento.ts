import Colaborador from "./iColaborador";

export default class Departamento implements Colaborador {
  private colaboradores: Colaborador[] = [];
  private subdepartamentos: Departamento[] = [];

  constructor(public nome: string) {}

  adicionarColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
  }

  adicionarSubdepartamento(subdepartamento: Departamento): void {
      this.subdepartamentos.push(subdepartamento);
  }

  calcularSalario(): number {
      let custoTotal = 0;
      for (const colaborador of this.colaboradores) {
          custoTotal += colaborador.calcularSalario();
      }
      return custoTotal;
  }

  listarColaboradoresEDepartamentos(): void {
      console.log(`Colaboradores e subdepartamentos de ${this.nome}:`);
      for (const colaborador of this.colaboradores) {
        console.log(`- Colaborador: ${colaborador.nome}`);
      }
      for (const subdepartamento of this.subdepartamentos) {
        console.log(`--- Subdepartamento: ${subdepartamento.nome}`);
      }
      console.log("");
      for (const subdepartamento of this.subdepartamentos) {
        subdepartamento.listarColaboradoresEDepartamentos();
      }
  }
}