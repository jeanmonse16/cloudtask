<?php

error_reporting(E_ALL ^ E_NOTICE);
require 'db_connection/start.php';

use Controllers\Users;

session_start();

if($_SESSION["id"]){
    $event = Users::get_events($_SESSION["id"]);
    echo(json_encode($event));
}else{
    echo '0';
}