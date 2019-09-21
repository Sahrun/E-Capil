import autenticationService from './AutenticationService';
import axios from 'axios';

export function HttpHeader(){
    const currentUser = autenticationService.currentUser;
    if(currentUser && currentUser.token){
        axios.defaults.baseURL = 'http://127.0.0.1:8000/';
        axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    }
    
}