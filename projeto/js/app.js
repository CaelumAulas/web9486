import './views/btnAjuda.js';
import './views/btnMudaLayout.js';
import './views/mural.js';
import './views/formularioCartao.js';
import './views/busca.js';
import './views/btnSync.js';
import './views/btnLogout.js';

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