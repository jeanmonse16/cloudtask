<?php

namespace Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model {
    use SoftDeletes; 
    protected $table = 'events';
    protected $fillable = ['title','content','fecha_entrega','id_user'];
    protected $dates = ['deleted_at'];
}