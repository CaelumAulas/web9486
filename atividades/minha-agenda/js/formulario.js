import { adicionarContato } from "./tabelaContatos.js";

// lógica de validação do formulário e coleta de dados
const formulario = document.querySelector('#formCadastro');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const campoNome = formulario.querySelector('#inputNome');
    const campoTel = formulario.querySelector('#inputTelefone');

    if (campoNome.value.trim() === '') {
        alert(campoNome.dataset.msg);
    }

    else if (campoTel.value.trim() === '') {
        alert(campoTel.dataset.msg);
    }

    else {
        adicionarContato(campoNome.value.trim(), campoTel.value.trim());
        formulario.reset();
    }
    
});