<?php

namespace App\Http\Controllers;

use App\Models\ApartmentProblem;
use Illuminate\Http\Request;

class ApartmentProblemController extends Controller
{
    protected $apartmentProblem;

    public function __construct(){
        $this->apartmentProblem = new ApartmentProblem();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->apartmentProblem->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->apartmentProblem->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(ApartmentProblem $apartmentProblem)
    {  
        return $apartmentProblem;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return ApartmentProblem::find($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return ApartmentProblem::find($id)->delete();
    }
}
