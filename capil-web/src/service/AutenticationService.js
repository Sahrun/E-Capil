import { BehaviorSubject } from 'rxjs';

import {config} from '../config/Config';
import { handleResponse } from './HandleResponseSevice';
import axios from 'axios';

const currentUserSubject = new BehaviorSubject(JSON.parse(getCurrentUser('currentUser')));

export const authenticationService = {
    register,
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function register(user){
    return axios.post(config.apiUrl+'auth/register', user)
    .then(handleResponse).then(respose => {
    }).catch(err => {
        console.log(err);
    });
}

function login(user) {
    return axios.post(config.apiUrl+'auth/login/', user)
    .then(handleResponse).then(respose => {

        if(user.rememberme){
            localStorage.setItem('currentUser', JSON.stringify(respose.success.token));
        }else{
            sessionStorage.setItem('currentUser', JSON.stringify(respose.success.token));
        }
        currentUserSubject.next(respose.success.token);
        
        return respose;
    }).catch(err => {
        alert("login error");
        console.log(err);
    });
}

function getCurrentUser(current){
    if(sessionStorage.getItem(current)){
        return sessionStorage.getItem(current);
    }else if(localStorage.getItem(current)){
        return localStorage.getItem(current);
    }
   return null;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');            
    sessionStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}