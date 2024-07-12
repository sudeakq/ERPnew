<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UtilityPrice extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function utilities(){
        return $this->belongsToMany(Utility::class);
    }

}
