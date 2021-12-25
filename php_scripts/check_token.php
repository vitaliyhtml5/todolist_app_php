<?php

function checkToken() {
    $token = file_get_contents('./fs/session.txt');
    
    if (isset($_COOKIE['todolist_app']) && $token === $_COOKIE['todolist_app']) {
        return true;
    } else {
        return false;
    }
}