<?php

require_once('./server_res.php');

$username = 'vasya';
$password = '1';
$key = '1';

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['username']) || empty($data['password']) || empty($data['key'])) {
    get_res(422, 'All fileds should be filled');
} elseif ($data['username'] !== $username || $data['password'] !== $password || $data['key'] !== $key) {
    get_res(401, 'Incorrect credentials');
} elseif ($data['username'] === $username && $data['password'] === $password && $data['key'] === $key) {
    $token = generateRandomString();
    setcookie('todolist_app', $token, time() + (60 * 60 * 24 * 365));
    
    $fp = fopen('./fs/session.txt', 'w');
    fwrite($fp, $token); 
    fclose($fp); 
    get_res(200, 'Access is allowed');
} else {
    get_res(500, 'Something went wrong');
}

function generateRandomString($length = 60) {
    return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
}