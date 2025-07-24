'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const viewSelect = document.getElementById('view');
    const cardsList = document.querySelector('.cards-list');

    // Виправлено: змінив ключ збереження з 'view' на 'taskView' для кращої ідентифікації
    // та виправив початкове значення з 'data-cards' на 'cards'
    const savedView = localStorage.getItem('taskView') || 'cards';

    // Виправлено: застосовую збережений вид при завантаженні сторінки
    cardsList.classList.remove('cards', 'list');
    cardsList.classList.add(savedView);
    viewSelect.value = savedView;
    viewSelect.dataset.view = savedView;

    // Додано: обробник зміни виду з правильною логікою переключення
    viewSelect.addEventListener('change', (event) => {
        const selectedView = event.target.value;

        // Видаляю всі попередні класи видів та додаю новий
        cardsList.classList.remove('cards', 'list');
        cardsList.classList.add(selectedView);

        // Оновлюю data-атрибут для можливого використання в CSS
        viewSelect.dataset.view = selectedView;

        // Зберігаю вибраний вид у localStorage
        localStorage.setItem('taskView', selectedView);

        // Додано: логування для дебагу (можна видалити у продакшені)
        console.log(`View changed to: ${selectedView}`);
    });
});