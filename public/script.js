'use strict'

import {showTable} from './scripts/show_table.js';
import {sortData} from './scripts/sort_data.js';
import {searchData} from './scripts/search_data.js';
import {getModal} from './scripts/get_modal.js';
import {showLoaderMain, closeLoaderMain} from './scripts/components.js';
import {showEmptyState,removeEmptyState} from './scripts/empty_state.js';

getDataAPI();
async function getDataAPI() {
    showLoaderMain();
    const res = await fetch('/get-all-tasks');
    const data = await res.json();
    closeLoaderMain();

    if (data.message === 'no tasks yet') {
        showEmptyState();
        getModal(data);
    } else {
        removeEmptyState();
        showTable(data);
        sortData(data);
        searchData(data);
        getModal(data);
    }
}

export {getDataAPI};