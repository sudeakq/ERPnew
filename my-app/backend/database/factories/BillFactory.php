<?php

namespace Database\Factories;

use App\Models\Apartment;
use App\Models\ConsumedUtility;
use App\Models\Student;
use App\Models\UtilityPrice;
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
            "deadline" => $this->faker->date(),
            "internet_price" => $this->faker->numberBetween(1, 1000),
            "gas_price" => $this->faker->numberBetween(1, 1000),
            "water_price" => $this->faker->numberBetween(1, 1000),
            "electricity_price" => $this->faker->numberBetween(1, 1000),
            "student_id" => Student::factory(),
            "apartment_id" => Apartment::find(mt_rand(1,9)),
            "is_paid" => $this->faker->boolean(),
            "utility_price_id" => UtilityPrice::factory(),
            "consumed_utility_id"=> ConsumedUtility::factory(),
        ];
    }
}
