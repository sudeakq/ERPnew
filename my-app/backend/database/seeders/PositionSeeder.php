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
            "name" => "Social Media",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Video Editor",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Copywriter",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Google Ads Specialist",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Lead Generation",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Graphic Designer",
            "department_id" => Department::where("name","Digital Marketing")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Recruitment",
            "department_id" => Department::where("name","Human Resource Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Executive Assistant",
            "department_id" => Department::where("name","Human Resource Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "HR Intern",
            "department_id" => Department::where("name","Human Resource Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Google Analytics",
            "department_id" => Department::where("name","Business & Data Analyst")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Accountant",
            "department_id" => Department::where("name","Business & Data Analyst")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Business Analyst",
            "department_id" => Department::where("name","Business & Data Analyst")->first()->id
        ]);

        Position::factory()->create([
            "name" => "European Project Manager",
            "department_id" => Department::where("name","Project Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Business Project Manager",
            "department_id" => Department::where("name","Project Management")->first()->id
        ]);

        Position::factory()->create([
            "name" => "English",
            "department_id" => Department::where("name","Languages")->first()->id
        ]);
        
        Position::factory()->create([
            "name" => "Italian",
            "department_id" => Department::where("name","Languages")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Spanish",
            "department_id" => Department::where("name","Languages")->first()->id
        ]);

        Position::factory()->create([
            "name" => "WordPress Developer",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Front-End Development",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Back-End Development",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Full Stack Development",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "UX/UI Designer",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Application Development",
            "department_id" => Department::where("name","Information Technology")->first()->id
        ]);
        
        Position::factory()->create([
            "name" => "Civil Engineer",
            "department_id" => Department::where("name","Urban Design")->first()->id
        ]);

        Position::factory()->create([
            "name" => "Architect",
            "department_id" => Department::where("name","Urban Design")->first()->id
        ]);
        
        Position::factory()->create([
            "name" => "Business Lawyer",
            "department_id" => Department::where("name","Law")->first()->id
        ]);

    }
}
