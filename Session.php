<?php

error_reporting(E_ALL ^ E_NOTICE);
require 'db_connection/start.php';

use Controllers\Users;

session_start();

if($_SESSION["id"]){
    $task = Users::get_tasks($_SESSION["id"]);
    echo(json_encode($task));
}else{
    echo '0';
}
