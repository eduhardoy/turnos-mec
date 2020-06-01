import axios from 'axios';

const urlLogin = "asdasda"
const login = (params) => {
    return axios({
        method: 'POST',
        url: urlLogin,
        crossdomain: true,
        data: params,    
        headers: { 
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        } 
    })
}

const urlSignUp = "dfdfdsfsd"
const signUp = (params) => {
    return axios({
        method: 'POST',
        url: urlSignUp,
        data: params,    
        headers: { 
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        } 
    })
}


export { login, signUp };