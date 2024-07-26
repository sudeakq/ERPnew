<?php
namespace App\Http\Controllers;

use App\Models\Birthday;
use Illuminate\Http\Request;

class BirthdayController extends Controller
{
    public function index()
    {
        $birthdays = Birthday::all();
        return response()->json($birthdays);
    }
}
