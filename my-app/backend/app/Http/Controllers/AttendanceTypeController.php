<?php

namespace App\Http\Controllers;

use App\Models\AttendanceType;
use Illuminate\Http\Request;

class AttendanceTypeController extends Controller
{

    protected $attendanceType;

    public function __construct(){
        $this->attendanceType = new AttendanceType();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->attendanceType->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->attendanceType->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(AttendanceType $attendanceType)
    {
        return $attendanceType;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,string $id)
    {
        return $this->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->attendanceType->destroy($id);
    }
}
