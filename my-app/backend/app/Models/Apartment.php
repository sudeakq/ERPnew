<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use HasFactory;

    protected $guarded = [];

/*     public function rooms(){
        return $this->hasOne(Room::class);
    } */

    public function consumedUtilities(){
        return $this->hasMany(ConsumedUtility::class);
    }

}
