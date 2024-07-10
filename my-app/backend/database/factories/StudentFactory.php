<?php

namespace Database\Factories;

use App\Models\Arrival;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'application_date' => $this->faker->date(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'arrival_id' => Arrival::factory(), // Foreign key için Arrival model factory'si
            'status_id' => $this->faker->randomDigitNotNull,
            'positions_id' => $this->faker->randomDigitNotNull,
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'phone_number' => $this->faker->phoneNumber,
            'sex' => $this->faker->randomElement(['male', 'female']),
            'country' => $this->faker->country,
            'institution' => $this->faker->company,
            'nationality' => $this->faker->country,
            'departments_id' => $this->faker->randomDigitNotNull,
            'email' => $this->faker->unique()->safeEmail,
            'date_of_birth' => $this->faker->date(),
            'coordinators_id' => $this->faker->randomDigitNotNull,
            'rooms_id' => $this->faker->randomDigitNotNull,
            'health_issues' => $this->faker->sentence,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
