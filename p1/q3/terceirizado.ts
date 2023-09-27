import Colaborador from "./iColaborador";

export default class Terceirizado implements Colaborador {
  constructor(public nome: string, private salario: number) {}

  calcularSalario(): number {
      return this.salario * 0.89; // Imposto de 11%
  }
}