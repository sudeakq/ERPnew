<?php

use App\Models\Apartment;
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
        Schema::create('consumed_utilities', function (Blueprint $table) {
            $table->id();
            $table->integer('water_clock');
            $table->integer('electricity_clock');
            $table->integer('gas_clock');
            $table->foreignIdFor(Apartment::class)->constrained()->onDelete('cascade');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consumed_utilities');
    }
};
