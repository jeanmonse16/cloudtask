<?php

namespace Controllers;
use Models\Event;

class Events{
    public static function create_event($event){
        $event = Event::create(['title'=>$event[0],'content'=>$event[1],'fecha_entrega'=>$event[2],
                              'id_user'=>$event[3]
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