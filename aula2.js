class ContaBancaria{

    constructor(titular,saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

MostrarDados(){
    console.log(`O ${this.titular} tem ${this.saldo} na conta.`);
}

Sacar(qtd){
    if(qtd <= this.saldo){
        this.saldo -= qtd;
        console.log(`O saque foi bem sucessido, seu saldo atual é ${this.saldo}.`);
    }else{
        console.log("Você não tem essa quantidade no saldo");
    }

}

Depositar(qtd){
    this.saldo += qtd;
    console.log(`Reposição bem sucessida, quantidade atual: ${this.saldo}`);
}
}


let Lucaco = new ContaBancaria ("Lucas",2000000);
let Jão = new ContaBancaria ("João",300.00);

Jão.Sacar(3000);