export const Validation = {
     isNull
};

function isNull(value){
 if (value == '' || value == undefined || value == null) return true;
 return false;
}