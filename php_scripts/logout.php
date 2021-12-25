<?php

require_once('./server_res.php');

if (isset($_COOKIE['todolist_app'])) {
    setcookie('todolist_app', 'session', time() - 3600);
    get_res(200, 'Cookies are cleared');
} else {
    get_res(400, 'Something went wrong');
}