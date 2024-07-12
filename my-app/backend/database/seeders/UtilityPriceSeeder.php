<?php

namespace Database\Seeders;

use App\Models\UtilityPrice;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UtilityPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UtilityPrice::factory(10)->create();
    }
}
