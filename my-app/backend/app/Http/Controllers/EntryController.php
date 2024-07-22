<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Illuminate\Http\Request;



class EntryController extends Controller
{
    public function index()
    {
        $entries = Entry::all();
        return response()->json($entries);
    }
    
    public function store(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'date' => 'required|date',
            'status' => 'required|in:arriving,departing,none',
        ]);

        $entry = Entry::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'date' => $request->date,
            'status' => $request->status,
        ]);

        return response()->json($entry, 201);
    }
}

