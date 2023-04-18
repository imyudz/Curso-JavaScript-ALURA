//DESAFIO 1:
//Um professor publicou, por engano, apenas 3 das 4 notas de um aluno.
//Adicione a nota e calcule a média

const notas = [10, 6, 8];

notas.push(7); //adiciona coisas dentro de um array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);


//DESAFIO 2:
//Um professor publicou, por engano, 5 notas de um aluno.
//Remova a última nota e faça o calculo da média correta

const notas2 = [10, 6, 4, 8, 10];

notas2.pop();

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

console.log(`A média é: ${media2}`);
//*************************************************************************** */

//Desafio 3: Sala dividida
//Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const sala1 = alunos.slice(0, alunos.length/2); //corto do indice 0 ao indice 9 (o slice pega um numero a menos do q vc escreveru no segundo parâmetro)
const sala2 = alunos.slice(10)
console.log(sala1, sala2);

//******************************************************************************************************* */
// Desafio 5: Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.


const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2);
nomes.push("Rodrigo");

console.log(nomes);



//Desafio 6: Juntando as salas
// Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista que exiba o nome de todas as pessoas.

// Em resumo, temos duas listas e precisamos juntá-las.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];


const salas = salaJS.concat(salaPython);
console.log(salas);


// Desafio 7: Lista com 2 dimensões
// Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9
// Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.


const alunos2 = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listadeAlunosEMedias = [alunos, medias];

console.log(listadeAlunosEMedias);

console.log(`a aluna da posição 1 da listas de alunos e médias é :${listadeAlunosEMedias[0][1]} e a nota dessa aluna é: ${listadeAlunosEMedias[1][1]}`);


// Desafio 8: Procurando na lista
// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

const alunos3 = ["João", "Juliana", "Ana", "Caio"];
const medias2 = [10, 8, 7.5, 9];

function exibeNomeNota(aluno){

    if (listadeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listadeAlunosEMedias[0];
        // const medias = listadeAlunosEMedias[1];

        const [alunos, medias] = listadeAlunosEMedias
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`O ${aluno} está cadastrado!, tem a média ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado");
    }
}
exibeNomeNota("Ana");

