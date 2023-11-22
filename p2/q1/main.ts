// Interface para a conexão
interface Conexao {
  conectar(): void;
}

// Conexao.ts
class ConexaoReal implements Conexao {
  constructor(public tipoconexao: string) {}

  conectar(): void {
    console.log(`Conectado ao banco de dados do tipo ${this.tipoconexao}`);
  }
}

// FlyweightFactory.ts
class ConexaoFactory {
  public conexoes: { [key: string]: Conexao } = {};

  getConexao(tipoconexao: string): Conexao {
    if (!this.conexoes[tipoconexao]) {
      this.conexoes[tipoconexao] = new ConexaoReal(tipoconexao);
    }
    return this.conexoes[tipoconexao];
  }

  listarConexoes(): void {
    console.log("Lista de Conexões:");
    Object.keys(this.conexoes).forEach((tipoconexao) => {
      console.log(`- ${tipoconexao}`);
    });
  }
}

// main.ts
const conexaoFactory = new ConexaoFactory();

const conexaoOracle = conexaoFactory.getConexao("Oracle");
const conexaoMySQL = conexaoFactory.getConexao("MySQL");
const conexaoSQLServer = conexaoFactory.getConexao("SQLServer");

conexaoFactory.listarConexoes();

conexaoOracle.conectar();
conexaoMySQL.conectar();
conexaoSQLServer.conectar();