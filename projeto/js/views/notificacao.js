const divMsg = document.createElement('div');
divMsg.classList.add('formNovoCartao-msg');
divMsg.addEventListener('animationend', () => divMsg.remove());

export function notificar(msg)
{
    divMsg.textContent = msg;
    document.body.append(divMsg);
}