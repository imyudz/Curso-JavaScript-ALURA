const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1111222223333345",
  email: ["andre@dominio.com", "andre@gmail.com"], //mais de uma propriedade, como 2 emails
};

cliente.enderecos = [
  //Adicionando uma lista
    {
        rua: "AV. Paulista",
        numero: "1112",
        apartamento: true,
        complemento: "ap. 200",
    },
];

for (const chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};

// retornar um array com todas as chaves do objeto:
const chavesObjeto = Object.keys(cliente);

console.log(chavesObjeto);

console.log(chavesObjeto);

if (!chavesObjeto.includes("endereco")) {
    console.log("É necessário ter um endereço");
}

