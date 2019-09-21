import { BehaviorSubject } from 'rxjs';

import {config} from './Config';
import { handleResponse } from './HandleResponseSevice';
import axios from 'axios';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(user) {
    return axios.post(config.apiUrl+'auth/login/', user)
    .then(handleResponse).then(respose => {
        localStorage.setItem('currentUser', JSON.stringify(respose.success.token));
        currentUserSubject.next(respose.success.token);
        return respose;
    }).catch(err => {
        console.log(err);
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}