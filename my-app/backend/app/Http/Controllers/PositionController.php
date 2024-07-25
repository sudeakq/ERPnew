<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;

class PositionController extends Controller
{

    protected $position;

    public function __construct(){
        $this->position = new Position();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->position->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->position->create($request->all());
    }

    public function getPositionByName(Request $request){
        return $this->position->with('department')->where("name", $request->name)->first();
    }

    public function getPositions(Request $request){
        $positions = $this->position->with("department")
        ->whereHas("department", function($query) use($request){
            $query->where('name',$request->all()['name']);
        })
        ->get();
        
        $positionNames = [];

        foreach($positions as $postition){
            $positionNames[] = $postition->name;
        }

        return $positionNames;
    }

    /**
     * Display the specified resource.
     */
    public function show(Position $position)
    {
        return $position;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->position->find($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->position->destroy($id);
    }
}
