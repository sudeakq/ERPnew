<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    
    protected $table = "rooms";

    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class);
    }

    public function apartment(){
        return $this->belongsTo(Apartment::class);
    }

}
