<?php

namespace App\Http\Controllers;

use Illuminate\Models\Request;
use App\Models\User;


class UserController extends Controller
{
    public function index(){
        $users = User::all();

        return response()->json([
            'results' =>$users
        ],200);
    }

    public function show($id){
        $users = User::find($id);
        if(!$users){
            return response()->json([
                'message'=>'User Not Found'
            ],200);
        }

        return response()->json([
            'users' =>$users
        ],200);
    }
}

