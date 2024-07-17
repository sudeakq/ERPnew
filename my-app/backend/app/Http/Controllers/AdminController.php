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

            if(isset($admin)) return [
                "success" => true,
                "user" => [
                    "id"=> $admin->id,
                    "name" => $admin->name,
                    "email"=> $admin->email
                ]
            ];
            return ["success" => false];
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        if(isset($admin)) return [
            "success" => true,
            "user" => [
                "id"=> $admin->id,
                "name" => $admin->name,
                "email"=> $admin->email
            ]
        ];
        return ["success" => false];
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
