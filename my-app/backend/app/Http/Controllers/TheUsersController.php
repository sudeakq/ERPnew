<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TheUsers;

class TheUsersController extends Controller
{

    protected $user;

    public function __construct(){
        $this->user = new TheUsers();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->user->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->user->create($request->all());
    }

    public function loginUser(Request $request)
    {

        $user = $this->user->where([
            "email" => $request->email,
            "password" => $request->password
        ])->first();

            if(isset($user)) return ["success" => true];
            return ["success" => false];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,Request $request)
    {
        $user = TheUsers::find($id);

        if($user->email == $request->email && $user->password == $request->password ) return $user;

        return false;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
