<?php

use App\Models\Apartment;
use App\Models\ConsumedUtility;
use App\Models\Student;
use App\Models\UtilityPrice;
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
            $table->float('total_price');
            $table->boolean('is_paid');
            $table->foreignIdFor(UtilityPrice::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(ConsumedUtility::class)->constrained()->onDelete('cascade');
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
