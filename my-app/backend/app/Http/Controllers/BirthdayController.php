<?php
namespace App\Http\Controllers;

use App\Models\Birthday;
use Illuminate\Http\Request;

class BirthdayController extends Controller
{
    public function index()
    {
        $birthdays = Birthday::orderByDesc("date_of_birth")->get();
        return response()->json($birthdays);
    }
}
