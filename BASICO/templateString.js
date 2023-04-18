const nome = "Ju";
const idade = 40;
const cidadeNascimento = "São Paulo"

//Com String normal
//const apresentacao = "Meu nome é "+ nome+", tenho "+ idade+" anos e nasci na cidade de "+ cidade

//Com Template String:
const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao);