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

        $electric = mt_rand(5000,10000) / 100;
        $gas = mt_rand(5000,10000) / 100;
        $water = mt_rand(5000,10000) / 100;
        $internet = mt_rand(5000,10000) / 100;

        return [
            "opening_date" => $this->faker->date(),
            "closing_date" => $this->faker->date(),
            "deadline" => $this->faker->date(),
            "internet_price" => $internet,
            "gas_price" => $gas,
            "water_price" => $water,
            "electricity_price" => $electric,
            "total_price" => $electric + $gas + $water + $internet ,
            "is_paid" => $this->faker->boolean(),
            "utility_price_id" => UtilityPrice::factory(),
            "consumed_utility_id"=> ConsumedUtility::factory(),
        ];
    }
}
