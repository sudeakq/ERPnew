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
            "name" => "Human Resources"
        ]);

        Department::factory()->create([
            "name" => "Data Analyst"
        ]);

        Department::factory()->create([
            "name" => "Digital Marketing"
        ]);

        Department::factory()->create([
            "name" => "Copy Writer"
        ]);

        Department::factory()->create([
            "name" => "Growth Hacker"
        ]);

        Department::factory()->create([
            "name" => "Business Project Management"
        ]);

        Department::factory()->create([
            "name" => "Architecture & Urban Design"
        ]);

        Department::factory()->create([
            "name" => "Information Technology"
        ]);

        Department::factory()->create([
            "name" => "User Experience Designer"
        ]);

        Department::factory()->create([
            "name" => "European Project Manager"
        ]);

        Department::factory()->create([
            "name" => "Business Lawyer"
        ]);

    }
}
