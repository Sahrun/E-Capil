import  {authenticationService}  from './AutenticationService';

export function handleResponse(response) {
    if(!response.statusText == 'OK'){
       
        if ([401, 403].indexOf(response.status) !== -1) {
            authenticationService.logout();
            window.location.reload(true);
        }
        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return response.data;
}

export function handleError(error)  {
    
        if ([401, 403].indexOf(error.response.status) !== -1) {
            authenticationService.logout();
            window.location.reload(true);
        }
         const _error = (error.response && error.response.message) || error.response.statusText;
        return Promise.reject(_error);
}