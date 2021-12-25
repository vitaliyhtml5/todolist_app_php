'use strict';

import {showTable} from './scripts/show_table.js';
import {sortData} from './scripts/sort_data.js';
import {searchData} from './scripts/search_data.js';
import {getModal} from './scripts/get_modal.js';
import {showLoaderMain,closeLoaderMain} from './scripts/components.js';
import {showEmptyState,removeEmptyState} from './scripts/empty_state.js';
import {logout} from './scripts/logout.js';

startSession();
async function startSession() {
    const res = await fetch('php_scripts/session.php', {method: 'GET'});
    const result = await res.json();

    if (result.message === 'Access is allowed') {
        getDataAPI();
        logout();
    } else {
        window.location.href = 'login.html';
    }
}

async function getDataAPI() {
    showLoaderMain();
    const res = await fetch('php_scripts/get_all_tasks.php');
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