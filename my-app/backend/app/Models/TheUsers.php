<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TheUsers extends Model
{
    use HasFactory;
    protected $table = "the_users";

    protected $fillable = [
        "name",
        "email",
        "password"
    ];

}
