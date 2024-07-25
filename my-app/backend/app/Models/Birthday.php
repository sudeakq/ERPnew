<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Birthday extends Model
{

 protected $table = 'students';

 // Fillable fields
 protected $fillable = [
     'name', 
     'department', 
     'birthday_date'
 ];



    use HasFactory;
}
