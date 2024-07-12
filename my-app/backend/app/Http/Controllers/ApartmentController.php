<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use Illuminate\Http\Request;

class ApartmentController extends Controller
{
    protected $apartment;

    public function __construct(){
        $this->apartment = new Apartment();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->apartment->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->apartment->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Apartment $apartment)
    {
        return $apartment;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Apartment $apartment)
    {
        return $apartment->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Apartment $apartment)
    {
        return $apartment->delete();
    }
}
