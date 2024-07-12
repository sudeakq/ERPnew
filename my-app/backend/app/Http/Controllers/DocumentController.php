<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{

    protected $document;

    public function __construct(){
        $this->document = new Document();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->document->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->document->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        return $document;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        return $document->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        return $document->delete();
    }
}
