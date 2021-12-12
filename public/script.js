'use strict'

import {showTable} from './scripts/show_table.js';
import {sortData} from './scripts/sort_data.js';
import {searchData} from './scripts/search_data.js';
import {getModal} from './scripts/get_modal.js';
import {showLoaderMain, closeLoaderMain} from './scripts/components.js';

getDataAPI();
async function getDataAPI() {
    showLoaderMain();
    const res = await fetch('/get-all-tasks');
    const data = await res.json();
    
    closeLoaderMain();
    showTable(data);
    sortData(data);
    searchData(data);
    getModal(data);
}

export {getDataAPI};