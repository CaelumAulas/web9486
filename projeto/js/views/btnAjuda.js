import { getInstrucoes } from "../server/sync.js";
import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.addEventListener('click', async () => {
    let mensagens = await getInstrucoes();

    for (let mensagem of mensagens) {
        adicionarCartao(mensagem.conteudo, mensagem.cor);
    }
});