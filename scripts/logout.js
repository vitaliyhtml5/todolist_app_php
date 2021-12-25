'use strict';

import {showAlert} from './components.js';

const logout = () => {
    document.querySelector('.logout-btn').addEventListener('click', () => {
        logoutUser();

        async function logoutUser() {
            const res = await fetch('php_scripts/logout.php', {
                method: 'GET'
            });

            const result = await res.json();

            if (result.message === 'Cookies are cleared') {
                window.location.href = 'login.html';
            } else {
                showAlert('Something went wrong', 'unsuccess');
            }
        }
    });
}

export {logout};