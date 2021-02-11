let db;
const subscribers = [];

const requestDb = indexedDB.open('db_ceep_backup', 1);
requestDb.addEventListener('success', () => {
    db = requestDb.result;
    carregarCartoes();
});

requestDb.addEventListener('upgradeneeded', () => {
    db = requestDb.result;
    db.createObjectStore('store_cartoes', { keyPath: 'id', autoIncrement: true });
});

function carregarCartoes()
{
    const tx = db.transaction('store_cartoes');
    const request = tx.objectStore('store_cartoes').getAll();

    request.onsuccess = () => {
        const listaCartoes = request.result ?? [];
        subscribers.forEach(funcaoCallback => {
            funcaoCallback(listaCartoes);
        });
    }
}

/**
 * Realiza a inscrição de funções callback (subscribers) que precisam ser executadas quando a lista de cartões
 * locais estiver carregada e disponível para uso
 * @param {Function} funcaoCallback Função callback a ser executada quando os dados estiverem disponíveis
 * @returns {void}
 */
export function IDBSubscribeOnLoadCartoes(funcaoCallback)
{
    subscribers.push(funcaoCallback);
}

/**
 * Função que salva localmente (no navegador) os cartões criados pelo usuário
 * @param {Array} listaDeCartoes Lista de Cartões a serem salvos na base de dados local
 * @returns {Promise<string>}
 */
export function salvarCartoesStore(listaDeCartoes)
{
    return new Promise(function(resolve, reject) {
        const tx = db.transaction('store_cartoes', 'readwrite');
        tx.objectStore('store_cartoes').clear();

        for (let cartao of listaDeCartoes)
        {
            tx.objectStore('store_cartoes').add(cartao);
        }

        tx.oncomplete = () => resolve('Cartões salvos com sucesso na base de dados local!');
        tx.onerror = () => reject('Erro ao salvar dados na base de dados local!');
    });
}