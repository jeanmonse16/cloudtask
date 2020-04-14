<?php

//Este archivo es el puente entre el frontend y el backend de esta app

require './db_connection/start.php';

use Controllers\Users;
use Controllers\Tasks;
use Controllers\Events;

if(!empty($_POST) && isset($_POST["data"])){
    try {
        $results = $_POST["data"];
        $user = Users::create_user($results);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 

        echo ($_SESSION["id"]);
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}

if(!empty($_POST) && isset($_POST["login"])){
    try {
        $results = $_POST["login"];
        $user = Users::get_user($results);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
        echo ($_SESSION["id"]);
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}

if(!empty($_POST) && isset($_POST["task"])){
    session_start();
    try {
        $results = $_POST["task"];
        $user = Tasks::create_task($results, $_SESSION["id"]);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}

if(!empty($_POST) && isset($_POST["event"])){
    session_start();
    try {
        $results = $_POST["event"];
        $user = Events::create_event($results, $_SESSION["id"]);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}
