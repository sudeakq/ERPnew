<?php

namespace Database\Seeders;

use App\Models\Interviewer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterviewerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    protected $model = Interviewer::class;

    public function run(): void
    {
        Interviewer::factory()->create([
            "name" => "Patrycja"
        ]);
    }
}
