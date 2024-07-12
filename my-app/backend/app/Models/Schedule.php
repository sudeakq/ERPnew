<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function users(){
        return $this->belongsToMany(User::class);
    }

    public function shifts(){
        return $this->belongsToMany(Shift::class);
    }

}
