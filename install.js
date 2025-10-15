// Реєструємо Service Worker і на цій сторінці
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let deferredPrompt;
const installButton = document.getElementById('installButton');

// Показуємо кнопку, якщо PWA можна встановити
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.classList.remove('hidden');
});

// Обробник кліку на кнопку
installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('Користувач встановив додаток');
    }
    deferredPrompt = null;
  }
});

// Ховаємо кнопку, якщо додаток вже встановлено
window.addEventListener('appinstalled', () => {
  installButton.classList.add('hidden');
});