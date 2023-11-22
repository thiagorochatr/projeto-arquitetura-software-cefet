abstract class Conexao {
  constructor(public stringConexao: string) {}

  public abstract conectar(): void;
}

class ConexaoMysql extends Conexao {
  public conectar(): void {
    console.log(
      `${this.stringConexao} conectado ao MySQL`
    );
  }
}

class ConexaoOracle extends Conexao {
  public conectar(): void {
    console.log(
      `${this.stringConexao} conectado ao Oracle`
    );
  }
}

class FactoryConexao {
  getConexao(stringConexao: string) {
    if (stringConexao == "MySQL") {
      return new ConexaoMysql(stringConexao);
    } else if (stringConexao == "Oracle") {
      return new ConexaoOracle(stringConexao);
    } else {
      throw console.error("String de conexão inválida");
    }
  }
}

const factory = new FactoryConexao();

const mysql = factory.getConexao("MySQL");
mysql.conectar();

const oracle = factory.getConexao("Oracle");
oracle.conectar();

const teste = factory.getConexao("teste");
teste.conectar();