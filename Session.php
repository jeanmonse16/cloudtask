<?php

error_reporting(E_ALL ^ E_NOTICE);
require 'db_connection/start.php';

use Controllers\Users;
use Controllers\Tasks;
use Controllers\Events;

session_start();

if($_SESSION["id"]){
    $task = Users::get_tasks($_SESSION["id"]);
    echo(json_encode($task));
}else{
    echo '0';
}

if(!empty($_POST) && isset($_POST["removeTask"])){
    session_start();
    try {
        $results = $_POST["removeTask"];
        $user = Tasks::delete_task($_POST["removeTask"]);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}

if(!empty($_POST) && isset($_POST["removeEvent"])){
    session_start();
    try {
        $results = $_POST["removeEvent"];
        $user = Events::delete_event($_POST["removeEvent"]);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}
