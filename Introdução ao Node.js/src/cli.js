import pegaArquivo from './index.js';
import chalk from 'chalk';
import fs from "fs";
import listaValidada from './http-validacao.js';

const argumentos = process.argv;

async function processaTexto (argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log(chalk.red.bold.italic.underline.bgYellowBright("Arquivo ou diretório não existente"));
        }
        return;
    }

    if (fs.lstatSync(caminho).isFile()) {
        const lista = await pegaArquivo(caminho);
        imprimeLista(valida, lista);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (arquivo) => { 
            const lista = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeLista(valida, lista, arquivo);
        });
    }
}


async function imprimeLista (valida, lista, arquivo = '') {
    if (valida){
        console.log(chalk.cyanBright(` lista validada `),
        chalk.black.bgCyan(arquivo),
        await listaValidada(lista));
    } else {
        console.log(chalk.cyanBright(` lista validada `),
        chalk.black.bgCyan(arquivo),
        lista);
    }
}


processaTexto(argumentos);