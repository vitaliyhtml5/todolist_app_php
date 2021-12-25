<?php

require_once('./server_res.php');
require_once('./set_file.php');
require_once('./check_token.php');

$data = get_data();

if (!checkToken()) {
    get_res(401, 'Access is not allowed');
} elseif (count($data) === 0) {
    get_res(200, 'no tasks yet');
} else {
    header('Content-type: application/json');
    print json_encode($data);
}