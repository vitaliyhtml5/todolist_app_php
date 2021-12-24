<?php

require_once('./server_res.php');
require_once('./set_file.php');
require_once('./validate_data.php');

$data = json_decode(file_get_contents('php://input'), true);
$data_file = get_data();

if (empty($data['id']) || empty($data['task']) || empty($data['comment']) || empty($data['status'])) {
    get_res(400, 'some data is missed');
} elseif ($data['status'] !== 'complete' && $data['status'] !== 'incomplete') {
    get_res(400, 'value of status is incorrect');
} else if (!validate_task_id($data['id'], $data_file)) {
    get_res(200, 'task does not exist');
} else {
    for ($i = 0; $i < count($data_file); $i++) {
        if ($data_file[$i]['id'] === $data['id']) {
            $data_file[$i] = array(
                'id' => $data['id'],
                'task' => $data['task'],
                'comment' => $data['comment'],
                'created' => $data_file[$i]['created'],
                'status' => $data['status']
            );
            break;
        }
    }
    write_file($data_file);
    get_res(200, 'task was edited');
}