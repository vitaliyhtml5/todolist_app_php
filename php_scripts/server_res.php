<?php

function get_res($code, $message) {
    $res = array('code' => $code,'message' => $message);
    http_response_code($code);
    header('Content-type: application/json');
    print json_encode($res);
}