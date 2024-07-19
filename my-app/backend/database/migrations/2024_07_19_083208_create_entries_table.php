<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDepartmentToEntriesTable extends Migration
{
    public function up()
    {
        Schema::table('entries', function (Blueprint $table) {
            $table->string('department')->nullable()->after('status');
        });
    }

    public function down()
    {
        Schema::table('entries', function (Blueprint $table) {
            $table->dropColumn('department');
        });
    }
}
