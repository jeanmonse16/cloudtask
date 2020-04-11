<?php 

namespace Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model {
    protected $table = 'users';
    protected $fillable = ['firstname','lastname','username','email','password'];
}