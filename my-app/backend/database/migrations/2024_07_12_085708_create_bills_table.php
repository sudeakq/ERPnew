<?php

use App\Models\Student;
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
        Schema::create('bills', function (Blueprint $table) {
            $table->id();
            $table->date('opening_date');
            $table->date('closing_date');
            $table->date('deadline');
            $table->float('internet_price');
            $table->float('gas_price');
            $table->float('water_price');
            $table->float('electricity_price');
            $table->foreignIdFor(Student::class)->constrained()->onDelete('cascade');
            $table->boolean('is_paid');
            $table->integer('utilityprices_id');
            $table->integer('consumedutilities_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
