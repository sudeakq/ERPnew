<?php

namespace App\Http\Controllers;

use App\Models\UtilityPrice;
use Illuminate\Http\Request;

class UtilityPriceController extends Controller
{

    protected $utilityPrice;

    public function __construct(){
        $this->utilityPrice = new UtilityPrice();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->utilityPrice->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->utilityPrice->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(UtilityPrice $utilityPrice)
    {
        return $utilityPrice;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UtilityPrice $utilityPrice)
    {
        return $utilityPrice->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UtilityPrice $utilityPrice)
    {
        return $utilityPrice->delete();
    }
}
