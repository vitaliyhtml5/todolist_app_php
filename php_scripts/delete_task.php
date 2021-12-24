<?php

require_once('./server_res.php');
require_once('./set_file.php');
require_once('./validate_data.php');

$id_task = (int)$_GET['id'];
$data_file = get_data();

if (empty($id_task)) {
    get_res(400, 'id is required');
} elseif (!validate_task_id($id_task, $data_file)) {
    get_res(200, 'task does not exist');
} else {
    for ($i = 0; $i < count($data_file); $i++) {
        if ($data_file[$i]['id'] === $id_task) {
            array_splice($data_file, $i, 1);
            break;
        }
    }
    write_file($data_file);
    get_res(200, 'task was removed');
}