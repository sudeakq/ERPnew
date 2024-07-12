<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\User;
use App\Models\UserType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name"=> $this->faker->name,
            "surname"=> $this->faker->name,
            "phone_number"=> $this->faker->phoneNumber(),
            "email"=> $this->faker->safeEmail,
            "password"=> $this->faker->password,
            "usertypes_id"=> UserType::factory(),
            "student_id"=> Student::factory(),
            "created_at"=> now(),
            "updated_at"=> now(),
        ];
    }
}
