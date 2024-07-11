<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordinator extends Model
{
    use HasFactory;
    protected $table = "coordinators";
    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class);
    }

}
