const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1111222223333345",
    email: ["andre@dominio.com", "andre@gmail.com"], //mais de uma propriedade, como 2 emails
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento Realizado! Novo Saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(400);

