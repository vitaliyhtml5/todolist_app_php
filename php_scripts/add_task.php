<?php

require_once('./server_res.php');
require_once('./set_file.php');
require_once('./check_token.php');

$data = json_decode(file_get_contents('php://input'), true);
$task = $data['task'];
$comment = $data['comment'];
$data_file = get_data();
date_default_timezone_set('Europe/Kiev');

if (!checkToken()) {
    get_res(401, 'Access is not allowed');
} elseif (empty($task) || empty($comment)) {
    get_res(400, 'some data is missed');
} else {
    (count($data_file) === 0) ? $new_id = 1 : $new_id = end($data_file)['id'] + 1;
    
    $task = array(
        'id' => $new_id,
        'task' => $task,
        'comment' => $comment,
        'created' => date("d.m.Y H:i", time()),
        'status' => 'incomplete'
    );
    
    array_push($data_file, $task);
    write_file($data_file);
    get_res(201, 'task was created');
}