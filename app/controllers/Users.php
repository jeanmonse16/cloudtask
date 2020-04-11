<?php

namespace Controllers;
use Models\User;
use Models\Task;
use Models\Event;

class Users{
    public static function create_user($user){
        $user = User::create(['firstname'=>$user[0],'lastname'=>$user[1],'username'=>$user[2],
                              'email'=>$user[3],'password'=>$user[4]
        ]);
        return $user;
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