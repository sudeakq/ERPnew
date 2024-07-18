<?php

namespace Database\Seeders;

use App\Models\Progress;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $status = ["Pending","On-Board","Rejected","Accepted","Ending"];

        Progress::factory()->create([
            "progress" => "HR Interview",
            "status" => $status[mt_rand(0, 4)]
        ]);
        
        Progress::factory()->create([
            "progress" => "CEO Interview",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Acceptance Letter",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "New Applicant",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Waiting for Grant",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Learning Agreement",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Accepted",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Rejected",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "Final Interview",
            "status" => $status[mt_rand(0, 4)]
        ]);

        Progress::factory()->create([
            "progress" => "None",
            "status" => $status[mt_rand(0, 4)]
        ]);

    }
}
