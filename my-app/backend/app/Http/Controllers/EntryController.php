<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Illuminate\Http\Request;

class EntryController extends Controller
{
    public function index()
    {
        return Entry::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'date' => 'required|date',
            'status' => 'required',
            'department' => 'required',
        ]);

        return Entry::create($request->all());
    }
}
