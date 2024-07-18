<?php

namespace Database\Factories;

use App\Models\AfternoonShift;
use App\Models\Arrival;
use App\Models\Coordinator;
use App\Models\Department;
use App\Models\MorningShift;
use App\Models\Position;
use App\Models\Room;
use App\Models\Status;
use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        $isMorning = mt_rand() / mt_getrandmax() > 0.5; // 50% olasılıkla true veya false

        return [
            'application_date' => $this->faker->date(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'arrival_id' => Arrival::factory(),
            'status_id' => Status::factory(),
            'position_id' => Position::factory(),
            'name' => $this->faker->firstName,
            'surname' => $this->faker->lastName,
            'phone_number' => $this->faker->phoneNumber,
            'sex' => $this->faker->randomElement(['male', 'female']),
            'country' => $this->faker->country,
            'institution' => $this->faker->company,
            'nationality' => $this->faker->country,
            'department_id' => Department::find(mt_rand(1, 11)),
            'email' => $this->faker->unique()->safeEmail,
            'date_of_birth' => $this->faker->date(),
            'coordinator_id' => Coordinator::factory(),
            'room_id' => Room::factory(),
            'health_issues' => $this->faker->sentence,
            'morning_shift_id' => $isMorning ? MorningShift::first() : null,
            'afternoon_shift_id' => !$isMorning ? AfternoonShift::first() : null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
