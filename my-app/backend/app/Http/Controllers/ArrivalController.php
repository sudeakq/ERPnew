<?php

namespace App\Http\Controllers;

use App\Models\Arrival;
use Illuminate\Http\Request;

class ArrivalController extends Controller
{

    protected $arrival;

    public function __construct(Arrival $arrival){
        $this->arrival = $arrival;
    }

    public function index()
    {
        return $this->arrival->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->arrival->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $this->arrival->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->arrival->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->arrival->findOrFail($id)->delete();
    }
}
