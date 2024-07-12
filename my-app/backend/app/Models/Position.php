<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $table = "positions";
    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class);
    }

    public function departments(){
        return $this->belongsToMany(Department::class);
    }

}
