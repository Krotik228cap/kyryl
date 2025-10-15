// Сюди ми переносимо всю логіку з кнопки встановлення.

// Реєструємо Service Worker і на цій сторінці
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker зареєстровано'))
    .catch(err => console.error('Помилка реєстрації Service Worker:', err));
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
    } else {
      console.log('Користувач відхилив встановлення');
    }

    deferredPrompt = null;
  }
});

// Ховаємо кнопку, якщо додаток вже встановлено
window.addEventListener('appinstalled', () => {
  installButton.classList.add('hidden');
  console.log('Додаток встановлено!');
});
