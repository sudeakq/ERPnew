<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bill>
 */
class BillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "opening_date" => $this->faker->date(),
            "closing_date" => $this->faker->date(),
            "deadling" => $this->faker->date(),
            "internet_price" => $this->faker->randomFloat(),
            "gas_price" => $this->faker->randomFloat(),
            "water_price" => $this->faker->randomFloat(),
            "electricity_price" => $this->faker->randomFloat(),
            "student_id" => Student::factory(),
            "is_paid" => $this->faker->boolean(),
            "utilityprices_id" => $this->faker->randomNumber(),
            "consumedutilities_id"=> $this->faker->randomNumber(),
        ];
    }
}
