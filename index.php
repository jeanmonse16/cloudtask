<?php

require './db_connection/start.php';

use Controllers\Users;

if(!empty($_POST) && isset($_POST["data"])){
    try {
        $results = $_POST["data"];
        $user = Users::create_user($results);
        if (!$user) {
            throw new Exception('DB Query Failed', 202);
        } 
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
    } catch (Exception $e) {
        echo $e->getMessage();
        die();
    }

    
}



echo 'hola';