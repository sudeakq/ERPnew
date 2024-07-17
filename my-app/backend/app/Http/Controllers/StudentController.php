<?php

namespace App\Http\Controllers;

use App\Models\AfternoonShift;
use App\Models\MorningShift;
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
        ->get();

        $afterNoonStudents = $this->student->with('department')
        ->where('morning_shift_id', null)
        ->orderBy('department_id')
        ->get();


        return [
            $morningStudents,
            $afterNoonStudents
        ];
    }

    public function updateStudentSchedule(Request $request){

        foreach ($request->all() as $data) {
            $student = $this->student->where('name', $data['name'])->first();
    
            if ($student) {
                $student->update([
                    'morning_shift_id' => $student["morning_shift_id"] === null ? MorningShift::first()->id : null,
                    'afternoon_shift_id' => $student["afternoon_shift_id"] === null ? AfternoonShift::first()->id : null
                ]);
            }
        }
        
        /* foreach ($request->all() as $data) {
            $student = $this->student->where('name', $data['name'])
                                     ->whereNotNull('afternoon_shift_id')
                                     ->first();
    
            if ($student) {
                $student->update([
                    'afternoon_shift_id' => null,
                    'morning_shift_id' => MorningShift::first()->id
                ]);
            }
        } */

        return true;
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
