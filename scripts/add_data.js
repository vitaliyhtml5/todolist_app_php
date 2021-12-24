'use strict';

import {checkEmptyField,checkLengthField} from './components.js';
import {closeOverlay} from './get_modal.js';
import {updateTable} from './show_table.js';
import {showAlert,showLoaderMain,closeLoaderMain} from './components.js';

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
        const res = await fetch('php_scripts/add_task.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        showLoaderMain();

        if (result.message === 'task was created') {
            setTimeout(() => {
                closeLoaderMain();
                updateTable();
                closeOverlay();
                showAlert('Task was created','success');
            }, 1000);
            
        } else {
            closeLoaderMain();
            showAlert('Task was not created','unsuccess');
        }
    }
}

export {addData};