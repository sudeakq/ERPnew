<?php

namespace Database\Factories;

use App\Models\Utility;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UtilityPrice>
 */
class UtilityPriceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'price' => $this->faker->randomFloat(2,0,0),
            "unit" => $this->faker->name,
            'date' => $this->faker->date,
            'utility_id' => Utility::factory()
        ];
    }
}
