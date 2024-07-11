<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{   protected $table = 'employee';
    protected $fillable = [
        'name',
        'address',
        'phone',
    ];

    public function students(){
        return $this->hasMany(Student::class);
    }

    use HasFactory;
}
