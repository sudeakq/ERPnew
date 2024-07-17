<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArrivalController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserTypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
// use App\Http\Controllers\AuthServiceProvider;
use App\Http\Controllers\ConsumedUtilityController;
use App\Http\Controllers\InterviewController;
use App\Http\Controllers\CoordinatorController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ApartmentProblemController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ReminderController;
use App\Http\Controllers\ShiftController;
use App\Http\Controllers\UtilityController;
use App\Http\Controllers\UtilityPriceController;

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

Route::controller(EmployeeController::class)->group(function () {
    Route::get('/employees', 'index');        
    Route::post('/employees', 'store');        
    Route::get('/employees/{id}', 'show');     
    Route::put('/employees/{id}', 'update');   
    Route::delete('/employees/{id}', 'destroy');
});

Route::controller(InterviewController::class)->group(function () {
    Route::get('/interviews', 'index');         
    Route::post('/interviews', 'store');         
    Route::get('/interviews/{interview}', 'show');
    Route::put('/interviews/{interview}', 'update'); 
    Route::delete('/interviews/{interview}', 'destroy'); 
});

Route::controller(UserController::class)->group(function () {
    Route::get('/users','index');
    Route::post('/users','store');
    Route::get('/users/{user}','show');
    Route::put('/users/{user}', 'update'); 
    Route::delete('/users/{user}', 'destroy'); 
});

Route::controller(AdminController::class)->group(function () {
    Route::get('/admins', 'index');
    Route::post('/admins', 'store');
    Route::post('/admins/login', 'loginAdmin');
    Route::get('/admins/{admin}', 'show');
});

Route::controller(ApartmentController::class)->group(function () {
    Route::get('/apartments', 'index');
    Route::post('/apartments', 'store');
    Route::get('/apartments/{apartment}','show');
});

Route::controller(ApartmentProblemController::class)->group(function () {
    Route::get('/apartmentproblems', 'index');
    Route::post('/apartmentsproblems', 'store');
    Route::get('/apartmentsproblems/{apartmentProblem}','show');
});

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
});

Route::controller(BillController::class)->group(function () {
    Route::get('/bills', 'index');     
    Route::post('/bills', 'store');     
    Route::get('/bills/{bill}', 'show');  
    Route::put('/bills/{bill}', 'update');
    Route::delete('/bills/{bill}', 'destroy');
});

Route::controller(ConsumedUtilityController::class)->group(function () {
    Route::get('/consumed-utilities', 'index');       
    Route::post('/consumed-utilities', 'store');       
    Route::get('/consumed-utilities/{consumedUtility}', 'show');
    Route::put('/consumed-utilities/{consumedUtility}', 'update'); 
    Route::delete('/consumed-utilities/{consumedUtility}', 'destroy');
});

Route::controller(DocumentController::class)->group(function () {
    Route::get('/documents', 'index');       
    Route::post('/documents', 'store');       
    Route::get('/documents/{document}', 'show');
    Route::put('/documents/{document}', 'update'); 
    Route::delete('/documents/{document}', 'destroy');
});

Route::controller(ReminderController::class)->group(function () {
    Route::get('/reminders', 'index')->name('reminders.index');
    Route::post('/reminders', 'store')->name('reminders.store');
    Route::get('/reminders/{reminder}', 'show')->name('reminders.show');
    Route::put('/reminders/{reminder}', 'update')->name('reminders.update');
    Route::delete('/reminders/{reminder}', 'destroy')->name('reminders.destroy');
});

Route::controller(ShiftController::class)->group(function () {
    Route::get('/shifts', 'index')->name('shifts.index');
    Route::post('/shifts', 'store')->name('shifts.store');
    Route::get('/shifts/{shift}', 'show')->name('shifts.show');
    Route::put('/shifts/{id}', 'update')->name('shifts.update');
    Route::delete('/shifts/{id}', 'destroy')->name('shifts.destroy');
});

Route::controller(UserTypeController::class)->group(function () {
    Route::get('/user-types', 'index')->name('user-types.index');
    Route::post('/user-types', 'store')->name('user-types.store');
    Route::get('/user-types/{userType}', 'show')->name('user-types.show');
    Route::put('/user-types/{id}', 'update')->name('user-types.update');
    Route::delete('/user-types/{id}', 'destroy')->name('user-types.destroy');
});

Route::controller(StudentController::class)->group(function (){
    Route::get('/students','index');
    Route::post('/students','store');
    Route::get('/students/{student}','show');
});

Route::controller(ArrivalController::class)->group(function (){
    Route::get('/arrivals','index');
    Route::post('/arrivals','store');
    Route::get('/arrivals/{arrival}','show');
});

Route::controller(NewsController::class)->group(function () {
    Route::get('/news', 'index')->name('news.index');
    Route::post('/news', 'store')->name('news.store');
    Route::get('/news/{news}', 'show')->name('news.show');
    Route::put('/news/{news}', 'update')->name('news.update');
    Route::delete('/news/{news}', 'destroy')->name('news.destroy');
});

Route::controller(StatusController::class)->group(function (){
    Route::get('/status','index');
    Route::post('/status','store');
    Route::get('/status/{status}','show');
});

Route::controller(CoordinatorController::class)->group(function (){
    Route::get('/coordinators','index');
    Route::post('/coordinators','store');
    Route::get('/coordinators/{coordinator}','show');
});

Route::controller(DepartmentController::class)->group(function (){
    Route::get('/departments','index');
    Route::post('/departments','store');
    Route::get('/departments/{deparment}','show');
});

Route::controller(PositionController::class)->group(function (){
    Route::get('/positions','index');
    Route::post('/positions','store');
    Route::get('/positions/{position}','show');
});

Route::controller(RoomController::class)->group(function (){
    Route::get('/rooms','index');
    Route::post('/rooms','store');
    Route::get('/rooms/{room}','show');
});

Route::controller(AttendanceController::class)->group(function (){
    Route::get('/attendances','index');
    Route::post('/attendances','store');
    Route::get('/attendances/{attendance}','show');
});

Route::controller(AttendanceController::class)->group(function (){
    Route::get('/attendances/types','index');
    Route::post('/attendances/types','store');
    Route::get('/attendances/types/{attendanceType}','show');
});

Route::controller(ScheduleController::class)->group(function (){
    Route::get('/schedules','index');
    Route::post('/schedules','store');
    Route::get('/schedules/{schedule}','show');
});

Route::controller(UtilityController::class)->group(function () {
    Route::get('/utilities', 'index')->name('utilities.index');
    Route::post('/utilities', 'store')->name('utilities.store');
    Route::get('/utilities/{utility}', 'show')->name('utilities.show');
    Route::put('/utilities/{utility}', 'update')->name('utilities.update');
    Route::delete('/utilities/{utility}', 'destroy')->name('utilities.destroy');
});

Route::controller(UtilityPriceController::class)->group(function () {
    Route::get('/utility-prices', 'index')->name('utility-prices.index');
    Route::post('/utility-prices', 'store')->name('utility-prices.store');
    Route::get('/utility-prices/{utilityPrice}', 'show')->name('utility-prices.show');
    Route::put('/utility-prices/{utilityPrice}', 'update')->name('utility-prices.update');
    Route::delete('/utility-prices/{utilityPrice}', 'destroy')->name('utility-prices.destroy');
});