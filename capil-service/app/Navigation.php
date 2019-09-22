<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Navigation extends Model
{
    protected $table = "navigation";
    protected $primaryKey ="NavigationId";
    protected $timestam = true;
}
