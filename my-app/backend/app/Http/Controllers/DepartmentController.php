<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{

    protected $department;

    public function __construct(Department $department){
        $this->department = $department;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->department->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->department->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Department $department)
    {
        return $department;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->department->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->department->findOrFail($id)->delete();
    }
}
