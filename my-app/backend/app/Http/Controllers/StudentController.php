<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    protected $student;

    public function __construct(Student $student){
        $this->student = $student;
    }

    public function index()
    {

        $morningStudents = $this->student->with('department')
        ->whereNot("morning_shift_id",null)
        ->orderBy('department_id')
        ->paginate(20);

        $afterNoonStudents = $this->student->with('department')
        ->where("morning_shift_id",null)
        ->orderBy('department_id')
        ->paginate(20);

        return [
            $morningStudents,
            $afterNoonStudents
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->student->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student;
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
