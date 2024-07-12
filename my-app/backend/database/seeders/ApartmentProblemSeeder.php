<?php

namespace Database\Seeders;

use App\Models\ApartmentProblem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApartmentProblemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ApartmentProblem::factory(10)->create();
    }
}
