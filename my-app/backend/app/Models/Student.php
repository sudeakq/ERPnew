<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = "students";
    protected $guarded = [];

    public function arrival(){
        return $this->belongsTo(Arrival::class);
    }

    public function status(){
        return $this->belongsTo(Status::class);
    }

    public function position(){
        return $this->belongsTo(Position::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }
    
    public function coordinator(){
        return $this->belongsTo(Coordinator::class);
    }

    public function room(){
        return $this->belongsTo(Room::class);
    }

    public function users(){
        return $this->hasMany(User::class);
    }

    public function documents(){
        return $this->hasMany(Document::class);
    }

    public function interviews(){
        return $this->hasMany(Interview::class);
    }

}
