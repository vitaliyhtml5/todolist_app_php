'use strict'

import {checkEmptyField,checkLengthField} from './components.js';
import {closeOverlay} from './get_modal.js';
import {updateTable} from './show_table.js';
import {showAlert,showLoaderMain, closeLoaderMain} from './components.js';

const editData = taskId => {
    const field = document.querySelectorAll('.modal textarea');
    const message = document.querySelectorAll('.modal .error-message');
    const radio = document.querySelectorAll('.edit-radio input');
    let status;

    if (checkEmptyField(field[0],message[0]) && checkEmptyField(field[1],message[1]) && checkLengthField(field[0],message[0],150) && checkLengthField(field[1],message[1],250)) {
        radio[0].checked ? status = 'incomplete' : status = 'complete';
        editTask(status);
    }

    async function editTask(taskStatus) {
        const data = {
            id: taskId,
            task: field[0].value,
            comment: field[1].value,
            status: taskStatus
        }
        const res = await fetch(`/edit-task`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        showLoaderMain();

        if (result.message === 'task was edited') {
            setTimeout(() => {
                closeLoaderMain();
                updateTable();
                closeOverlay();
                showAlert('Task was edited','success');
            }, 500);
        } else {
            showAlert(result.message,'unsuccess');
        }
    }
}

export {editData};