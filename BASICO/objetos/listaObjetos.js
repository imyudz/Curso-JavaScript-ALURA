const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1111222223333345",
  email: ["andre@dominio.com", "andre@gmail.com"], //mais de uma propriedade, como 2 emails
};

cliente.enderecos = [//Adicionando uma lista
    {
        rua: "AV. Paulista",
        numero: "1112",
        apartamento: true,
        complemento: "ap. 200",
    },
];
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
})

console.log(cliente.enderecos);

//Ganhei os métodos que utilizo com Arrays
const listaApenasAP = cliente.enderecos.filter(endereco => {
    return endereco.apartamento === true;
})

console.log(listaApenasAP);