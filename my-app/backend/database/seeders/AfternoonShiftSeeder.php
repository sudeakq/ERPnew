<?php

namespace Database\Seeders;

use App\Models\AfternoonShift;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AfternoonShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AfternoonShift::factory()->create();
    }
}
