<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use Illuminate\Http\Request;

class BillController extends Controller
{
    protected $bill;

    public function __construct(){
        $this->bill = new Bill();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->bill->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->bill->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $this->bill->with('apartment')->findOrFail($id);;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bill $bill)
    {
        return $bill->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bill $bill)
    {
        return $bill->delete();
    }
}
