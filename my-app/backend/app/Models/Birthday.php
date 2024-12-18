<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Birthday extends Model
{

 protected $table = 'students';

 use HasFactory;
 protected $fillable = [
     'name', 
     'department', 
     'date_of_birth'
 ];
}
