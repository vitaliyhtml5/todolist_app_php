'use strict'

import {showTable} from './scripts/show_table.js';

let allTasks = [];

getDataAPI();
async function getDataAPI() {
    const res = await fetch('/get-all-tasks');
    const data = await res.json();
    allTasks = data;
    showTable(data);
}

