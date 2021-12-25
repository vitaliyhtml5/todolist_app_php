<?php

require_once('./server_res.php');

$token = file_get_contents('./fs/session.txt');

if (isset($_COOKIE['todolist_app']) && $token === $_COOKIE['todolist_app']) {
    get_res(200, 'Access is allowed');
} else {
    get_res(401, 'Access is not allowed');
}