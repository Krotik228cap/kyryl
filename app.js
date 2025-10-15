// Перевіряємо, чи підтримує браузер Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Реєструємо наш файл sw.js
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker зареєстровано успішно:', registration);
      })
      .catch(error => {
        console.error('Помилка реєстрації Service Worker:', error);
      });
  });
}