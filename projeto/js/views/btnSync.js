import { salvarCartoes } from "../server/sync.js";
import { excluirCartoesStore, salvarCartoesStore } from "../storage/db.js";
import { getCartoes } from "./mural.js";
import { notificar } from "./notificacao.js";

const btnSync = document.querySelector('#btnSync');
btnSync.addEventListener('click', async function() {
    btnSync.disabled = true;
    btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
    let mensagem = '';
    const listaDeCartoes = getCartoes();

    try 
    {
        // tenta salvar os cartões no servidor primeiro
        mensagem = await salvarCartoes(listaDeCartoes);
        await excluirCartoesStore();
    }
    catch(e) 
    {
        // se não rolou no servidor, salva localmente no navegador
        mensagem = await salvarCartoesStore(listaDeCartoes);
    }

    notificar(mensagem);

    btnSync.disabled = false;
    btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
});

export function sincronizar()
{
    if (confirm('Gostaria de carregar os dados do servidor?')) {
        window.location.reload();
    }
    else if (confirm('Gostaria de salvar a versão atual do mural?')) {
        btnSync.click();
    }
}
