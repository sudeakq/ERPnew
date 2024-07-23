<?php

namespace Database\Seeders;

use App\Models\Apartment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Apartment::factory()->create([
            "name" => "Bianco 1"
        ]);

        Apartment::factory()->create([
            "name" => "Bianco 2"
        ]);

        Apartment::factory()->create([
            "name" => "Ferraro"
        ]);

        Apartment::factory()->create([
            "name" => "Gallo"
        ]);

        Apartment::factory()->create([
            "name" => "Gentile"
        ]);

        Apartment::factory()->create([
            "name" => "Pignataro"
        ]);

        Apartment::factory()->create([
            "name" => "Romeo"
        ]);

        Apartment::factory()->create([
            "name" => "Russo 1"
        ]);

        Apartment::factory()->create([
            "name" => "Russo 2"
        ]);

    }
}
