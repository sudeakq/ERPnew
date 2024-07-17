<?php

namespace App\Http\Controllers;

use App\Models\ConsumedUtility;
use Illuminate\Http\Request;

class ConsumedUtilityController extends Controller
{
    protected $consumedUtility;

    public function __construct(){
        $this->consumedUtility = new ConsumedUtility(); 
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->consumedUtility->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->consumedUtility->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(ConsumedUtility $consumedUtility)
    {
        return $consumedUtility;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ConsumedUtility $consumedUtility)
    {
        return $consumedUtility->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ConsumedUtility $consumedUtility)
    {
        return $consumedUtility->delete();
    }
}
