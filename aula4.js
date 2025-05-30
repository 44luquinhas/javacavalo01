class Calculadora {
    constructor(nome,resultado) {
        this.nome = nome
    }
    
    somar(a,b) {
    a + b == resultado;
    console.log(`${a} mais ${b} é igual a ${this.resultado}.`);
    }
    
    subtrair(a,b) {
        a - b == resultado;
        console.log(`${a} menos ${b} é igual a ${this.resultado}.`);
        }

    multiplicar(a,b) {
        a * b == resultado;
        console.log(`${a} vezes ${b} é igual a ${this.resultado}.`);
        }    


    dividir(a,b) {
        a / b == resultado;
    if (b != 0) {
        console.log(`${a} dividido por ${b} é igual a ${this.resultado}.`);
    }
    console.log(`Nada pode ser dividido por zero burro.`);
    }
    }    
    
    let pessoa = new Calculadora ("Lorenzao");
    pessoa.multiplicar(10,5);