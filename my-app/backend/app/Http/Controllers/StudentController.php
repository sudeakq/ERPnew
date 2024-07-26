<?php

namespace App\Http\Controllers;

use App\Models\AfternoonShift;
use App\Models\MorningShift;
use App\Models\Student;
use Illuminate\Http\Request;
use Mockery\Expectation;

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
        $morningStudents = $this->student->with('position.department')
        ->whereNot("morning_shift_id",null)
        ->orderBy('position_id')
        ->get();

        $afterNoonStudents = $this->student->with('position.department')
        ->where('morning_shift_id', null)
        ->orderBy('position_id')
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
        try {
            $student = $this->student->create($request->all());
            
            return response()->json([
                'success' => true,
                'data' => $student
            ], 201);
    
        } catch (\Exception $e) {
            
            return response()->json([
                'success' => false,
                'message' => 'Student creation failed: ' . $e->getMessage()
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student;
    }

    public function getStudentsForApplicantlist()
{
    return $this->student
        ->with(['status', 'progress' => function ($query) {
            $query->orderBy('date', 'desc');
        }, 'position.department'])
        ->whereHas('status', function ($query) {
            $query->where('name', 'Applicant');
        })
        ->orderByDesc(function($query) {
            $query->select('date')
                  ->from('progress')
                  ->whereColumn('progress.student_id', 'students.id')
                  ->orderByDesc('date')
                  ->limit(1);
        })
        ->paginate(10);
}

    //naber

    public function getStudentsByApartmentId(string $id){
        return $this->student->with(["bill","apartment"])->where("apartment_id",$id)->get();
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
