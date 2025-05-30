class Produto{

    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

MostrarDados(){
    console.log(`O produto ${this.nome}, está com o preço de ${this.preco} e temos ${this.quantidade} no estoque.`);
}

Vender(qtd){
    if(qtd <= this.quantidade){
        this.quantidade -= qtd;
        console.log(`Venda foi realizada, a quantidadematual ${this.quantidade}.`);
    }else{
        console.log("Estoque insuficiente para a venda.");
    }

}

Repor(qtd){
    this.quantidade += qtd;
    console.log(`Reposição bem sucessida, quantidade atual: ${this.quantidade}`);
}
}


let caderno = new Produto ("caderno",30.00,40);
let estojo = new Produto ("estojo",13.00,50);
