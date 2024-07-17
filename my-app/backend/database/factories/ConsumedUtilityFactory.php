<?php

namespace Database\Factories;

use App\Models\Apartment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ConsumedUtility>
 */
class ConsumedUtilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'water_clock' => $this->faker->numberBetween(1,100),
            'electricity_clock' => $this->faker->numberBetween(1,100),
            'gas_clock' => $this->faker->numberBetween(1,100),
            'apartment_id' => Apartment::factory(),
            'date' => $this->faker->date(),
        ];
    }
}
