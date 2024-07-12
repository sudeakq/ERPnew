<?php

namespace App\Http\Controllers;

use App\Models\Shift;
use Illuminate\Http\Request;

class ShiftController extends Controller
{

    protected $shift;

    public function __construct(){
        $this->shift = new Shift();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->shift->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->shift->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Shift $shift)
    {
        return $shift;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->shift->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->shift->findOrFail($id)->delete();
    }
}
