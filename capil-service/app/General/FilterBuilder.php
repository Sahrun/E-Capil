<?php

namespace App\General;


class FilterBuilder
{

public $sparator = "/";

 public function filterBuilder($data,$filterUri){
     $data = $data->newQuery();

     if(isset($filterUri->filter))
     {
       $filter  = explode(",",$filterUri->filter);

       if(count($filter) !== 0){

        $data->where($this->generateFilter($filter));

       }
     }

     if(isset($filterUri->page))
     {
       if(isset($filterUri->count))
       {
        $data->offset(($filterUri->page * $filterUri->count));
       }
       else
       {
        $data->offset($filterUri->page);
       }
     }

     if(isset($filterUri->count))
     {
       $data->limit($filterUri->count);
     }

        return $data->get();    
 }

 public function generateFilter($filters){
    $filterResult = array();

    foreach($filters as $key => $value)
    {
            $filter = array();
            if(isset($value)){

              $row = explode($this->sparator,$value);
              array_push($filter,$row[0]);
              array_push($filter,$this->operation($row[1]));
              array_push($filter,$row[1] == "like" ? $row[2]."%":$row[2]);
          
             array_push($filterResult,$filter);
           }
    } 
  return $filterResult;
} 
   
public function operation($oprt) {

  $result = "";
  
  switch ($oprt) {
    case "equal":
      $result = "=";
    break;
    case "like":
      $result = "like";
    break;
    default:
    $result = "=";
  }

  return $result;

}

}
