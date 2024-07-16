<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    protected $admin;

    public function __construct(){
        $this->admin = new Admin();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->admin->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->admin->create($request->all());
    }

    public function loginAdmin(Request $request)
    {

        $admin = $this->admin->where([
            "email" => $request->email,
            "password" => $request->password
        ])->first();

            if(isset($admin)) return ["success" => true];
            return ["success" => false];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,Request $request)
    {
        $admin = Admin::find($id);

        if($admin->email == $request->email && $admin->password == $request->password ) return $admin;

        return false;
    }

    
    public function update(Request $request, Admin $admin)
    {
        return $admin->update($request->all());
    }

   
    public function destroy(Admin $admin)
    {
        return $admin->delete();
    }
}
