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
            "name" => "Information Technology"
        ]);

        Department::factory()->create([
            "name" => "Human Resources"
        ]);


        Department::factory()->create([
            "name" => "Financial Accounting"
        ]);

        Department::factory()->create([
            "name" => "Business Administration"
        ]);

        Department::factory()->create([
            "name" => "Data Analyst"
        ]);

        Department::factory()->create([
            "name" => "User Experience"
        ]);

        Department::factory()->create([
            "name" => "Urban Developments"
        ]);

        Department::factory()->create([
            "name" => "European Project manager."
        ]);

    }
}
