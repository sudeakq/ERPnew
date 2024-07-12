<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Interview>
 */
class InterviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "date" => $this->faker->dateTime(),
            "user_id" => User::factory(),
            "student_id" => Student::factory(),
            "notes" => $this->faker->text,
            "rejected" => $this->faker->boolean()
        ];
    }
}
