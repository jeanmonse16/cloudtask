<?php

namespace Controllers;

Class LogOut(){
    public static function log_out(){
        session_unset();
        session_destroy();
    }
}
session_unset();
session_destroy();