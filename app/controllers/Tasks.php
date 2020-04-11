<?php

namespace Controllers;
use Models\Task;

class Tasks{
    public static function create_task($task){
        $task = Task::create(['title'=>$task[0],'content'=>$task[1],'fecha_entrega'=>$task[2],
                              'id_user'=>$task[3]
        ]);
        return $task;
    }

    public static function update_task($task_info){
        $task = Task::find($task_info[0]);
        $task->title = $task_info[1];
        $task->content = $task_info[2];
        $task->fecha_entrega = $task_info[3];
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