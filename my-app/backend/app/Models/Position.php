<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $table = "positions";
    protected $primaryKey = 'id';
    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class);
    }

}
