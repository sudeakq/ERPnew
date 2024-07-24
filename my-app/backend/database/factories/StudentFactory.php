<?php

namespace Database\Factories;

use App\Models\AfternoonShift;
use App\Models\Apartment;
use App\Models\Arrival;
use App\Models\Coordinator;
use App\Models\Department;
use App\Models\Interviewer;
use App\Models\MorningShift;
use App\Models\Position;
use App\Models\Progress;
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
            'status_id' => Status::find(mt_rand(1,3)),
            'position_id' =>  Position::find(mt_rand(1, 9)),
            'interviewer_id' => Interviewer::find(1),
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
            'apartment_id' =>  Apartment::find(mt_rand(1, 9)),
            'health_issues' => $this->faker->sentence,
            'morning_shift_id' => $isMorning ? MorningShift::first() : null,
            'afternoon_shift_id' => !$isMorning ? AfternoonShift::first() : null,
            'amount' => 222,
            'progress_id' => Progress::find(mt_rand(1, 10)),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
