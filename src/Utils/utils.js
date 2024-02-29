import { CONST_KEYS, LOGIN_CHK } from "../../src/config";


export const isAuthed = () =>{
    let token = getItem(CONST_KEYS.token)
    if(!token){
        return false;
    }

    return true;
}

export const setLoginStatus = (loginstatus) =>{
    LOGIN_CHK.isLoggedIn =  loginstatus;
}

export const setItem = (key,value) =>{
    sessionStorage.setItem(key,value);
}

export const getItem = (key)=>{
    return sessionStorage.getItem(key);
}

export const clearSession = ()=>{
    sessionStorage.clear();
}