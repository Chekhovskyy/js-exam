'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const viewSelect = document.getElementById('view');
    const cardsList = document.querySelector('.cards-list');
    const savedView = localStorage.getItem('taskView') || 'cards';

    cardsList.classList.remove('cards', 'list');
    cardsList.classList.add(savedView);
    viewSelect.value = savedView;
    viewSelect.dataset.view = savedView;

    viewSelect.addEventListener('change', (event) => {
        const selectedView = event.target.value;

        cardsList.classList.remove('cards', 'list');
        cardsList.classList.add(selectedView);
        viewSelect.dataset.view = selectedView;

        localStorage.setItem('taskView', selectedView);
    });
});