<?php

namespace Database\Factories;

use App\Models\Arrival;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Arrival>
 */
class ArrivalFactory extends Factory
{

    protected $model = Arrival::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'time' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'pickup_location' => $this->faker->address,
            'pickup_by' => $this->faker->name,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
