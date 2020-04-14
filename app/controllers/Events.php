<?php

namespace Controllers;
use Models\Event;

class Events{
    public static function create_event($event, $user){
        $event = Event::create(['title'=>$event[1],'content'=>$event[2],'fecha_entrega'=>$event[0],
                              'id_user'=>$user
        ]);
        return $event;
    }

    public static function update_event($task_info){
        $task = Event::find($task_info[0]);
        $task->title = $task_info[1];
        $task->content = $task_info[2];
        $task->fecha_entrega = $task_info[3];
        $updated = $task->save();
        return $updated;
    }

    public static function delete_event($event_id){
 
        $event = Event::find($event_id);
        $deleted = $event->delete();
        return $deleted; 
     
    }
}
?>