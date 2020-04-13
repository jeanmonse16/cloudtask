<?php

namespace Controllers;
use Models\User;
use Models\Task;
use Models\Event;
use Controllers\Session;

class Users{
    public static function create_user($user){
        $get_username = User::where("username",  $user[2])->first();
        if($get_username){
            return 0;
        }

        $get_email = User::where("email",  $user[3])->first();
        if($get_email){
            return 0;
        }

        $set_User = User::create(['firstname'=>$user[0],'lastname'=>$user[1],'username'=>$user[2],
                              'email'=>$user[3],'password'=>$user[4]
        ]);
        

        Session::log_in($set_User->id);

        return $set_User;
    }

    public static function get_user($user){
        $get_password = User::where("password",  $user[1])->first();
        if(!$get_password){
            return 0;
        }

        $get_email = User::where("email",  $user[0])->first();
        if(!$get_email){
            return 0;
        }

        Session::log_in($get_email->id);

        return $get_email;
    }

    public static function update_user($user_info){
        $user = User::find($user_info[0]);
        $user->firstname = $user_info[1];
        $user->lastname = $user_info[2];
        $user->username = $user_info[3];
        $user->email = $user_info[4];
        $user->password = $user_info[5];
        $updated = $user->save();
        return $updated;
    }

    public static function get_tasks($user_id){
        $count = Task::where('id_user',$user_id)->count();
        return $count;
    }

    public static function get_events($user_id){
        $count = Event::where('id_user',$user_id)->count();
        return $count;
    }
}
?>