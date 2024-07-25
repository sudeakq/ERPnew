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
            "name" => "Bianco 1",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Bianco 2",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Ferraro",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Gallo",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Gentile",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Pignataro",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Romeo",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Russo 1",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

        Apartment::factory()->create([
            "name" => "Russo 2",
            "is_visible" => mt_rand(0,1) ? true : false
        ]);

    }
}
