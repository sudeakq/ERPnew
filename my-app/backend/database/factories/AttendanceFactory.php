<?php

namespace Database\Factories;

use App\Models\Attendance;
use App\Models\AttendanceType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Attendance>
 */
class AttendanceFactory extends Factory
{

    protected $model = Attendance::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id"=> User::factory(),
            'attendancetypes_id' => AttendanceType::factory(),
            'date' => $this->faker->dateTime()
        ];
    }
}
