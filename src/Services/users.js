import { axiosRequest } from "../Utils/AxiosRequest";


const urlAuthClient = "http://mapa.mec.gob.ar:3030/auth/validar"
export function clientLogin(dni){
    console.log(dni, "DNI")
    return axiosRequest(urlAuthClient, {
        method: 'POST',
        body: JSON.stringify(dni),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}

const urlSignUpClient = "http://mapa.mec.gob.ar:3030/auth/detalle"
export function clientSignUp(userData){
    console.log("REQUEST", userData)
    return axiosRequest(urlSignUpClient, {
        method: 'POST',
        body: JSON.stringify(userData),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}

const urlAuthAdmin= "http://mapa.mec.gob.ar:3030/auth/ingresar"
export function authAdmin(userData){
    console.log("REQUEST", userData)
    return axiosRequest(urlAuthAdmin, {
        method: 'POST',
        body: JSON.stringify(userData),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}




/*
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
}*/

