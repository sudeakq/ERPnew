<?php

namespace App\Http\Controllers;

use App\Models\Utility;
use Illuminate\Http\Request;

class UtilityController extends Controller
{
    protected $utility;

    public function __construct(){
        $this->utility = new Utility();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->utility->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->utility->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Utility $utility)
    {
        return $utility;   
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Utility $utility)
    {
        return $utility->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Utility $utility)
    {
        return $utility->delete();
    }
}
