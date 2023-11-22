class Personagem {
  roupa: string;
  acessorioCabeca: string;
  acessorioCorpo: string;
  acessorioPes: string;

  constructor() {
    this.roupa = 'Roupa Básica';
    this.acessorioCabeca = '';
    this.acessorioCorpo = '';
    this.acessorioPes = '';
  }

  mostrarPersonagem(): void {
    console.log(`
      Personagem:
      Roupa: ${this.roupa}
      Acessório de Cabeça: ${this.acessorioCabeca}
      Acessório de Corpo: ${this.acessorioCorpo}
      Acessório de Pés: ${this.acessorioPes}
    `);
  }
}

interface Builder {
  adicionarAcessorioCabeca(x: string): void;
  adicionarAcessorioCorpo(x: string): void;
  adicionarAcessorioPes(x: string): void;
}

class ConstrutorPersonagem implements Builder {
  personagem: Personagem;

  constructor() {
    this.personagem = new Personagem();
  }

  adicionarAcessorioCabeca(x: string): void {
    this.personagem.acessorioCabeca = x;
  }

  adicionarAcessorioCorpo(x: string): void {
    this.personagem.acessorioCorpo = x;
  }

  adicionarAcessorioPes(x: string): void {
    this.personagem.acessorioPes = x;
  }

  getPersonagem(): Personagem {
    return this.personagem;
  }
}

class Diretor {
  construirPersonagem(builder: Builder): void {
    builder.adicionarAcessorioCabeca('');
    builder.adicionarAcessorioCorpo('');
    builder.adicionarAcessorioPes('');
  }
}

const builder = new ConstrutorPersonagem();
const director = new Diretor();

director.construirPersonagem(builder);

builder.adicionarAcessorioCabeca("Capacete de Ouro")
builder.adicionarAcessorioCorpo("Colete de Couro")
builder.adicionarAcessorioPes("Bota")

const personagemPersonalizado = builder.getPersonagem();
personagemPersonalizado.mostrarPersonagem();
