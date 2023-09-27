import Colaborador from "./iColaborador";

export default class Funcionario implements Colaborador {
  constructor(public nome: string, private salario: number) {}

  calcularSalario(): number {
      if (this.salario >= 5000) {
          return this.salario * 0.75; // Imposto de 25%
      } else {
          return this.salario * 0.85; // Imposto de 15%
      }
  }
}