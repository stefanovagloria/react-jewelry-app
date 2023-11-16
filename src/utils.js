export function isUserLoggedIn(){
    const user = localStorage.getItem('authToken');

    if(user){
        return true;
    }

    return false;
}

export function getAuthToken(){
    return localStorage.getItem('authToken');
}

export function getUserId(){
    return localStorage.getItem('userId');
}