import {config} from '../config/Config';
import  {authenticationService}  from '../service/AutenticationService';
import { handleResponse,handleError } from './HandleSevice';
import axios from 'axios';

export const httpService = {
    Post,
    Get,
};

function Post(urlRoute,data) {
    return axios.post(config.apiUrl+urlRoute, data)
    .then(handleResponse).then(respose => {
        return respose;
    }).catch(handleError);
}

function Get(urlRoute,param) {
    var UrlParam = (param == null || param == '' || param == 'null')? '' :param;
    return axios.get(config.apiUrl+urlRoute+UrlParam)
    .then(handleResponse)
    .then(respose => {
        return respose;
    })
    .catch(handleError);
}
