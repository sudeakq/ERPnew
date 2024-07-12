<?php

namespace App\Http\Controllers;

use App\Models\Reminder;
use Illuminate\Http\Request;

class ReminderController extends Controller
{

    protected $reminder;

    public function __construct(){
        $this->reminder = new Reminder();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->reminder->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->reminder->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Reminder $reminder)
    {
        return $reminder;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reminder $reminder)
    {
        return $reminder->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reminder $reminder)
    {
        $reminder->delete();
    }
}
