<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Warga extends Model
{
    protected $table = 'warga';
    protected $primaryKey ='id_warga';
    Protected $fillable = [
                           'NIK',
                           'nama_lengkap',
                           'nama_panggilan',
                           'kewarganegaraan',
                           'tempat_tinggal',
                           'alamat',
                           'RT',    
                           'RW',
                           'kecamatan',
                           'tempat_lahir',
                           'tanggal_lahir',
                           'jenis_kelamin',
                           'agama',
                           'status',
                           'pekerjaan',
                           'foto',
                           'foto_ktp',
                           'created',
                           'created_at',
                           'updated',
                           'updated_at'
                        ];
    protected $timestam = true;
    //

    public static function isExist($NIK){

        $exist = Warga::where('NIK',$NIK)->get();
        
        if(count($exist) > 0){
            return true;
        }else {
            return false;
        }
    }
}
