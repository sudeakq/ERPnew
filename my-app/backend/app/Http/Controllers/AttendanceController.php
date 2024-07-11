<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{

    protected $attendance;

    public function __construct(){
        $this->attendance = new Attendance();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->attendance->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->attendance->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        return $attendance;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
    $this->attendance->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->attendance->destroy($id);
    }
}
