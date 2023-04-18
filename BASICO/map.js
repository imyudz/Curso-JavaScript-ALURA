const notas =  [10, 9.5, 8, 7, 6];

const notasAtualizadas =  notas.map((nota)=>{
    return nota + 1 >= 10  ? 10 : nota + 1;
});

console.log(notasAtualizadas);


//O map é muito usado quando quero reescrever um array de alguma forma

const nomesDespadronizados = ["ana Julia", "Caio ViNicIus", "BIA RODRIGES"];



//Para diminuir a quantidade de linhas, usando o map:   
const nomesPadrao = nomesDespadronizados.map((nome) => nome.toUpperCase());

console.log(nomesPadrao);

