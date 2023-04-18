const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

notas.forEach(function(nota, indice) { //o nota é uma geração de lógica interna 
    somaNotas += nota;
    console.log(indice);
});

const media = somaNotas / notas.length;

console.log(`A média das notas é ${media}.`);

//Uma função callback é uma função que é passada dentro dpo parâmetro de outra funçõa, como é o caso do forEach.
//Nesse caso, para cada vez que rodar o forEach, o mesmo executará essa função repetidamente. essa função deve receber o elemento desejado


const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function(nome){
    console.log(nome);
})

nomes.forEach((nome) => {
    console.log(nome);
})

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);