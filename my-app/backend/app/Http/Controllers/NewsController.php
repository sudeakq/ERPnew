<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{

    protected $news;


    public function __construct(){
        $this->news = new News();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->news->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->news->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return $news;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        return $news->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        return $news->delete();
    }
}
