<?php

namespace App\Http\Controllers;

use App\Models\Progress;
use Illuminate\Http\Request;

class ProgressController extends Controller
{

    protected $progress;

    public function __construct(){
        $this->progress = new Progress();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->progress->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->progress->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Progress $progress)
    {
        return $progress;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Progress $progress)
    {
        return $progress->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Progress $progress)
    {   
        return $progress->delete();
    }
}
