'use strict';

import {updateTable} from './show_table.js';
import {showAlert,showLoaderMain, closeLoaderMain} from './components.js';
import {closeOverlay} from './get_modal.js';

const editStatus = data => {
    const statusBtn = document.querySelectorAll('.task-status');
    let status;
    let id;

    statusBtn.forEach((el, index) => {
        el.onclick = () => {
            id = document.querySelectorAll('.id-task')[index].textContent;
            el.classList.contains('task-status_complete') ? status = 'incomplete' : status = 'complete';
            editData(id, status);
        }
    });

    async function editData(taskId, taskStatus) {
        const data = {
            id: taskId,
            status: taskStatus
        }
        const res = await fetch(`/edit-status`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        showLoaderMain();

        if (result.message === 'status was changed') {
            setTimeout(() => {
                closeLoaderMain();
                updateTable();
                closeOverlay();
                showAlert('Status was changed','success');
            }, 500);
        } else {
            closeLoaderMain();
            showAlert(result.message,'unsuccess');
        }
    }
}

export {editStatus};