<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function userTypes(){
        return $this->belongsToMany(UserType::class);
    }

    public function departments(){
        return $this->hasMany(Department::class);
    }

    public function schedules(){
        return $this->hasMany(Schedule::class);
    }

    public function attendances(){
        return $this->hasMany(Attendance::class);
    }

    public function reminders(){
        return $this->hasMany(Reminder::class);
    }

    public function news(){
        return $this->hasMany(News::class);
    }

    public function interviews(){
        return $this->hasMany(Interview::class);
    }

}
