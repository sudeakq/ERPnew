<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArrivalController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TheUsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/employee', EmployeeController::class);

Route::controller(AdminController::class)->group(function () {
    Route::get('/admins', 'index');
    Route::post('/admins', 'store');
    Route::post('/admins/login', 'loginAdmin');
});

Route::controller(StudentController::class)->group(function (){
    Route::get('/students','index');
    Route::post('/students','store');
    Route::get('/students/{id}','show');
});

Route::controller(ArrivalController::class)->groupd(function (){
    Route::get('/arrivals','index');
    Route::post('/arrivals','store');
    Route::get('/arrivals/{id}','show');
});
