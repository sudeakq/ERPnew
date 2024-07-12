<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    protected $table = "departments";

    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class,"department_id",'id');
    }

    public function positions(){
        return $this->hasMany(Position::class);
    }

    public function users(){
        return $this->belongsToMany(User::class);
    }

}
