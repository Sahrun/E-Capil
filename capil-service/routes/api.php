<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/register','Api\Auth\AuthController@register');
Route::post('auth/login','Api\Auth\AuthController@login');
Route::post('aut','Api\Auth\AuthController@auth');
Route::get('general/navigation','Api\General\Navigationcontroller@index');
Route::get('user/users', 'Api\User\UserController@index');
 
Route::group(['middleware' => 'auth:api'], function(){
   // Route::get('user/users', 'Api\User\UserController@index');
    Route::post('auth/details', 'Api\Auth\AuthController@details');
    Route::get('auth/logout', 'Api\Auth\AuthController@logout');
    });