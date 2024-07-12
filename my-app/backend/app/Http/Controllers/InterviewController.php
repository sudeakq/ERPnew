<?php

namespace App\Http\Controllers;

use App\Models\Interview;
use Illuminate\Http\Request;

class InterviewController extends Controller
{

    protected $interview;

    public function __construct(){
        $this->interview = new Interview();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->interview->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->interview->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Interview $interview)
    {
        return $interview;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Interview $interview)
    {
        return $interview->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interview $interview)
    {
        return $interview->delete();
    }
}
