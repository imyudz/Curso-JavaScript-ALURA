// Desafio 11: Média com for of
// Calcule a média entre as seguintes notas usando o for of:
// 10 | 6.5 | 8 | 7.5

const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for(let nota of notas){
    somaNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);