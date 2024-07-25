<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function students(){
        return $this->belongsToMany(Student::class);
    }

    public function utilityPrices(){
        return $this->belongsTOMany(UtilityPrice::class);
    }

    public function consumedUtilities(){
        return $this->belongsToMany(ConsumedUtility::class);
    }

    public function apartment(){
        return $this->belongsTo(Apartment::class);
    }

}
