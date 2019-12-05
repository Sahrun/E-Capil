<?php

namespace App\Http\Controllers\Api\Warga;

use App\Warga;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\General\FilterBuilder;

class WargaController extends Controller
{
    public $successStatus = 200;
    public $success ="OK";
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $warga = new Warga();
        $filter = new FilterBuilder();
        $resut = $filter->filterBuilder($warga,$request);
        return $resut;
    }

   

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = New User;
        $warga  = new Warga;

        $dir = "Uploads";
            $file = null;
            $isUpload = true;
            $fotoName = "";
            $fotoKtpName = "";
    
    
            if($request->file('foto')){
              $file  = $request->file('foto');
              $fileName = uniqid(time(), true).".".$file->getClientOriginalExtension();
              $fotoName = $fileName;
              if(!$file->move($dir,$fileName)){
                $isUpload = false;
              }
            }
            if($request->file('foto_ktp') && $isUpload ){
                $file  = $request->file('foto_ktp');
                $fileName = uniqid(time(), true).".".$file->getClientOriginalExtension();
                $fotoKtpName = $fileName;
                if(!$file->move($dir,$fileName)){
                  $isUpload = false;
                }
            }
    
            if($isUpload){
                $warga::create([
                    'NIK'               => $request->NIK,
                    'nama_lengkap'      => $request->nama_lengkap,
                    'nama_panggilan'    => $request->nama_panggilan,
                    'kewarganegaraan'   => $request->kewarganegaraan,
                    'tempat_tinggal'    => $request->tempat_tinggal,
                    'alamat'            => $request->alamat,
                    'RT'                => $request->RT,
                    'RW'                => $request->RW,
                    'kecamatan'         => $request->kecamatan,
                    'tempat_lahir'      => $request->tanggal_lahir,
                    'tanggal_lahir'     => $request->tanggal_lahir,
                    'jenis_kelamin'     => $request->jenis_kelamin,
                    'agama'             => $request->agama,
                    'status'            => $request->status,
                    'pekerjaan'         => $request->pekerjaan,
                    'foto'              => $fotoName,
                    'foto_ktp'          => $fotoKtpName,
                    'created'           => $user->CurrentUser(),
                    'created_at'        => Date("Y-m-d h:i:s"),
                    'updated'           => $user->CurrentUser(),
                    'updated_at'        => Date("Y-m-d h:i:s"),
                ]); 
            }
       
        return response()->json(['success'=> $this-> success,'data' => null ], $this-> successStatus); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
   public function existingNIK($NIK)
   {
    $existing = Warga::isExist($NIK);
    return response()->json(['success'=> $this->success, 'data'=> $existing ], $this-> successStatus); 
   }
   
}
