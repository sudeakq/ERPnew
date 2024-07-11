<?php

namespace App\Http\Controllers;

use App\Models\UserType;
use Illuminate\Http\Request;

class UserTypeController extends Controller
{

    protected $userType;

    public function __construct(){
        $this->userType = new UserType();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->userType->all(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->userType->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(UserType $userType)
    {
        return $userType;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->userType->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->userType->destroy($id);
    }
}
