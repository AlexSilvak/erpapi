class Pessoa {
    nome: string;
    idade: number;
  
    constructor(nome: string) {
      this.nome = nome; // idade não é inicializada
      this.idade=33
    }
  
    dizerIdade() {
      console.log(this.idade); // Isso causará um erro se strictPropertyInitialization estiver ativado
    }
  }
  