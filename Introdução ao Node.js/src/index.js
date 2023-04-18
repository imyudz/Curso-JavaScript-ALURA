import chalk from "chalk";
import fs from "fs";

function extraiLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }));
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

//async await
export default async function pegaArquivo(caminhoArquivo) {
    try {
        const text = await fs.promises.readFile(caminhoArquivo, "UTF-8");
        return extraiLinks(text);
    } catch (error) {
        trataErro(error);
    }
}

//promises com .then()

// function pegaArquivo(caminhoArquivo) {
//     fs.promises.readFile(caminhoArquivo, 'UTF-8')
//         .then(texto => {
//             console.log(chalk.green(texto));
//         })
//         .catch(trataErro)
// }
