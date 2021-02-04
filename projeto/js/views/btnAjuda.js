const btn = document.querySelector('#btnAjuda');
btn.addEventListener('click', () => {
    let mensagens = [
        "Bem-vindo(a) ao CEEP!",
        "Clique no botão '?' para Ajuda",
        "Clique no botão 'Linhas' para mudar a exibição dos cartões"
    ];

    for (let mensagem of mensagens) {
        alert(mensagem);
    }
});

