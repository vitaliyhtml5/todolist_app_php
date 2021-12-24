<?php

function validate_task_id($id, $data_file) {
    $validation = false;
    foreach ($data_file as $el) {
        if ($el['id'] === $id) {
            $validation = true;
            break;
        }
    }
    return  $validation;
}