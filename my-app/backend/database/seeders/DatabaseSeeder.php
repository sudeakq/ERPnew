<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            InterviewerSeeder::class,
            DepartmentSeeder::class,
            MorningShiftSeeder::class,
            ApartmentSeeder::class,
            AfternoonShiftSeeder::class,
            PositionSeeder::class,
            ProgressSeeder::class,
            StatusSeeder::class,
            StudentSeeder::class,
            AdminSeeder::class,
            /* UserSeeder::class, */
            AttendanceSeeder::class,
            ScheduleSeeder::class,
            InterviewSeeder::class,
            ReminderSeeder::class,
            DocumentSeeder::class,
            NewsSeeder::class,
            ApartmentProblemSeeder::class,
            BillSeeder::class,
            UtilityPriceSeeder::class,
        ]);

    }
}
