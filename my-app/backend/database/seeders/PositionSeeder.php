<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::factory()->create([
            "name" => "Fullstack Developer",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "HR Personnel",
            "department_id" => Department::where("name","Human Resources")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Business Lawyer",
            "department_id" => Department::where("name","Business Project Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "UX Designer",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "European Project Manager",
            "department_id" => Department::where("name","European Project Manager")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Data Analyst",
            "department_id" => Department::where("name","Data Analyst")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Front-End Developer",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Business Project Management",
            "department_id" => Department::where("name","Business Project Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Financial Analyst",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

    }
}
