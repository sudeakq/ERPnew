<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Employee;
class EmployeeController extends Controller
{
    protected $employee;
    public function __construct(){
        $this->employee = new Employee();

    }
    public function index()
    {
      //  return $this->employee->all();
          return "hello" ;
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'phone' => 'nullable|string|max:20',
        ]);

        $employee = Employee::create($validated);
        return response()->json($employee, 201);
    }
    public function show(string $id)
    {
     $student = $this->employee->find($id);
    }

    public function update(Request $request, string $id)
    {
         $employee = $this->employee->find($id);
         $employee->update($request->all());
         return $employee;
    }
    public function destroy(string $id)
    {
     $employee = $this->employee->find($id);
    return $employee->delete();
    }
}
