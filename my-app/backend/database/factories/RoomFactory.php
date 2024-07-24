<?php

namespace Database\Factories;

use App\Models\Apartment;
use App\Models\Room;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{

    protected $model = Room::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "apartment_id"=> Apartment::find(mt_rand(1,9)),
            "capacity" => $this->faker->numberBetween(1,100),
        ];
    }
}
