<?php

namespace Controllers;

Class Session{
    public static function log_in($id){
        session_start();
        $_SESSION["id"] = $id;
    }

    public static function log_out(){
        session_unset();
        session_destroy();
    }
}
