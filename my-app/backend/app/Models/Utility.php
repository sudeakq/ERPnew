<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utility extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function utilitiyPrices(){
        return $this->hasMany(UtilityPrice::class);
    }

}
