const livros = require("./listaLivros");

function insertionSort(lista) {
    for (atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise-1].preco){
            let itemAnterior = lista[analise - 1];
            let itemAnalise = lista[analise];
        
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            analise--;
        }
    }
    console.log(lista);
}

insertionSort(livros);