const formulario = document.querySelector('form');
const campoTexto = formulario.querySelector('textarea');

formulario.addEventListener( 'submit', function(event) {
    event.preventDefault();

    if (!campoTexto.value.trim()) 
    {
        const divMsg = document.createElement('div');
        divMsg.classList.add('formNovoCartao-msg');
        divMsg.textContent = "Por favor, preencha o campo corretamente!";

        formulario.append(divMsg);
        divMsg.addEventListener('animationend', () => divMsg.remove());
    }

} );