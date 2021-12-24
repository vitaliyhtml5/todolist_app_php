'use strict'

const table = document.querySelector('.task-wrap table');
const search = document.querySelector('.search-wrap');
const sorting = document.querySelector('.sort-wrap');
const filter = document.querySelector('.filter-btn');
const emptyData = document.querySelector('.empty-data');

const showEmptyState = () => {
    table.style.display = 'none';
    search.style.display = 'none';
    sorting.style.display = 'none';
    filter.style.display = 'none';
    emptyData.style.display = 'flex';
    addEmptyMessage('post_add', 'Add your first task');
}

const removeEmptyState = () => {
    table.style.display = 'table';
    search.style.display = 'block';
    sorting.style.display = 'block';
    filter.style.display = 'flex';
    emptyData.style.display = 'none';
}

const showEmptyResults = () => {
    table.style.display = 'none';
    emptyData.style.display = 'flex';
    addEmptyMessage('lightbulb', 'No results found');
}

const removeEmptyResults = () => {
    table.style.display = 'table';
    emptyData.style.display = 'none';
}

function addEmptyMessage(icon, text) {
    emptyData.innerHTML = `
    <span class="material-icons-outlined">${icon}</span>
    <p>${text}</p>`;
}

export {showEmptyState,removeEmptyState,showEmptyResults,removeEmptyResults};