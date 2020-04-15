<?php

namespace Controllers;
use Models\Task;

class Tasks{
    public static function create_task($task, $user){
        $task = Task::create(['title'=>$task[1],'content'=>$task[2],'fecha_entrega'=>$task[0],
                              'id_user'=>$user
        ]);
        return $task;
    }

    public static function update_task($task_info){
        $task = Task::find($task_info[3]);
        $task->title = $task_info[1];
        $task->content = $task_info[2];
        $task->fecha_entrega = $task_info[0];
        $updated = $task->save();
        return $updated;
    }

    public static function delete_task($task_id){
 
        $task = Task::find($task_id);
        $deleted = $task->delete();
        return $deleted; 
     
    }
}
?>