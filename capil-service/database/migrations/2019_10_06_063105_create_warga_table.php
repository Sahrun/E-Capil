<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWargaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('warga', function (Blueprint $table) {
            $table->bigIncrements('id_warga');
            $table->string('NIK');
            $table->string('nama_lengkap');
            $table->string('nama_panggilan')->nullable();
            $table->string('tempat_tinggal');
            $table->date('tanggal_lahir');
            $table->enum('jenis_kelamin', ['Laki - Laki', 'Perempuan']);
            $table->string('alamat');
            $table->string('RT')->nullable();
            $table->string('RW')->nullable();
            $table->string('kecamatan')->nullable();
            $table->string('agama')->nullable();
            $table->string('status_perkawinan');
            $table->string('pekerjaan');
            $table->string('kewarganegaraan');
            $table->string('foto')->nullable();
            $table->string('foto_ktp')->nullable();
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
        Schema::dropIfExists('warga');
    }
}
