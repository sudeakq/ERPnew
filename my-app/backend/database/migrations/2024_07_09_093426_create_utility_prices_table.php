<?php

use App\Models\Utility;
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
        Schema::create('utility_prices', function (Blueprint $table) {
            $table->id();
            $table->float('price');
            $table->string('unit');
            $table->date('date');
            $table->foreignIdFor(Utility::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utility_prices');
    }
};
