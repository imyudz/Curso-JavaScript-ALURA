//MANEIRA 2 DE CRIAR UM CÓDIGO ASSÍNCRONO (modern JS)
async function buscaEndereco(cep) {
    let elementosCEP = pegaElementoHTML();
    elementosCEP.mensagemErro.innerHTML = "<p></p>";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //faz o link ou requisição HTTP
        let cepConvertido = await consultaCEP.json();
        if (cepConvertido.erro) {
            throw Error("CEP não existente");
        }
        
        retornaValoresHTML(elementosCEP, cepConvertido);
    } catch (error) {
        elementosCEP.mensagemErro.innerHTML = `<p>CEP Inválido, tente novamente!</p>`;
        elementosCEP.formulario.reset();
        console.log(error);
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))



function pegaElementoHTML() {
    let elementos = {
        formulario: document.getElementById("formulario"),
        mensagemErro: document.getElementById("erro"),
        cidade: document.getElementById("cidade"),
        logradouro: document.getElementById("endereco"),
        estado: document.getElementById("estado"),
        bairro: document.getElementById("bairro"),
    };
    return elementos;
}

function retornaValoresHTML(elementosCEP, cepConvertido) {
    elementosCEP.cidade.value = cepConvertido.localidade;
    elementosCEP.logradouro.value = cepConvertido.logradouro;
    elementosCEP.bairro.value = cepConvertido.bairro;
    elementosCEP.estado.value = cepConvertido.uf;
}















//MANEIRA 1 DE CRIAR UM CÓDIGO ASSÍNCRONO
//
// let consultaCEP = fetch('https://viacep.com.br/ws/08310170/json/')//faz o link ou requisição HTTP
//     .then(resposta => resposta.json()) //Acontece depois do fetch --> then são funções de callback
//     .then(r => { //Assim que acontecer a conversão para JSON irá retornar a resposta
//         if (r.erro) {
//             throw Error('Esse cep não existe!') //caso cep não existir interrom e pula para o .catch()
//         } else {
//             console.log(r); //Se  tudo ocorrer bem, mostra a resposta
//         }
//     })
//     .catch(error => console.log(error)) //método que é iniciado ao ocorrer qualquer erro
//     .finally(mensagem => console.log("Processo Concluido"))//"Finalmente" faz algo após todo o processo, indepentemente se deu certo ou não


// console.log(consultaCEP);