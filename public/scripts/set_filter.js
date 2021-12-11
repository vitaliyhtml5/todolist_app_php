'use strict';

import {showTable} from './show_table.js';

const setFilter = data => {
    const checkbox = document.querySelectorAll('.filter-wrap input');
    let filterArr = [];

    if (checkbox[0].checked && !checkbox[1].checked) {
        filterArr = data.filter(item => item.status === 'incomplete');
        showChosenFilter('incomplete');
    } else if (!checkbox[0].checked && checkbox[1].checked) {
        filterArr = data.filter(item => item.status === 'complete');
        showChosenFilter('complete');
    } else {
        filterArr = data;
        showChosenFilter('all');
    }
    return filterArr;
}

const applyFilter = data => {
    const filterBtn = document.querySelectorAll('.filter-wrap-btn button');
    const filterWrap = document.querySelector('.filter-wrap');
    openFilter(filterWrap);

    filterBtn[0].onclick = () => {
        showTable(data);
        closeFilter(filterWrap);
    }
    filterBtn[1].onclick = () => closeFilter(filterWrap);
}


// Open/close filters
function openFilter(filterWrap) {
    document.querySelector('.filter-btn').onclick = () => filterWrap.style.display = 'flex';
    removePropagation();
    document.onclick = () => {
        if (filterWrap.style.display = 'flex') closeFilter(filterWrap);
    }
}

function closeFilter(filterWrap) {
    filterWrap.style.display = 'none';
}

function removePropagation() {
    document.querySelector('.filter-btn').addEventListener('click', e => e.stopPropagation());
    document.querySelector('.filter-wrap').addEventListener('click', e => e.stopPropagation());
}

function showChosenFilter(state) {
    const filterBtn = document.querySelector('.filter-btn');
    const filterBtnText = document.querySelector('.filter-btn b');
    const addClass = () => filterBtn.classList.add('filter-btn_active');

    if (state === 'complete') {
        addClass();
        filterBtnText.textContent = 'Complete';
    } else if (state === 'incomplete') {
        addClass();
        filterBtnText.textContent = 'Incomplete';
    } else {
        filterBtn.classList.remove('filter-btn_active');
    }
}

export {setFilter, applyFilter};