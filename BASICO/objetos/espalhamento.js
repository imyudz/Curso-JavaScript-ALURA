const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1111222223333345",
    email: ["andre@dominio.com", "andre@gmail.com"], //mais de uma propriedade, como 2 email
};

function mandandoEmail(emailComercial, emailPessoal) {
    console.log("mandando email para " + emailPessoal);
    console.log("mandando email para " + emailComercial);
}

mandandoEmail(...cliente.email);         //<== mesma coisa que mandandoEmail(cliente.email[0], cliente.email[1])