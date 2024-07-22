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
        return $this->student->all();
    }

    public function getStudentsWithDepartment(){
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
            $student = $this->student->where('id', $data['id'])->first();
    
            if ($student) {
                $student->update([
                    'morning_shift_id' => $student["morning_shift_id"] === null ? MorningShift::first()->id : null,
                    'afternoon_shift_id' => $student["afternoon_shift_id"] === null ? AfternoonShift::first()->id : null
                ]);
            }
        }

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

    public function getStudentsForApplicantlist(){
        return $this->student->with(['department','position','status','progress'])
        ->whereHas('status', function ($query) {
            $query->where('name','Applicant');
        })
        /* ->whereNot('status',null) */
        ->get();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->student->findOrFail($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->student->findOrFail($id)->delete();
    }
}
