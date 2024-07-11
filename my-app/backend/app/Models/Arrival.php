<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arrival extends Model
{
    use HasFactory;

    protected $table = 'arrivals';

    protected $primaryKey = 'id';

    protected $fillable = [
        'time',
        'pickup_location',
        'pickup_by'
    ];

    public function students(){
        return $this->hasMany(Student::class);
    }
}
