import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.addEventListener('click', async () => {
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php');
    const dadosCarregados = await resposta.json();
    // console.log(dadosCarregados);
    let mensagens = dadosCarregados.instrucoes;

    for (let mensagem of mensagens) {
        adicionarCartao(mensagem.conteudo, mensagem.cor);
    }
});