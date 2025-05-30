class Carro {
    constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
    }
    
    acelerar(valor) {
    this.velocidadeAtual += valor;
    console.log(`${this.modelo} acelerou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }
    
    frear(valor) {
    this.velocidadeAtual -= valor;
    if (this.velocidadeAtual < 0) {
    this.velocidadeAtual = 0;
    }
    console.log(`${this.modelo} freou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }
    
    mostrarStatus() {
    console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Velocidade: ${this.velocidadeAtual} km/h`);
    }
    }
    
    // Teste
    let carro = new Carro("Civic", "Preto");
    carro.mostrarStatus();
    carro.acelerar(50);
    carro.frear(20);