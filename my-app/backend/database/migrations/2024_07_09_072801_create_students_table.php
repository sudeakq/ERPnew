<?php

use App\Models\Arrival;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->date('application_date');
            $table->date('start_date');
            $table->date('end_date');
            $table->foreignId('arrivals_id');
            $table->integer('status_id');
            $table->integer('positions_id');
            $table->string('name');
            $table->string('surname');
            $table->string('phone_number');
            $table->string('sex');
            $table->string('country');
            $table->string('institution');
            $table->string('nationality');
            $table->integer('departments_id');
            $table->string('email')->unique();
            $table->date('date_of_birth');
            $table->integer('coordinators_id');
            $table->integer('rooms_id');
            $table->string('health_issues');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
