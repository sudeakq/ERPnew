<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{

    protected $schedule;

    public function __construct(){
        $this->schedule = new Schedule();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->schedule->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->schedule->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedule)
    {
        return $schedule;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->schedule->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->schedule->findOrFail($id)->delete();
    }
}
