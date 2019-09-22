<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNavigationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('navigation', function (Blueprint $table) {
            $table->bigIncrements('NavigationId');
            $table->string('NavigationName')->nullable();
            $table->string('NavigationTitle')->nullable();
            $table->string('NavigationUrl')->nullable();
            $table->string('NavigationParam')->nullable();
            $table->string('NavigationComponent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('navigation');
    }
}
