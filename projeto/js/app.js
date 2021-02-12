import './views/btnAjuda.js';
import './views/btnMudaLayout.js';
import './views/formularioCartao.js';
import './views/busca.js';
import './views/btnLogout.js';
import { sincronizar } from './views/btnSync.js';
import { getCartoes } from './views/mural.js';
import { salvarCartoesStore } from './storage/db.js';

// Evento disparado quando a aplicação sai do modo offline e volta para o modo online
window.addEventListener('online', () => {
    sincronizar();
});

// Evento disparado quando a aplicação fica offline
window.addEventListener('offline', () => {
    const cartoesMural = getCartoes();
    if (cartoesMural.length > 0) {
        salvarCartoesStore(cartoesMural);
    }
});

// Registrando um service worker para a aplicação
async function registrarServiceWorker()
{
    if ('serviceWorker' in navigator) {
        const registro = await navigator.serviceWorker.register('/projeto/sw.js', {
            updateViaCache: 'none'
        });
        console.log('Service Worker registrado: ', registro);
    }
}

registrarServiceWorker();