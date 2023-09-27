import Departamento from "./departamento";
import Funcionario from "./funcionario";
import Terceirizado from "./terceirizado";

const funcionario1 = new Funcionario("João", 6000);
const funcionario2 = new Funcionario("Maria", 4500);
const funcionario3 = new Funcionario("Julia", 4500);
const terceirizado1 = new Terceirizado("Pedro", 3000);
const terceirizado2 = new Terceirizado("Felipe", 3000);
const terceirizado3 = new Terceirizado("Erick", 3000);

const departamento1 = new Departamento("Departamento de TI");
departamento1.adicionarColaborador(funcionario1);
departamento1.adicionarColaborador(terceirizado1);

const departamento2 = new Departamento("Frontend");
departamento2.adicionarColaborador(terceirizado2);
departamento2.adicionarColaborador(funcionario2);

const departamento3 = new Departamento("Backend");
departamento3.adicionarColaborador(funcionario3);

const departamento4 = new Departamento("QA");
departamento4.adicionarColaborador(terceirizado3);

departamento1.adicionarSubdepartamento(departamento2);
departamento1.adicionarSubdepartamento(departamento3);
departamento3.adicionarSubdepartamento(departamento4);

const custoTotal = departamento1.calcularSalario();
console.log(`Custo total do R$ ${custoTotal.toFixed(2)}`);
departamento1.listarColaboradoresEDepartamentos();