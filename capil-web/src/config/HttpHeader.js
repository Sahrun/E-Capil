import  {authenticationService}  from '../service/AutenticationService';
import axios from 'axios';
import {config} from '../config/Config';


export const httpHeader = {
    HeaderRequest
};

function HeaderRequest(){
     const currentUser = authenticationService.currentUser;
    if(currentUser && currentUser.source.value){
        axios.defaults.baseURL = config.HeaderRequest.baseURL;
        axios.defaults.headers.common['Authorization'] = "Bearer "+currentUser.source.value;
        axios.defaults.headers.post['Content-Type'] = config.HeaderRequest.ContentType;
    }
}