<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::factory()->create([
            "name" => "Digital Marketing"
        ]);
        
        Department::factory()->create([
            "name" => "Human Resource Management"
        ]);

        Department::factory()->create([
            "name" => "Business & Data Analyst"
        ]);

        Department::factory()->create([
            "name" => "Project Management"
        ]);

        Department::factory()->create([
            "name" => "Languages"
        ]);

        Department::factory()->create([
            "name" => "Information Technology"
        ]);

        Department::factory()->create([
            "name" => "Urban Design"
        ]);

        Department::factory()->create([
            "name" => "Law"
        ]);

    }
}
