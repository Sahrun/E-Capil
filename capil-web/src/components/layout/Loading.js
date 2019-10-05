import React  from 'react';
export const Loading = {
  LoadingPage,
  Spinner,
  SpinnerRun
 }

 function Spinner(){
    return  <div id="overlay" style={{display:'none'}}>
    <div className="spinner"></div>
     <br/>
     Loading...
     </div>
 }
 
function SpinnerRun(sppiner){
  var display = sppiner?'':'none';
  var element =  window.document.getElementById("overlay");
  element.setAttribute("style", "display:"+display+"");
}

 function LoadingPage(){
  return  <div id="overlay">
  <div className="spinner"></div>
   <br/>
   Loading...
   </div>
}
