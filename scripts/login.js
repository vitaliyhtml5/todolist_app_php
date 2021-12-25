'use strict';

import {showAlert} from './components.js';

document.querySelector('.login-form').addEventListener('submit', e => {
    const input = document.querySelectorAll('.login-form input');
    e.preventDefault();

    if (input[0].value.length === 0 || input[1].value.length === 0 || input[2].value.length === 0) {
        showAlert('All fileds should be filled', 'unsuccess');
    } else {
        makeLogin();
    }

    async function makeLogin() {
        const data = {
            username: input[0].value.trim(),
            password: input[1].value.trim(),
            key: input[2].value.trim()
        }

        const res = await fetch('php_scripts/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.message === 'Access is allowed') {
            window.location.href = 'index.html';
        } else {
            showAlert(result.message, 'unsuccess');
        }
    }
});