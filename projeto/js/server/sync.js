import usuarioLogado from "../storage/loginUsuario.js";

/**
 * Retorna a lista de instruções de ajuda da API do CEEP
 * @returns {Promise<Array>}
 */
export async function getInstrucoes()
{
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php');
    const dadosCarregados = await resposta.json();
    return dadosCarregados.instrucoes;
}

/**
 * Função que salva os cartões presentes no mural no back-end via API
 * @param {Array} listaDeCartoes Array de Cartões a serem salvos no back-end
 * @returns {Promise<string>}
 */
export async function salvarCartoes(listaDeCartoes)
{
    const infoUsuario = {
        usuario: usuarioLogado,
        cartoes: listaDeCartoes
    }

    let url = "http://wd47-ceep.herokuapp.com/salvar-cartoes.php";
    const respostaServidor = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(infoUsuario)
    });

    const statusServidor = await respostaServidor.json();
    // console.log(statusServidor);

    if (statusServidor.quantidade == 1) {
        return 'Cartão salvo com sucesso!';
    }
    else {
        return statusServidor.quantidade + ' cartões salvos com sucesso!';
    }
}

/**
 * Retorna a lista de cartões salvos no back-end
 * @returns {Promise<Array>}
 */
export async function getCartoesSalvos()
{
    let usuario = usuarioLogado;
    let url = "http://wd47-ceep.herokuapp.com/get-cartoes.php?usuario=" + usuario;

    const resposta = await fetch(url);
    const dadosCartoes = await resposta.json();

    return dadosCartoes.cartoes ?? [];
}