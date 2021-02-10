import { getCartoesSalvos } from "../server/sync.js";

const mural = document.querySelector('.mural');
const template = document.querySelector('#template-cartao');
let numeroCartao = 0;

// carrega os cartões salvos e exibe no mural
getCartoesSalvos().then(listaDeCartoesServidor => {
    listaDeCartoesServidor.forEach(cartao => {
        adicionarCartao(cartao.conteudo, cartao.cor);
    });
});

export function adicionarCartao(conteudo, cor = '')
{
    numeroCartao++;
    const cartao = template.content.firstElementChild.cloneNode(true);
    cartao.style.backgroundColor = cor;
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    mural.append(cartao);
}

export function getCartoes()
{
    const cartoes = mural.querySelectorAll('.cartao');
    const listaDeCartoes = Array.from(cartoes).map(cartao => {
        return {
            conteudo: cartao.querySelector('.cartao-conteudo').textContent.trim(),
            cor: cartao.style.backgroundColor
        }
    });

    return listaDeCartoes;
}

export function toggleLayout() {
    mural.classList.toggle('mural--linha');
}

// Exclusão do cartão
mural.addEventListener('click', function(event) {
    let isBotaoExcluir = event.target.classList.contains('opcoesDoCartao-remove');
    if (isBotaoExcluir) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--some');
        cartao.ontransitionend = () => cartao.remove();
    }
});

// Mudança de cor do cartão
mural.addEventListener('change', function(event) {
    let isRadio = event.target.type == 'radio';
    if (isRadio) {
        let cor = event.target.value;
        const cartao = event.target.closest('.cartao');
        cartao.style.backgroundColor = cor;
    }
});

// Mudança de cor do cartão via teclado
mural.addEventListener('keypress', function(event) {
    let isLabel = event.target.tagName == 'LABEL';
    if (isLabel && (event.key == 'Enter' || event.key == ' ')) {
        event.target.click();
    }
});