import chalk from "chalk";

function extraiLinks (arrLinks) {
    return arrLinks.map(link => {
        return Object.values(link).join();
    });
}

async function checaStatus (listaStrURLs) {
    const arrStatus = await Promise
    .all(
        listaStrURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejaErros(erro);
            }
            
        })
    )
    return arrStatus;
}


function manejaErros(erro){
    if (erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    } else {
        return 'Ocorreu algum erro desconhecido ou não tratado';
    }
}


export default async function listaValidada (listaLinks) {
    const links = extraiLinks(listaLinks);
    const status = await checaStatus(links);

    return listaLinks.map((link, index) => {
        return ({
            ...link,
            status: status[index],
        })
    });
}