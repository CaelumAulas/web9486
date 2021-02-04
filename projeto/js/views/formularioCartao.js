import { adicionarCartao } from "./mural.js";
import { notificar } from "./notificacao.js";

const formulario = document.querySelector('form');
const campoTexto = formulario.querySelector('textarea');

formulario.addEventListener( 'submit', function(event) {
    event.preventDefault();

    if (!campoTexto.value.trim()) {
        notificar('Por favor, preencha o campo corretamente!');
    }
    else {
        adicionarCartao(campoTexto.value.trim());
        formulario.reset();
    }

} );