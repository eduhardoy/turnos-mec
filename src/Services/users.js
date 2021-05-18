import { axiosRequest } from "../Utils/AxiosRequest";
import { gql } from "apollo-boost";


export const loginComun = gql`
  query Login($cuit: String!) {
    LoginUsuarioComun(data: { cuit: $cuit })
  }
`

export const LoginAdmin = gql`
  query LoginAdmin($cuit: String!, $contrasena: String!) {
    LoginUsuarioNoComun(data: { cuit: $cuit, contrasena: $contrasena }){
        _key
        roles{
            _key
            estado
        }
    }
  }
`

export const registroUsuarioComun = gql`
mutation Registro($cuit: String!, $dni: String!, $nombre: String!, $apellido: String!, $correo: String!, $telefono: String!) {
    RegistrarUsuarioComun(data: {cuit: $cuit , dni:$dni, nombre: $nombre, apellido: $apellido, correo: $correo, telefono: $telefono}) {
      cuit
    }
  }
`

const urlAuthClient = "http://mapa.mec.gob.ar:3030/auth/validar"
export function clientLogin(dni){
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

