//jeito diferente de acessar, útil quando não se sabe as informações que estão dentro do objeto

const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1111222223333345",
    email: "andre@dominio.com",
};

console.log(cliente["nome"]); //acessando uma propriedade
console.log(cliente["idade"]); //acessando uma propriedade
console.log(cliente["cpf"]); //acessando uma propriedade
console.log(cliente["email"]); //acessando uma propriedade

//exemplo: recebi uma lista que dita as propriedades de dentro de um objeto(sem saber, é inacessável com o nomeObjeto.atributo)
//O códugo seria o seguinte:

const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach(chave => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});