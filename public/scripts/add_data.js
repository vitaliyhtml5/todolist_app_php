'use strict';

import {checkEmptyField,checkLengthField} from './components.js';
import {closeOverlay} from './get_modal.js';
import {updateTable} from './show_table.js';
import {showAlert} from './components.js';

const addData = () => {
    const field = document.querySelectorAll('.modal textarea');
    const message = document.querySelectorAll('.modal .error-message');

    if (checkEmptyField(field[0],message[0]) && checkEmptyField(field[1],message[1]) && checkLengthField(field[0],message[0],150) && checkLengthField(field[1],message[1],250)) {
        addTask();
    }

    async function addTask() {
        const data = {
            task: field[0].value,
            comment: field[1].value
        }
        const res = await fetch('/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();

        if (result.message === 'task was created') {
            updateTable();
            closeOverlay();
            showAlert('Task was created','success');
        } else {
            showAlert('Task was not created','unsuccess');
        }
    }
}

export {addData};