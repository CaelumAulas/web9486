import { salvarCartoes } from "../server/sync.js";
import { getCartoes } from "./mural.js";
import { notificar } from "./notificacao.js";

const btnSync = document.querySelector('#btnSync');
btnSync.addEventListener('click', async function() {
    btnSync.disabled = true;
    btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');

    const listaDeCartoes = getCartoes();
    let mensagem = await salvarCartoes(listaDeCartoes);
    notificar(mensagem);

    btnSync.disabled = false;
    btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
});

