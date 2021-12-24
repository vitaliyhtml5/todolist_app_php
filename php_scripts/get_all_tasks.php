<?php

require_once('./server_res.php');
require_once('./set_file.php');

$data = get_data();

if (count($data) === 0) {
    get_res(200, 'no tasks yet');
} else {
    header('Content-type: application/json');
    print json_encode($data);
}