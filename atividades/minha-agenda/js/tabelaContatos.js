const tabela = document.querySelector('#tabelaContatos');

export function adicionarContato(nome, telefone)
{
    // criar a linha na tabela
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>
            <button class="btn btn-danger btn-sm">
                Excluir
            </button>
        </td>
    `;

    tabela.append(tr);
}

// a lógica de exclusão dos contatos na tabela
tabela.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
        const botaoExcluir = event.target;
        botaoExcluir.closest('tr').remove();
    }
});

