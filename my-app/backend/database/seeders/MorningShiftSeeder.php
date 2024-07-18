<?php

namespace Database\Seeders;

use App\Models\MorningShift;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MorningShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MorningShift::factory()->create();
    }
}
