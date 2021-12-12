'use strict';

import {closeOverlay} from './get_modal.js';
import {updateTable} from './show_table.js';
import {showAlert,showLoaderMain, closeLoaderMain} from './components.js';

const removeData = taskId => {
    removeTask();
    console.log(taskId)
    async function removeTask() {
        const res = await fetch(`/delete-task?id=${taskId}`, {
            method: 'DELETE'
        });
        const result = await res.json();
        showLoaderMain();

        if (result.message === 'task was removed') {
            setTimeout(() => {
                closeLoaderMain();
                updateTable();
                closeOverlay();
                showAlert('Task was removed','success');
            }, 1000);
        } else {
            closeLoaderMain();
            showAlert(result.message,'unsuccess');
        }
    } 
}

export {removeData};