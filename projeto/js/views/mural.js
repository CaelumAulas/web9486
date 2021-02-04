const mural = document.querySelector('.mural');

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