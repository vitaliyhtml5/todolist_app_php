'use strict';

import {showTable} from './show_table.js';

const sortData = data => {
    const sortArrow = document.querySelector('.sort-wrap b');
    let status = 'asc';

    document.querySelector('.sort-wrap span').addEventListener('click', getData);

    function getData() {
        if (status === 'asc') {
            status = 'desc';
            sortArrow.style.transform = 'rotate(180deg)';
            data.sort((a, b) =>  a.id < b.id ? 1 : -1);
            showTable(data);
        } else if (status === 'desc') {
            status = 'asc';
            sortArrow.style.transform = 'rotate(0deg)';
            data.sort((a, b) => a.id > b.id ? 1 : -1);
            showTable(data);
        }
    }
}

export {sortData};