<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Status::factory()->create([
            'name' => 'Applicant'
        ]);

        Status::factory()->create([
            'name' => 'Intern'
        ]);

        Status::factory()->create([
            'name' => 'Alumni'
        ]);

    }
}
