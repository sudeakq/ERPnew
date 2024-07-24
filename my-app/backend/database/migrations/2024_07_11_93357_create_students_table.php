<?php

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
            $table->foreignIdFor(Arrival::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Status::class)->constrained('status')->onDelete('cascade');
            $table->foreignIdFor(Position::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Interviewer::class)->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('surname');
            $table->string('phone_number');
            $table->string('sex');
            $table->string('country');
            $table->string('institution');
            $table->string('nationality');
            $table->foreignIdFor(Department::class)->constrained()->onDelete('cascade');
            $table->string('email')->unique();
            $table->date('date_of_birth');
            $table->foreignIdFor(Coordinator::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Apartment::class)->constrained()->onDelete('cascade');
            $table->string('health_issues');
            $table->foreignIdFor(Progress::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(MorningShift::class)->nullable()->constrained()->onDelete('cascade');
            $table->foreignIdFor(AfternoonShift::class)->nullable()->constrained()->onDelete('cascade');
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
