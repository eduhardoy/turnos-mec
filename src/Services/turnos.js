import { axiosRequest } from "../Utils/AxiosRequest";
import { gql } from "apollo-boost";


export const SaveShift = gql`
mutation SaveShift($aclaraciones: String!, $fecha: String!, $hora: String!, $modalidad: enumModalidad!, $direccion: enumDirecciones!, $cuit: String!, $data: JSON!) {
    ReservarTurno(data: {aclaraciones: $aclaraciones, fecha: $fecha, hora: $hora, modalidad: $modalidad, direccion: $direccion, cuit: $cuit, data: $data})
  }
`

export const GetShift = gql`
  query GetShift($mes: String!, $direccion: String!) {
    ListarTurnosReservadosCliente(data: { mes: $mes, direccion: $direccion })
  }
`

export const GetShiftAdmin = gql`
  query GetShiftAdmin($mes: String!, $roles:[RolInputRecipe!]!) {
    ListarTurnosReservados(data: { mes: $mes, roles: $roles })
  }
`
/*
const urlSaveShift = "http://mapa.mec.gob.ar:3030/turnos"
export function SaveShift(dataTurno){
    return axiosRequest(urlSaveShift, {
        method: 'POST',
        body: JSON.stringify(dataTurno),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}*/

const urlGetTurnosClient = "http://mapa.mec.gob.ar:3030/turnos/mes"
export function getTurnosClient(dataTurno){
    console.log("TURNOS API CLIENT REQUEST", dataTurno)
    return axiosRequest(urlGetTurnosClient, {
        method: 'POST',
        body: JSON.stringify(dataTurno),    
        headers: { 
            "Content-Type": "application/json",
        } 
    }).
    then(response => response.data)
}

const urlGetTurnosAdmin = "http://mapa.mec.gob.ar:3030/turnos"
export function getTurnosAdmin(mes, direccion){
    return axiosRequest(urlGetTurnosAdmin + "/" + mes + "/" + direccion, {
        method: 'GET',
        headers: { 
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        } 
    }).
    then(response => response.data)
}

const urlGetTurnosSuperAdmin = "http://mapa.mec.gob.ar:3030/turnos/all"
export function getTurnosSuperAdmin(mes, tipo){
    console.log("TOKEN MES TIPO", mes, sessionStorage.getItem("token"), tipo)
    console.log("MES",mes, sessionStorage.getItem("token"))
    return axiosRequest(urlGetTurnosSuperAdmin + "/" + mes.toString(), {
        method: 'POST',
        body: tipo,
        headers: { 
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
        } 
    }).
    then(response => response.data)
}
