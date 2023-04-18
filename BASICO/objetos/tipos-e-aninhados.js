const cliente = {
  nome: "André",
  idade: 32,
  cpf: "1111222223333345",
   email: ["andre@dominio.com", "andre@gmail.com"] //mais de uma propriedade, como 2 emails
  
};

cliente.enderecos = { //Adicionando um objeto para uma propriedade
  rua: "AV. Paulista",
  numero: "1112",
  apartamento: true,
  complemento: "ap. 200",
}

console.log(cliente.endereco);

console.log(cliente.email[1]); //acessando um array como qualquer outro
