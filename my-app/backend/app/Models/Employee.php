<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{   protected $table = 'employee';
    protected $primaryKey = 'id';
     protected $fillable = [
          'name',
          'address',
          'phone',
      ];
    use HasFactory;
}
