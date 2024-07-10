<?php

namespace App\Http\Controllers;

use App\Models\Coordinator;
use Illuminate\Http\Request;

class CoordinatorController extends Controller
{

    protected $coordinator;

    public function __construct(){
        $this->coordinator = new Coordinator();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->coordinator->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->coordinator->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Coordinator $coordinator)
    {
        return $coordinator;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->coordinator->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->coordinator->findOrFail($id)->delete();
    }
}
