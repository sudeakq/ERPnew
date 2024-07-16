<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApartmentProblem extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function students(){
        return $this->hasMany(Student::class);
    }

}
