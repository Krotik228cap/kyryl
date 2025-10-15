// Перевіряємо, чи підтримує браузер Service Worker
if ('serviceWorker' in navigator) {
  // Реєструємо наш файл sw.js при завантаженні сторінки
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      console.log('Service Worker зареєстровано успішно!');
    }).catch(error => {
      console.log('Помилка реєстрації Service Worker: ', error);
    });
  });
}