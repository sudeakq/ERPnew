<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $table = "attendances";

    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function attendanceTypes(){
        return $this->belongsToMany(AttendanceType::class);
    }

}
