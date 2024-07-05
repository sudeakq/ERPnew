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
        return $this->employee->all();

    }

    public function store(Request $request)
    {
     return $this->employee->create($request->all());


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
