<?php

function get_data() {
    $res = file_get_contents('./fs/tasks.json');
    $data_file = json_decode($res, true);
    return $data_file;
}

function write_file($data_file) {
    $fp = fopen('./fs/tasks.json', 'w');
    fwrite($fp, json_encode($data_file, true)); 
    fclose($fp); 
}