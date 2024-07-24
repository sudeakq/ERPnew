<?php

namespace App\Http\Controllers;

use App\Models\Interviewer;
use Illuminate\Http\Request;

class InterviewerController extends Controller
{

    protected $interviewer;

    public function __construct(){
        $this->interviewer = new Interviewer();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->interviewer->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->interviewer->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Interviewer $interviewer)
    {
        return $interviewer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Interviewer $interviewer)
    {
        return $interviewer->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interviewer $interviewer)
    {
        return $interviewer->delete();
    }
}
